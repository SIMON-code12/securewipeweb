import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export const FeatureCard = ({
  stepNumber,
  icon: Icon,
  title,
  description,
  isActive,
  onClick
}: FeatureCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative bg-card rounded-xl p-6 border transition-all duration-300 cursor-pointer overflow-hidden h-64 flex flex-col justify-center",
        "hover:border-primary/20 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
        isActive && "border-primary shadow-[var(--shadow-elegant)] bg-card/80"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300",
          isActive && "opacity-100"
        )}
      />

      <div className="absolute top-5 right-5 text-8xl font-extrabold text-white/5 transition-all duration-300 group-hover:scale-110">
        {stepNumber}
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110 hover:rotate-6">
          <Icon className="text-white" size={28} />
        </div>

        <h4 className="text-lg font-semibold mb-3 text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {isActive && (
          <div className="mt-4 w-full h-0.5 bg-primary animate-[pulse-ring_2s_infinite]" />
        )}
      </div>
    </div>
  );
};
