import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button3D } from "./button-3d";

interface Popup3DProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Popup3D({ isOpen, onClose, title, children, className }: Popup3DProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className={`popup-overlay ${isOpen ? "show" : ""}`} onClick={onClose} />
      <div className={`popup-3d ${isOpen ? "show" : ""} ${className || ""}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold terminal-primary">{title}</h2>
          <Button3D
            variant="secondary"
            size="sm"
            icon={X}
            onClick={onClose}
            className="!p-2"
          />
        </div>
        <div className="terminal-text">{children}</div>
      </div>
    </>
  );
}