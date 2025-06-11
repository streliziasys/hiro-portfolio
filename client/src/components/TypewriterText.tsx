import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "" 
}: TypewriterTextProps) {
  const { displayText } = useTypewriter(text, speed, delay);

  return <span className={className}>{displayText}</span>;
}
