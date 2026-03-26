const footerLinks = {
  Services: ["Leasing", "Capital Markets", "Project Management", "Valuation", "Property Management"],
  Company: ["About Us", "Careers", "Our People", "Contact Us", "Newsroom"],
  Industries: ["Technology", "Healthcare", "Financial Services", "Retail", "Manufacturing"],
  "Connect with us": ["LinkedIn", "Twitter", "Facebook", "Instagram"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm mb-4 text-primary-foreground/90">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-primary-foreground/40">© 2026 Pinnacle Real Estate Services. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70">Privacy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70">Terms</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
