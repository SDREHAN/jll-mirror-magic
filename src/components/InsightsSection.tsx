import { ArrowRight } from "lucide-react";

const insights = [
  {
    tag: "Research",
    title: "India Office Market Report Q1 2026",
    description: "Comprehensive analysis of office space absorption, rental trends, and vacancy rates across key Indian cities.",
    date: "March 2026",
  },
  {
    tag: "Trends",
    title: "The Future of Flexible Workspaces",
    description: "How hybrid working models are reshaping demand for flexible and co-working spaces across the country.",
    date: "February 2026",
  },
  {
    tag: "Sustainability",
    title: "Green Buildings: India's Path to Net Zero",
    description: "An in-depth look at sustainable building practices and green certification trends in Indian real estate.",
    date: "January 2026",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Latest Insights</h2>
            <p className="text-muted-foreground text-lg">Research and perspectives shaping the future of real estate.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <article
              key={i}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent rounded-lg mb-5 group-hover:from-primary/20 transition-colors" />
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {item.tag}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
