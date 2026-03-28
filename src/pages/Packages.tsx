import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero/hero-bg.jpg";
import familyTrip from "@/assets/packages/family-trip.jpg";
import honeymoon from "@/assets/packages/honeymoon.jpg";
import trekking from "@/assets/packages/trekking.jpg";
import soloTravel from "@/assets/packages/solo-travel.jpg";

const waMsg = (title: string) =>
  `https://wa.me/918143188042?text=${encodeURIComponent(`Hello Nova Global Solutions! I'm interested in your "${title}" package. Could you please share the details, itinerary, and pricing? Thank you!`)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const internationalPackages = [
  { img: familyTrip, title: "Family Trips", desc: "Create lasting memories with custom family vacation packages to the world's most beautiful destinations." },
  { img: honeymoon, title: "Honeymoon Packages", desc: "Romantic getaways designed for newlyweds — from Maldives to Europe and beyond." },
  { img: trekking, title: "Group Tours", desc: "Explore exciting destinations with like-minded travelers in our curated group tours." },
  { img: soloTravel, title: "Solo Travel", desc: "Embark on a journey of self-discovery with our carefully planned solo travel packages." },
];

const specialPackages = [
  { img: soloTravel, title: "Backpacking Trips", desc: "Adventure on a budget — explore hidden gems and off-beat trails across the globe." },
  { img: trekking, title: "Trekking Trips", desc: "From Himalayan trails to European Alpine routes — gear up for the adventure of a lifetime." },
  { img: trekking, title: "Biking Trips", desc: "Cruise through scenic roads and mountain passes on thrilling motorcycle adventures." },
];

const PackageCard = ({ img, title, desc, i }: { img: string; title: string; desc: string; i: number }) => (
  <motion.div
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-nova transition-shadow"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={960} height={640} />
    </div>
    <div className="p-6">
      <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <a
        href={waMsg(title)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-cta-gradient px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Enquire Now
      </a>
    </div>
  </motion.div>
);

const Packages = () => (
  <div>
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <img src={heroBg} alt="Packages" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
          Travel Packages
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-primary-foreground/80 text-lg">
          International & Domestic Packages for Every Traveler
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Popular Packages" title="International & Domestic Packages" description="Handpicked experiences for every kind of traveler." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internationalPackages.map((p, i) => <PackageCard key={p.title} {...p} i={i} />)}
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Adventure" title="Special Travel Experiences" description="For the thrill-seekers and adventure lovers." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialPackages.map((p, i) => <PackageCard key={p.title} {...p} i={i} />)}
        </div>
      </div>
    </section>
  </div>
);

export default Packages;
