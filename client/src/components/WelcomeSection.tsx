import { useTypewriter } from "@/hooks/useTypewriter";
import { Button3D } from "@/components/ui/button-3d";
import { Download, Mail, Code, Zap } from "lucide-react";

export default function WelcomeSection() {
  const { displayText: titleText, isComplete: titleComplete } = useTypewriter(
    "Hiro.null",
    80
  );
  
  const { displayText: subtitleText, isComplete: subtitleComplete } = useTypewriter(
    "A guy who's learning and developing himself",
    60,
    titleComplete ? 500 : 0
  );

  const { displayText: descText } = useTypewriter(
    "I'm a Developer. I'm not a BlackHat or WhiteHat. I just do what I like to do.",
    50,
    subtitleComplete ? 800 : 0
  );

  return (
    <section className="mb-16">
      <div className="space-y-6">
        <div className="flex items-center">
          <span className="terminal-primary mr-2">┌──(</span>
          <span className="terminal-accent font-bold">hiro</span>
          <span className="terminal-text">@</span>
          <span className="terminal-secondary font-bold">terminal</span>
          <span className="terminal-primary">)-[</span>
          <span className="terminal-text">~</span>
          <span className="terminal-primary">]</span>
        </div>
        <div className="flex items-center">
          <span className="terminal-primary mr-2">└─$</span>
          <span className="terminal-command">cat</span>
          <span className="terminal-arg ml-2">intro.txt</span>
          <span className="animate-cursor-blink terminal-command ml-1">|</span>
        </div>
        
        <div className="terminal-section">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold terminal-primary mb-2">
              # {titleText}
            </h1>
            <h2 className="text-xl terminal-secondary mb-4">
              ## {subtitleText}
            </h2>
            <p className="terminal-text text-lg leading-relaxed mb-8">
              {descText}
            </p>
            
            {subtitleComplete && (
              <div className="flex flex-wrap gap-4 mt-8">
                <Button3D
                  variant="primary"
                  icon={Code}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button3D>
                <Button3D
                  variant="secondary"
                  icon={Mail}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button3D>
                <Button3D
                  variant="accent"
                  icon={Zap}
                  onClick={() => window.open('https://github.com/streliziasys', '_blank')}
                >
                  GitHub
                </Button3D>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
