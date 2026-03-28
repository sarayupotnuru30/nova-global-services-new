// import { motion } from "framer-motion";
// import SectionHeading from "@/components/SectionHeading";
// import heroBg from "@/assets/hero/hero-bg.jpg";
// import touristVisa from "@/assets/services/tourist-visa.jpg";
// import studentVisa from "@/assets/services/student-visa.jpg";
// import businessVisa from "@/assets/services/business-visa.jpg";
// import flightBooking from "@/assets/services/flight-booking.jpg";
// import aboutTeam from "@/assets/about/about-team.jpg";

// const waMsg = (msg: string) => `https://wa.me/918143188042?text=${encodeURIComponent(msg)}`;

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
// };

// const visaServices = [
//   { img: touristVisa, title: "Tourist Visa", desc: "Visit your dream destinations with our expert tourist visa processing for all major countries." },
//   { img: touristVisa, title: "Visit Visa", desc: "Reunite with family and friends abroad with seamless visit visa assistance." },
//   { img: studentVisa, title: "Student Visa", desc: "Study at world-class universities with our comprehensive student visa support." },
//   { img: businessVisa, title: "Business Visa", desc: "Attend conferences, meetings, and expand your business globally with ease." },
// ];

// const additionalServices = [
//   { img: flightBooking, title: "Flight Booking", desc: "Get the best deals on domestic and international flights." },
//   { img: flightBooking, title: "Travel Insurance", desc: "Travel worry-free with comprehensive travel insurance plans." },
//   { img: aboutTeam, title: "Hotel Reservations", desc: "Premium hotel bookings at competitive prices worldwide." },
//   { img: aboutTeam, title: "Travel Guidance", desc: "Expert advice on itineraries, documentation, and travel tips." },
// ];

// const careerServices = [
//   { img: businessVisa, title: "Resume Creation", desc: "Professional resumes tailored for international job markets." },
//   { img: businessVisa, title: "Profile Marketing", desc: "Get your profile noticed by top employers worldwide." },
//   { img: studentVisa, title: "Job Application Strategy", desc: "Strategic approach to landing your dream job abroad." },
// ];

// const ServiceCard = ({ img, title, desc, i }: { img: string; title: string; desc: string; i: number }) => (
//   <motion.div
//     custom={i}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeUp}
//     className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-nova transition-shadow"
//   >
//     <div className="aspect-[16/10] overflow-hidden">
//       <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={960} height={640} />
//     </div>
//     <div className="p-6">
//       <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
//       <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
//       <a
//         href={waMsg(`Hello Nova Global Solutions! I'm interested in your "${title}" service. Could you please provide more details? Thank you!`)}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block mt-4 text-sm font-semibold text-accent hover:underline"
//       >
//         Enquire Now →
//       </a>
//     </div>
//   </motion.div>
// );

// const Services = () => (
//   <div>
//     <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
//       <img src={heroBg} alt="Services" className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-hero-gradient" />
//       <div className="relative z-10 text-center">
//         <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
//           Our Services
//         </motion.h1>
//         <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-primary-foreground/80 text-lg">
//           Comprehensive visa, travel, and career solutions
//         </motion.p>
//       </div>
//     </section>

//     <section className="py-20 bg-card">
//       <div className="container mx-auto px-4">
//         <SectionHeading subtitle="Visa Services" title="Expert Visa Processing" description="We handle all types of visas with a 98% success rate." />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {visaServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
//         </div>
//       </div>
//     </section>

//     <section className="py-20 bg-section-gradient">
//       <div className="container mx-auto px-4">
//         <SectionHeading subtitle="Travel Services" title="Additional Services" description="Everything you need for a perfect trip." />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {additionalServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
//         </div>
//       </div>
//     </section>

//     <section className="py-20 bg-card">
//       <div className="container mx-auto px-4">
//         <SectionHeading subtitle="Career Abroad" title="Career Abroad Support" description="Launch your international career with our expert guidance." />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {careerServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
//         </div>
//       </div>
//     </section>
//   </div>
// );

// export default Services;










import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero/hero-bg.jpg";
import touristVisa from "@/assets/services/tourist-visa.jpg";
import studentVisa from "@/assets/services/student-visa.jpg";
import businessVisa from "@/assets/services/business-visa.jpg";
import flightBooking from "@/assets/services/flight-booking.jpg";
import aboutTeam from "@/assets/about/about-team.jpg";
import { MessageSquare, Search, Trophy, ShieldCheck } from "lucide-react";

const waMsg = (msg: string) => `https://wa.me/918143188042?text=${encodeURIComponent(msg)}`;

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
  { img: businessVisa, title: "Resume Crafting", desc: "We craft resumes that highlight your skills and experience, making you job ready." },
  { img: studentVisa, title: "Job Search & Apply", desc: "We search and apply to jobs on your behalf so you can focus on what matters." },
];

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8 text-accent" />,
    title: "Step 1: We Listen to You",
    desc: "Tell us about yourself, your skills, dreams, and what you want. We'll make a plan just for you.",
  },
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: "Step 2: We Find Jobs & Apply",
    desc: "We search for jobs that fit you and send applications so you don't have to. More applications, more chances!",
  },
  {
    icon: <Trophy className="w-8 h-8 text-accent" />,
    title: "Step 3: We Teach You to Win",
    desc: "Get simple tips to do great in interviews and impress the people hiring.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Step 4: Background Verification",
    desc: "Worried about delays? We guide you through the background checks so you can start your job sooner.",
  },
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
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
    </div>
    <div className="p-6">
      <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <a
        href={waMsg(`Hello Nova Global Solutions! I'm interested in your "${title}" service. Could you please provide more details? Thank you!`)}
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

    {/* NEW SECTION: 4-Step Process */}
    <section className="py-20 bg-section-gradient border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading 
          subtitle="Our Methodology" 
          title="The 4-Step Process" 
          description="How we take you from applicant to successful hire." 
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-card rounded-2xl shadow-sm border border-border/50 hover:border-accent/30 transition-colors"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Career Abroad" title="Career Abroad Support" description="Launch your international career with our expert guidance." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-6">
          {careerServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
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
  </div>
);

export default Services;