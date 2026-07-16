import { useState, useEffect, useRef } from 'react';

interface ScrollState {
  scrolled: boolean;
  scrollY: number;
  scrollDirection: 'up' | 'down' | 'none';
  isAtBottom: boolean;
  isAtTop: boolean;
  progress: number; // Scroll progress (0 to 100)
}

interface UseScrollOptions {
  threshold?: number;
  debounceMs?: number; // Debounce for updating state
  throttleMs?: number; // Throttle for updating state
}

export const useScroll = (options: UseScrollOptions = {}): ScrollState => {
  const {
    threshold = 60,
    debounceMs = 10, // Default debounce of 10ms for smoother updates
    throttleMs = 50, // Throttle to limit updates
  } = options;

  const [scrollState, setScrollState] = useState<ScrollState>({
    scrolled: false,
    scrollY: 0,
    scrollDirection: 'none',
    isAtBottom: false,
    isAtTop: true,
    progress: 0,
  });

  // Refs for debounce and throttle
  const lastScrollY = useRef(window.scrollY);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const lastUpdate = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress (0 to 100)
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0;

      // Determine scroll direction (include 'none' when equal)
      const direction: ScrollState['scrollDirection'] = currentScrollY > lastScrollY.current
        ? 'down'
        : currentScrollY < lastScrollY.current
        ? 'up'
        : 'none';

      // Check boundaries
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 10;
      const isAtTop = currentScrollY < 10;

      const newState: ScrollState = {
        scrolled: currentScrollY > threshold,
        scrollY: currentScrollY,
        scrollDirection: direction,
        isAtBottom,
        isAtTop,
        progress: Math.min(100, Math.max(0, progress)),
      };

      // Update state with debounce and throttle
      const now = Date.now();

      // Throttle: only update if enough time has passed
      if (now - lastUpdate.current < throttleMs) {
        // Store the latest state for the next update
        return;
      }

      // Debounce: clear previous timeout and set new one
      if (debounceMs > 0) {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
          setScrollState(newState);
          lastScrollY.current = currentScrollY;
        }, debounceMs);
      } else {
        setScrollState(newState);
        lastScrollY.current = currentScrollY;
      }

      lastUpdate.current = now;
    };

    // Use requestAnimationFrame for smoother updates
    const handleScroll = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(updateScrollState);
    };

    // Initial state
    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollState);

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [threshold, debounceMs, throttleMs]);

  return scrollState;
};