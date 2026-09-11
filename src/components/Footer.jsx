import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 - Contact Address */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact Address
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={18} className="shrink-0 text-emerald-300" />

                <span>01316-568710&nbsp;&nbsp;||&nbsp;&nbsp;01607-323472</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={18} className="shrink-0 text-emerald-300" />

                <a
                  href="mailto:officialmahamudulhasan@gmail.com"
                  className="no-underline transition hover:text-emerald-300"
                >
                  abdulmozid2k25@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-300"
                />

                <span>Demra, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Column 2 - About */}
          <div>
            <h3 className="text-lg font-bold">
              <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-sky-500 bg-clip-text text-transparent">
                ABDUL MOZID
              </span>
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              IT Consultant and Tech Enthusiast
            </p>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Social Media</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/affable.mozid/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="no-underline rounded-full border border-white/10 p-3 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:text-[#1877F2]"
              >
                <FaFacebook size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="no-underline rounded-full border border-white/10 p-3 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:text-[#25D366]"
              >
                <MessageCircle size={20} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/MOZID-2025/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="no-underline rounded-full border border-white/10 p-3 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
              >
                <FaGithubSquare size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdul-mozid-2k25/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="no-underline rounded-full border border-white/10 p-3 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:text-[#0A66C2]"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Telegram */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="no-underline rounded-full border border-white/10 p-3 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:text-[#26A5E4]"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Abdul Mozid . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
