import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";

const steps = [
  { title: "Wipe & Log", description: "Running secure wipe using NIST/DoD methods. Capturing device metadata." },
  { title: "Sign Certificate", description: "Issuer signs the canonical certificate using ECDSA P-256." },
  { title: "Verify Publicly", description: "QR links to public verifier endpoint for authenticity proof." }
];

const generateCertificate = () => {
  const serial = `DEMO-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const deviceId = `SN-${Math.floor(Math.random() * 100000000)}`;
  const wipedAt = new Date().toISOString();
  return {
    serial,
    device_id: deviceId,
    wiped_at: wipedAt,
    method: "DoD 5220.22-M",
    issuer: "SecureWipe Ltd",
    signature: "demo-signature-" + Math.random().toString(36).substr(2, 16)
  };
};

export const WipeProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [certificate, setCertificate] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (completed) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          setCompleted(true);
          setCertificate(generateCertificate());
          return 100;
        }
        if (newProgress >= (currentStep + 1) * 33.33) {
          setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
        }
        return newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [currentStep, completed]);

  const downloadCertificate = () => {
    const dataStr = JSON.stringify(certificate, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `certificate-${certificate.serial}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (completed) {
    return (
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-500" />
              Wipe Complete - Certificate Generated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-black/20 p-4 rounded-lg text-sm overflow-auto">
              {JSON.stringify(certificate, null, 2)}
            </pre>
            <div className="flex gap-4 mt-4">
              <Button onClick={downloadCertificate} className="flex items-center gap-2">
                <Download size={16} />
                Download Certificate
              </Button>
              <Button variant="outline" onClick={() => navigate("/#verify")}>
                Verify Certificate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Demo Wipe in Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="mb-4" />
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className={`p-4 rounded-lg border ${index <= currentStep ? 'bg-primary/10 border-primary' : 'bg-muted border-muted'}`}>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-muted-foreground">
            This is a demo simulation. No actual data is being wiped.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
