import { FileText, Plug, Headset } from "lucide-react";

const cards = [
  {
    icon: FileText,
    title: "Compliance",
    description: "Keep auditable records and export CSV/JSON for audits."
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Cloud KMS, HSM, REST API, S3 export, and blockchain anchoring available."
  },
  {
    icon: Headset,
    title: "Support",
    description: (
      <>
        Contact us at{" "}
        <a
          href="mailto:hello@securewipe.example"
          className="text-primary hover:text-accent transition-colors underline"
        >
          hello@securewipe.example
        </a>
      </>
    )
  }
];

export const FooterCards = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-white/5 shadow-lg hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:border-primary/20 transition-all text-center"
            >
              <h5 className="text-base font-semibold mb-3 text-foreground flex items-center justify-center gap-2">
                <card.icon size={20} className="text-primary" />
                {card.title}
              </h5>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
