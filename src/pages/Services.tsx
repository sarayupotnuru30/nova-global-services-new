import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero/hero-bg.jpg";
import touristVisa from "@/assets/services/tourist-visa.jpg";
import studentVisa from "@/assets/services/student-visa.jpg";
import businessVisa from "@/assets/services/business-visa.jpg";
import flightBooking from "@/assets/services/flight-booking.jpg";
import aboutTeam from "@/assets/about/about-team.jpg";

const WA = "https://wa.me/918143188042?text=Hi%2C%20I%20am%20interested%20in%20";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const visaServices = [
  { img: touristVisa, title: "Tourist Visa", desc: "Visit your dream destinations with our expert tourist visa processing for all major countries." },
  { img: touristVisa, title: "Visit Visa", desc: "Reunite with family and friends abroad with seamless visit visa assistance." },
  { img: studentVisa, title: "Student Visa", desc: "Study at world-class universities with our comprehensive student visa support." },
  { img: businessVisa, title: "Business Visa", desc: "Attend conferences, meetings, and expand your business globally with ease." },
];

const additionalServices = [
  { img: flightBooking, title: "Flight Booking", desc: "Get the best deals on domestic and international flights." },
  { img: flightBooking, title: "Travel Insurance", desc: "Travel worry-free with comprehensive travel insurance plans." },
  { img: aboutTeam, title: "Hotel Reservations", desc: "Premium hotel bookings at competitive prices worldwide." },
  { img: aboutTeam, title: "Travel Guidance", desc: "Expert advice on itineraries, documentation, and travel tips." },
];

const careerServices = [
  { img: businessVisa, title: "Resume Creation", desc: "Professional resumes tailored for international job markets." },
  { img: businessVisa, title: "Profile Marketing", desc: "Get your profile noticed by top employers worldwide." },
  { img: studentVisa, title: "Job Application Strategy", desc: "Strategic approach to landing your dream job abroad." },
];

const ServiceCard = ({ img, title, desc, i }: { img: string; title: string; desc: string; i: number }) => (
  <motion.div
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-nova transition-shadow"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={960} height={640} />
    </div>
    <div className="p-6">
      <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <a
        href={`${WA}${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-semibold text-accent hover:underline"
      >
        Enquire Now →
      </a>
    </div>
  </motion.div>
);

const Services = () => (
  <div>
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <img src={heroBg} alt="Services" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
          Our Services
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-primary-foreground/80 text-lg">
          Comprehensive visa, travel, and career solutions
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Visa Services" title="Expert Visa Processing" description="We handle all types of visas with a 98% success rate." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Travel Services" title="Additional Services" description="Everything you need for a perfect trip." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
        </div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Career Abroad" title="Career Abroad Support" description="Launch your international career with our expert guidance." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
