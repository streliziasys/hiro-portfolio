import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { soundEffects } from "@/lib/sound-effects";

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  withSound?: boolean;
}

const Button3D = React.forwardRef<HTMLButtonElement, Button3DProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    icon: Icon, 
    iconPosition = "left",
    withSound = true,
    children, 
    onClick,
    onMouseEnter,
    ...props 
  }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (withSound) {
        soundEffects.playClick();
      }
      onClick?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (withSound) {
        soundEffects.playHover();
      }
      onMouseEnter?.(e);
    };

    const variantClasses = {
      primary: "btn-3d",
      secondary: "btn-3d btn-secondary",
      accent: "btn-3d"
    };

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          variantClasses[variant],
          sizeClasses[size],
          "inline-flex items-center gap-2 font-mono",
          className
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : size === "md" ? 16 : 18} />}
        {children}
        {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : size === "md" ? 16 : 18} />}
      </button>
    );
  }
);

Button3D.displayName = "Button3D";

export { Button3D };