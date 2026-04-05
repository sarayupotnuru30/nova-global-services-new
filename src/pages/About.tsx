import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import aboutTeam from "@/assets/about/about-team.jpg";
import heroBg from "@/assets/hero/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const About = () => (
  <div>
    {/* Hero Banner */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <img src={heroBg} alt="About" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
          About Us
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-primary-foreground/80 text-lg">
          Connecting You to the World Since Day One
        </motion.p>
      </div>
    </section>

    {/* Company Intro */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Who We Are</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Nova Global Immigration and Tours — Your Trusted Partner
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Based in Hyderabad, Nova Global Immigration and Tours is a premier visa and travel consultancy firm dedicated to helping individuals and families achieve their global aspirations. Whether you're seeking a tourist visa, planning to study abroad, or looking for career opportunities overseas, we provide comprehensive end-to-end support.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of experienced consultants works tirelessly to ensure a seamless experience — from documentation and application filing to travel arrangements and career guidance.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={aboutTeam} alt="Our Team" className="rounded-2xl shadow-nova w-full object-cover" loading="lazy" width={1280} height={720} />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Why Choose Us" title="Top Visa Services in Hyderabad" description="Here's what sets us apart from the rest." />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Trusted Visa Guidance", desc: "Expert processing for tourist, student, business, and visit visas with a 98% success rate.", emoji: "🛂" },
            { title: "End-to-End Travel Planning", desc: "From flight bookings to hotel reservations and travel insurance — we handle it all.", emoji: "🌍" },
            { title: "Career Abroad Support", desc: "Resume creation, profile marketing, and job application strategies to land your dream role overseas.", emoji: "💼" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-2xl p-8 shadow-card text-center"
            >
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="font-heading text-xl font-bold text-foreground mt-4">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Our Mission", desc: "To simplify global travel and immigration by providing reliable, transparent, and efficient consultancy services to every client." },
            { title: "Our Vision", desc: "To become India's most trusted travel and visa consultancy, empowering individuals to explore the world with confidence." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-navy-gradient rounded-2xl p-8 text-primary-foreground"
            >
              <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
