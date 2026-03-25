import { useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero/hero-bg.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Nova Global Services,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`;
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
                <div className="bg-navy-gradient rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-primary-foreground mb-2">🕐 Business Hours</h3>
                  <p className="text-primary-foreground/80 text-lg font-semibold">10 AM – 6 PM</p>
                  <p className="text-primary-foreground/60 text-sm">Monday to Saturday</p>
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
          title="Nova Global Services Location"
        />
      </section>
    </div>
  );
};

export default Contact;
