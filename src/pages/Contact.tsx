import { useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero/hero-bg.jpg";

const serviceOptions = [
  "Tourist Visa",
  "Visit Visa",
  "Student Visa",
  "Business Visa",
  "Flight Booking",
  "Travel Insurance",
  "Hotel Reservations",
  "Travel Guidance",
  "Resume Creation",
  "Profile Marketing",
  "Job Application Strategy",
  "Travel Packages",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Nova Global Solutions!%0A%0AMy name is ${encodeURIComponent(form.name)}.%0APhone: ${encodeURIComponent(form.phone)}%0AService Interested In: ${encodeURIComponent(form.service)}%0AMessage: ${encodeURIComponent(form.message)}%0A%0AKindly assist me. Thank you!`;
    window.open(`https://wa.me/918143188042?text=${text}`, "_blank");
  };

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img src={heroBg} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-primary-foreground/80 text-lg">
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Interested In</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="w-full bg-cta-gradient px-6 py-3.5 rounded-full font-semibold text-primary-foreground shadow-nova hover:opacity-90 transition-opacity">
                  Submit via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="bg-muted rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">📞 Phone</h3>
                  <p className="text-muted-foreground">8143188042 / 9505181369</p>
                </div>
                <div className="bg-muted rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">✉️ Email</h3>
                  <p className="text-muted-foreground">novaglobalservices2508@gmail.com</p>
                </div>
                <div className="bg-muted rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">📍 Address</h3>
                  <p className="text-muted-foreground">Plot No - 993, NGO's Colony, Main Road, Vanasthalipuram, LB Nagar, Hyderabad - 500070</p>
                </div>

                {/* Redesigned Business Hours */}
                <div className="bg-navy-gradient rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-primary-foreground mb-4">🕐 Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/80">Monday – Saturday</span>
                      <span className="text-primary-foreground font-semibold bg-primary-foreground/10 px-3 py-1 rounded-full text-sm">10:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/80">Sunday</span>
                      <span className="text-destructive font-semibold bg-destructive/10 px-3 py-1 rounded-full text-sm">Holiday / Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-muted rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">🌐 Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/@NOVAGLOBALSERVICES25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-background px-4 py-2.5 rounded-xl border border-border hover:shadow-card transition-shadow"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF0000]"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      <span className="text-sm font-medium text-foreground">YouTube</span>
                    </a>
                    <a
                      href="https://www.instagram.com/novaglobalservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-background px-4 py-2.5 rounded-xl border border-border hover:shadow-card transition-shadow"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#E4405F]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                      <span className="text-sm font-medium text-foreground">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.123456!2d78.5650!3d17.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIwJzA2LjAiTiA3OMKwMzMnNTQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nova Global Solutions Location"
        />
      </section>
    </div>
  );
};

export default Contact;
