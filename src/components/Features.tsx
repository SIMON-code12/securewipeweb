import { useState, useEffect } from "react";
import { Eraser, FileSignature, CheckCircle } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    stepNumber: 1,
    icon: Eraser,
    title: "Wipe & Log",
    description: "Run secure wipe using NIST/DoD methods. Capture device metadata and a cryptographic hash of the wiped media."
  },
  {
    stepNumber: 2,
    icon: FileSignature,
    title: "Sign Certificate",
    description: "Issuer signs the canonical certificate (JSON/PDF) using the private key (ECDSA P-256). Signature is saved as sidecar and embedded metadata."
  },
  {
    stepNumber: 3,
    icon: CheckCircle,
    title: "Verify Publicly",
    description: "A QR on the PDF links to a public verifier endpoint that checks signature, timestamp, and revocation list — instantly proving authenticity."
  }
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-foreground mb-2 relative inline-block after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full">
          How it works
        </h3>
        <div className="h-8" />

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
