import { Building2, TrendingUp, Briefcase, Compass, BarChart3, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Commercial Leasing",
    description: "Find the perfect office space with our comprehensive leasing solutions across India's top cities.",
  },
  {
    icon: TrendingUp,
    title: "Capital Markets",
    description: "Access investment opportunities and advisory services for commercial real estate transactions.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "End-to-end project delivery from planning and design to construction and fit-out management.",
  },
  {
    icon: Compass,
    title: "Workplace Strategy",
    description: "Transform your workplace with data-driven insights that boost productivity and employee experience.",
  },
  {
    icon: BarChart3,
    title: "Valuation & Advisory",
    description: "Independent property valuations and strategic advisory for informed decision-making.",
  },
  {
    icon: Users,
    title: "Property Management",
    description: "Comprehensive facility management services to maximize the value of your real estate portfolio.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comprehensive real estate solutions tailored to meet every business need across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="group cursor-pointer border-none shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
