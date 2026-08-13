// Helper to format description with bullet points
export const formatDescription = (desc: string): string[] => {
  return desc.split('\n').filter(line => line.trim() !== '');
};

// Check if line is a bullet point
export const isBulletPoint = (line: string): boolean => {
  const trimmed = line.trim();
  return trimmed.startsWith('•') || trimmed.startsWith('-');
};

// Clean bullet point text
export const cleanBulletPoint = (line: string): string => {
  return line.trim().replace(/^[•\-]\s*/, '');
};