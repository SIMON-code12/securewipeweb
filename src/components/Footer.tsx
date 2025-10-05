export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground text-center md:text-left">
          <div>© {currentYear} SecureWipe Ltd</div>
          <div>All rights reserved • No external dependencies</div>
        </div>
      </div>
    </footer>
  );
};
