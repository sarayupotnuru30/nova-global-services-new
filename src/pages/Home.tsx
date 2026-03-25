import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero/hero-bg.jpg";
import touristVisa from "@/assets/services/tourist-visa.jpg";
import studentVisa from "@/assets/services/student-visa.jpg";
import businessVisa from "@/assets/services/business-visa.jpg";
import flightBooking from "@/assets/services/flight-booking.jpg";
import usa from "@/assets/countries/usa.jpg";
import uk from "@/assets/countries/uk.jpg";
import australia from "@/assets/countries/australia.jpg";
import canada from "@/assets/countries/canada.jpg";
import familyTrip from "@/assets/packages/family-trip.jpg";
import honeymoon from "@/assets/packages/honeymoon.jpg";
import trekking from "@/assets/packages/trekking.jpg";
import aboutTeam from "@/assets/about/about-team.jpg";

const WA_BASE = "https://wa.me/918143188042?text=";

const waMsg = (msg: string) => `${WA_BASE}${encodeURIComponent(msg)}`;

const WA_CONSULTATION = waMsg("Hello Nova Global Services! I'd like to get a free consultation regarding your visa and travel services. Could you please guide me?");
const WA_EXPERT = waMsg("Hi Nova Global Services! I'd love to speak with a visa expert. Could you please help me with my queries?");
const WA_CALLBACK = waMsg("Hello Nova Global Services! I'd appreciate a free callback within 10 minutes to discuss my travel/visa requirements. Thank you!");
const WA_CTA_BOTTOM = waMsg("Hi Nova Global Services! I'm interested in starting my global journey. Could you please provide me a free consultation?");

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const services = [
  { img: touristVisa, title: "Tourist Visa", desc: "Explore the world with hassle-free tourist visa processing." },
  { img: studentVisa, title: "Student Visa", desc: "Pursue your dream education abroad with expert guidance." },
  { img: businessVisa, title: "Business Visa", desc: "Expand your business globally with our corporate visa support." },
  { img: flightBooking, title: "Flight Booking", desc: "Best deals on international and domestic flights." },
];

const countries = [
  { img: usa, name: "USA", flag: "🇺🇸" },
  { img: uk, name: "United Kingdom", flag: "🇬🇧" },
  { img: australia, name: "Australia", flag: "🇦🇺" },
  { img: canada, name: "Canada", flag: "🇨🇦" },
];

const packages = [
  { img: familyTrip, title: "Family Trips", desc: "Create unforgettable memories with your loved ones." },
  { img: honeymoon, title: "Honeymoon Packages", desc: "Romantic getaways to the world's most beautiful destinations." },
  { img: trekking, title: "Trekking Adventures", desc: "Conquer peaks and explore trails across stunning landscapes." },
];

const stats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "25+", label: "Countries Served" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Years Experience" },
];

const Home = () => (
  <div className="overflow-hidden">
    {/* HERO */}
    <section className="relative min-h-screen flex items-center justify-center">
      <img src={heroBg} alt="Airport" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      
      <div className="absolute top-20 right-10 text-6xl animate-float opacity-20 select-none">✈️</div>
      <div className="absolute bottom-32 left-10 text-5xl animate-float opacity-15 select-none" style={{ animationDelay: "1s" }}>🌍</div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6"
        >
          Top Visa Services in Hyderabad
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight"
        >
          Your Gateway to<br />
          <span className="text-nova-gold">Global Opportunities</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
        >
          Visa Services &nbsp;|&nbsp; Travel Packages &nbsp;|&nbsp; Career Abroad Support
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href={WA_CONSULTATION} target="_blank" rel="noopener noreferrer" className="bg-cta-gradient px-7 py-3.5 rounded-full font-semibold text-primary-foreground shadow-nova hover:opacity-90 transition-opacity">
            Get Free Consultation
          </a>
          <Link to="/services" className="px-7 py-3.5 rounded-full font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            Check Visa Eligibility
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a href={WA_EXPERT} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full text-sm font-medium border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            💬 Talk to Expert on WhatsApp
          </a>
          <a href={WA_CALLBACK} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full text-sm font-semibold bg-nova-gold text-foreground hover:opacity-90 transition-opacity animate-pulse-glow">
            📞 Get Free Call Back in 10 Minutes
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>

    {/* STATS */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <span className="text-3xl md:text-4xl font-heading font-bold text-gradient">{s.value}</span>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT PREVIEW */}
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Trusted Visa & Travel Consultancy in Hyderabad
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nova Global Services is your one-stop destination for visa processing, travel planning, and career abroad support. With years of experience and thousands of satisfied clients, we provide end-to-end assistance to make your global dreams a reality.
            </p>
            <div className="mt-6 space-y-3">
              {["Trusted visa guidance for 25+ countries", "End-to-end travel planning & packages", "Career abroad support with resume & profile marketing"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-0.5">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block mt-8 bg-cta-gradient px-6 py-3 rounded-full font-semibold text-primary-foreground shadow-nova hover:opacity-90 transition-opacity">
              Learn More About Us
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={aboutTeam} alt="Our Team" className="rounded-2xl shadow-nova w-full object-cover" loading="lazy" width={1280} height={720} />
          </motion.div>
        </div>
      </div>
    </section>

    {/* SERVICES PREVIEW */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="What We Offer" title="Our Premium Services" description="From visa processing to flight bookings, we handle everything for your global journey." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-nova transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={960} height={640} />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-block bg-cta-gradient px-6 py-3 rounded-full font-semibold text-primary-foreground shadow-nova hover:opacity-90 transition-opacity">
            View All Services
          </Link>
        </div>
      </div>
    </section>

    {/* COUNTRIES */}
    <section className="py-20 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Destinations" title="Countries We Serve" description="Expert visa assistance for the world's top destinations." light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c, i) => (
            <motion.div key={c.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={960} height={640} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-3xl">{c.flag}</span>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mt-1">{c.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* PACKAGES PREVIEW */}
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Travel Packages" title="Explore Our Packages" description="Curated travel experiences for every type of traveler." />
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-nova transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={960} height={640} />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href={waMsg(`Hello Nova Global Services! I'm interested in your "${p.title}" package. Could you please share more details and pricing? Thank you!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-semibold text-accent hover:underline"
                >
                  Enquire Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/packages" className="inline-block bg-cta-gradient px-6 py-3 rounded-full font-semibold text-primary-foreground shadow-nova hover:opacity-90 transition-opacity">
            View All Packages
          </Link>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Testimonials" title="What Our Clients Say" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Rajesh Kumar", text: "Nova Global Services made my USA visa process incredibly smooth. Highly recommended!", role: "Tourist Visa Client" },
            { name: "Priya Sharma", text: "Got my student visa for Australia within weeks. Their team is professional and supportive.", role: "Student Visa Client" },
            { name: "Mohammed Ali", text: "Best travel consultancy in Hyderabad. They planned our entire family trip perfectly.", role: "Travel Package Client" },
          ].map((t, i) => (
            <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-muted rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-nova-gold">★</span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-cta-gradient">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Start Your Global Journey?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Get a free consultation today and let our experts guide you through every step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={WA_CTA_BOTTOM} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full font-semibold bg-primary text-primary-foreground shadow-nova hover:opacity-90 transition-opacity">
              Get Free Consultation
            </a>
            <Link to="/contact" className="px-8 py-3.5 rounded-full font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
