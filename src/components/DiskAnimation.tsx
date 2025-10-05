import { Check } from "lucide-react";

export const DiskAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.5)]"
        style={{
          background: "conic-gradient(from 0deg, hsl(160 84% 39%), hsl(165 80% 38%), hsl(170 76% 37%), hsl(175 72% 36%), hsl(180 68% 35%), hsl(160 84% 39%))"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[wipe_3s_infinite_linear]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-5xl opacity-0 animate-[appear_0.5s_1.5s_forwards]">
            <Check size={48} strokeWidth={3} />
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-3">
        Visualization of secure data wiping process with verification
      </p>
    </div>
  );
};
