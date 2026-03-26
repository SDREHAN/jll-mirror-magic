import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
      <img
        src={heroImage}
        alt="Modern glass office building at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark/70 via-corporate-dark/40 to-transparent" />

      <div className="relative container h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Find, design and manage your workspace in India
          </h1>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6"
          >
            Read more <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Spotlight stories bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container">
          <div className="bg-spotlight-bg/95 backdrop-blur-sm rounded-t-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="px-6 py-4 flex items-center">
                <span className="text-corporate-red font-semibold text-lg">Spotlight stories</span>
              </div>
              {[
                "Find, design and manage your workspace in India",
                "Global Real Estate Perspective March 2026",
                "Turn your workspace into a strategic advantage",
                "Build your dream project on time, on budget",
              ].map((story, i) => (
                <a
                  key={i}
                  href="#"
                  className={`px-5 py-4 text-sm text-primary-foreground/80 hover:text-primary-foreground border-l border-primary-foreground/10 transition-colors ${
                    i === 0 ? "bg-primary-foreground/5" : ""
                  }`}
                >
                  {story}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
