import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import avatarImage from "@/assets/josi.jpg";
import { Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      <div className="absolute top-0 right-0 w-[38%] h-full bg-[#D4D4D4] hidden md:block" />
      <div
        className="absolute top-0 hidden md:block h-full w-20 bg-[#D4D4D4]"
        style={{ right: 'calc(38% - 2rem)', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[calc(100vh-4rem)]">
          <div className="md:col-span-7 flex flex-col justify-center py-20 md:py-0">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#f3ec86] mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Front-End Software Engineer
            </p>
            <h1
              className="font-black uppercase leading-[0.9] text-[#fffeff] mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(3.5rem, 10vw, 8.5rem)',
              }}
            >
              JOSIANE
              <br />
              <span style={{ WebkitTextStroke: '2px #f3ec86', color: 'transparent' }}>
                S. PIZZETTI
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#fffeff] max-w-md leading-relaxed mb-10">
              Crafting fast, accessible, and beautiful interfaces — from{' '}
              <span className="text-[#f3ec86]">web apps</span> to{' '}
              <span className="text-[#f3ec86]">mobile products</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-[#D4D4D4] px-7 py-3 text-black text-sm font-medium tracking-wide hover:bg-[#f3ec86] hover:text-black transition-all duration-200"
              >
                View Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:josiane.pizzetti@gmail.com"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-3 text-white/70 text-sm hover:border-[#f3ec86] hover:text-[#f3ec86] transition-all duration-200"
              >
                <Mail size={14} />
                Say Hello
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end items-center py-8 md:py-0 relative z-10">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#f3ec86] pointer-events-none" />
              <Avatar
                className="aspect-[3/4] h-[350px] w-auto shrink-0 overflow-hidden rounded-none"
                onMouseEnter={() => setIsAvatarHovered(true)}
                onMouseLeave={() => setIsAvatarHovered(false)}
              >
                <AvatarImage
                  src={avatarImage}
                  alt="Josiane Pizzetti"
                  className={`h-full w-full object-cover object-top aspect-auto ${
                    !isAvatarHovered ? 'grayscale' : 'grayscale-0'
                  } transition-all duration-700 ease-in-out`}
                />
                <AvatarFallback className="rounded-none text-2xl">JSP</AvatarFallback>
              </Avatar>
              <div
                className="absolute -bottom-5 -right-5 bg-[#f3ec86] px-4 py-2 text-black text-xs font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                9+ YRS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-2">
        <span
          className="text-[10px] tracking-[0.3em] text-white/25 uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-white/15" />
      </div>
    </section>
  )
}
