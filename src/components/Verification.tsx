import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Verification = () => {
  const [certInput, setCertInput] = useState("");
  const { toast } = useToast();

  const handleVerify = () => {
    if (!certInput.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a certificate JSON or URL to verify.",
        variant: "destructive"
      });
      return;
    }

    try {
      const cert = JSON.parse(certInput);
      if (cert.serial && cert.device_id && cert.wiped_at && cert.method && cert.issuer) {
        toast({
          title: "Verification Successful",
          description: `Certificate ${cert.serial} is valid (demo mode).`
        });
      } else {
        toast({
          title: "Invalid Certificate",
          description: "The certificate is missing required fields.",
          variant: "destructive"
        });
      }
    } catch (e) {
      toast({
        title: "Invalid JSON",
        description: "Please enter valid JSON.",
        variant: "destructive"
      });
    }
  };

  const sampleCertificate = `{
  "serial": "DEMO-001",
  "device_id": "SN-12345678",
  "wiped_at": "2025-09-13T10:00:00Z",
  "method": "DoD 5220.22-M",
  "issuer": "SecureWipe Ltd"
}`;

  return (
    <section id="verify" className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-card to-background rounded-2xl p-8 md:p-10 border border-white/5 shadow-xl">
          <h3 className="text-3xl font-bold text-foreground mb-2 relative inline-block after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full">
            Try verification
          </h3>
          <p className="text-muted-foreground mt-6 mb-8">
            Paste a certificate JSON or upload a PDF to verify its signature. For demo, we include a sample certificate below you can inspect.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-black/20 rounded-xl p-6 border border-white/5">
              <h4 className="text-base font-medium mb-4 text-foreground">
                Sample certificate (canonical JSON)
              </h4>
              <pre className="bg-black/30 rounded-lg p-4 overflow-auto text-xs text-foreground leading-relaxed border border-white/5">
                {sampleCertificate}
              </pre>
            </div>

            <div className="bg-black/20 rounded-xl p-6 border border-white/5">
              <h4 className="text-base font-medium mb-4 text-foreground">
                Verification
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                In a real deployment, the server would fetch the issuer public key and verify the signature. Demo: the green badge below indicates a simulated valid signature.
              </p>

              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg font-semibold border border-primary/20 mb-2">
                <CheckCircle size={18} />
                Signature Valid
              </div>
              <div className="text-xs text-muted-foreground mb-6">
                serial: DEMO-001
              </div>

              <div>
                <label className="block text-xs text-muted-foreground mb-2">
                  Verify a real certificate
                </label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Paste certificate JSON or URL..."
                    value={certInput}
                    onChange={(e) => setCertInput(e.target.value)}
                    className="flex-1 bg-black/30 border-white/10 focus:border-primary"
                  />
                  <Button
                    onClick={handleVerify}
                    className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all"
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
