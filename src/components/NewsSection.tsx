const news = [
  {
    date: "March 20, 2026",
    title: "Pinnacle advises on ₹2,500 crore industrial park deal in Tamil Nadu",
  },
  {
    date: "March 15, 2026",
    title: "India's data centre market to see 400 MW new supply by 2027",
  },
  {
    date: "March 10, 2026",
    title: "Pinnacle recognized as Asia Pacific's top workplace advisory firm",
  },
  {
    date: "March 5, 2026",
    title: "Bengaluru leads India in office space absorption for Q1 2026",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-corporate-dark">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-10">In the News</h2>
        <div className="space-y-0 divide-y divide-primary-foreground/10">
          {news.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-5 transition-colors"
            >
              <span className="text-sm text-primary-foreground/50 whitespace-nowrap md:w-40">
                {item.date}
              </span>
              <h3 className="text-lg text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
