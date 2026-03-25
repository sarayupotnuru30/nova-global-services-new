// import { Link } from "react-router-dom";
// import logo from "@/assets/logo.png";

// const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="bg-navy-gradient text-primary-foreground">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="Nova Global Services" className="h-12 w-auto" />
//               <div>
//                 <span className="font-heading text-lg font-bold block">NOVA GLOBAL</span>
//                 <span className="text-xs tracking-widest text-primary-foreground/70">SERVICES</span>
//               </div>
//             </div>
//             <p className="text-sm text-primary-foreground/70 leading-relaxed">
//               Connecting You to the World — trusted visa consultancy, travel packages, and career abroad support from Hyderabad.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/services", label: "Services" },
//                 { to: "/packages", label: "Packages" },
//                 { to: "/contact", label: "Contact" },
//               ].map((l) => (
//                 <li key={l.to}>
//                   <Link to={l.to} onClick={scrollToTop} className="text-sm text-primary-foreground/70 hover:text-nova-gold transition-colors">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
//             <ul className="space-y-2">
//               {["Tourist Visa", "Student Visa", "Business Visa", "Flight Booking", "Travel Insurance", "Career Abroad"].map((s) => (
//                 <li key={s}>
//                   <Link to="/services" onClick={scrollToTop} className="text-sm text-primary-foreground/70 hover:text-nova-gold transition-colors">
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
//             <div className="space-y-3 text-sm text-primary-foreground/70">
//               <p>📞 8143188042 / 9505181369</p>
//               <p>✉️ novaglobalservices2508@gmail.com</p>
//               <p>📍 Plot No - 993, NGO's Colony, Main Road, Vanasthalipuram, LB Nagar, Hyderabad - 500070</p>
//               <p>🕐 10 AM – 6 PM (Mon–Sat)</p>
//             </div>
//             <div className="flex gap-4 mt-4">
//               <a href="https://www.youtube.com/@NOVAGLOBALSERVICES25" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-nova-gold transition-colors text-sm">
//                 YouTube
//               </a>
//               <a href="https://www.instagram.com/novaglobalservices" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-nova-gold transition-colors text-sm">
//                 Instagram
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
//           © {new Date().getFullYear()} Nova Global Services. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import { Link } from "react-router-dom";
import { Heart } from "lucide-react"; // Added Heart icon import
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Nova Global Services" className="h-12 w-auto" />
              <div>
                <span className="font-heading text-lg font-bold block">NOVA GLOBAL</span>
                <span className="text-xs tracking-widest text-primary-foreground/70">SERVICES</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Connecting You to the World — trusted visa consultancy, travel packages, and career abroad support from Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/packages", label: "Packages" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={scrollToTop} className="text-sm text-primary-foreground/70 hover:text-nova-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Tourist Visa", "Student Visa", "Business Visa", "Flight Booking", "Travel Insurance", "Career Abroad"].map((s) => (
                <li key={s}>
                  <Link to="/services" onClick={scrollToTop} className="text-sm text-primary-foreground/70 hover:text-nova-gold transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>📞 8143188042 / 9505181369</p>
              <p>✉️ novaglobalservices2508@gmail.com</p>
              <p>📍 Plot No - 993, NGO's Colony, Main Road, Vanasthalipuram, LB Nagar, Hyderabad - 500070</p>
              <p>🕐 10 AM – 6 PM (Mon–Sat)</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://www.youtube.com/@NOVAGLOBALSERVICES25" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-nova-gold transition-colors text-sm">
                YouTube
              </a>
              <a href="https://www.instagram.com/novaglobalservices" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-nova-gold transition-colors text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col gap-4 text-center text-sm">
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} Nova Global Services. All rights reserved.
          </p>

          {/* StaffArc Attribution */}
          <div className="flex justify-center items-center gap-1 text-primary-foreground/70">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;