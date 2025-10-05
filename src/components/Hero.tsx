import { PlayCircle, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiskAnimation } from "./DiskAnimation";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Wipe data securely — prove compliance instantly.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SecureWipe Pro provides audited, certificate-backed data erasure for devices and media. Generate tamper-proof e-certificates for every wipe, verify them publicly, and stay compliant with retention policies.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                onClick={() => navigate("/wipe")}
                className="rounded-lg bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Start Demo Wipe
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#verify")}
                className="rounded-lg border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary transition-all"
              >
                <Search className="mr-2 h-4 w-4" />
                Verify a Certificate
              </Button>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Proven cryptographic signatures (ECDSA P-256)",
                "PDF & JSON certificates with QR verification",
                "Timestamping & revocation lists",
                "HSM / KMS friendly key management"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-semibold mt-0.5">
                    <Check size={16} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-white/5 shadow-xl">
            <DiskAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
