import Link from "next/link";
import { Globe, Share2, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary py-xl border-t border-on-primary-fixed-variant">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-on-primary">
        <div className="md:col-span-5 lg:col-span-4 space-y-sm">
          <Link
            href="/"
            className="font-headline-md text-[24px] font-bold text-on-primary block no-underline hover:opacity-80 transition-opacity"
          >
            GRG Poly Dynamics
          </Link>
          <p className="font-body-sm text-[14px] text-on-primary-container opacity-80 leading-relaxed pr-md">
            Engineering excellence in polymer dynamics. Delivering precision and
            technical authority globally. Certified ISO 9001:2015.
          </p>
        </div>

        <div className="md:col-span-2 space-y-sm">
          <h5 className="font-label-md text-[14px] font-semibold text-on-primary uppercase tracking-widest opacity-60">
            Quick Links
          </h5>
          <nav className="flex flex-col gap-xs">
            <Link
              href="/expertise"
              className="font-body-sm text-[14px] text-on-primary-container opacity-80 hover:text-tertiary-fixed transition-opacity"
            >
              Expertise
            </Link>
            <Link
              href="/infrastructure"
              className="font-body-sm text-[14px] text-on-primary-container opacity-80 hover:text-tertiary-fixed transition-opacity"
            >
              Infrastructure
            </Link>
            <Link
              href="/gallery"
              className="font-body-sm text-[14px] text-on-primary-container opacity-80 hover:text-tertiary-fixed transition-opacity"
            >
              Gallery
            </Link>
            <Link
              href="/offerings"
              className="font-body-sm text-[14px] text-on-primary-container opacity-80 hover:text-tertiary-fixed transition-opacity"
            >
              Offerings
            </Link>
          </nav>
        </div>

        <div className="md:col-span-2 space-y-sm">
          <h5 className="font-label-md text-[14px] font-semibold text-on-primary uppercase tracking-widest opacity-60">
            Governance
          </h5>
          <nav className="flex flex-col gap-xs">
            <Link
              href="/policy"
              className="font-body-sm text-[14px] text-on-primary-container opacity-80 hover:text-tertiary-fixed transition-opacity"
            >
              Policy
            </Link>
            <Link
              href="/reports"
              className="font-body-sm text-[14px] text-on-primary-container opacity-80 hover:text-tertiary-fixed transition-opacity"
            >
              Reports
            </Link>
            <Link
              href="/contact"
              className="font-body-sm text-[14px] text-on-primary-container opacity-80 hover:text-tertiary-fixed transition-opacity"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="md:col-span-3 lg:col-span-4 space-y-sm flex flex-col">
          <h5 className="font-label-md text-[14px] font-semibold text-on-primary uppercase tracking-widest opacity-60">
            Contact HQ
          </h5>
          <div className="font-body-sm text-[14px] text-on-primary-container opacity-80 leading-relaxed">
            <a 
              href="https://maps.google.com/?q=Plot+No.+44,+Industrial+Area+Phase+II,+Global+Tech+Park,+Chennai,+TN+600032" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-tertiary-fixed transition-colors group mb-3"
            >
              <MapPin size={18} className="shrink-0 mt-1 opacity-60 group-hover:opacity-100" />
              <span>
                Plot No. 44, Industrial Area Phase II<br />
                Global Tech Park, Chennai, TN 600032
              </span>
            </a>
            <div className="space-y-2 ml-[30px]">
              <a href="mailto:solutions@grgpoly.com" className="block hover:text-tertiary-fixed transition-colors">
                E: solutions@grgpoly.com
              </a>
              <a href="tel:+914422500000" className="block hover:text-tertiary-fixed transition-colors">
                T: +91 44 2250 0000
              </a>
            </div>
          </div>
          
          <div className="w-full h-[180px] rounded-xl overflow-hidden shadow-lg border border-on-primary-fixed-variant/50 mt-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.96316262967!2d80.1983!3d13.0039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzE0LjAiTiA4MMKwMTEnNTMuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GRG Poly Dynamics Map"
              className="grayscale-[0.8] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mt-xl pt-md border-t border-on-primary-fixed-variant/50 flex flex-col sm:flex-row justify-between items-center gap-md">
        <span className="font-label-sm text-[12px] text-on-primary-container opacity-60">
          © {new Date().getFullYear()} GRG Poly Dynamics. Engineering Excellence.
        </span>
        <div className="flex gap-md">
          <button className="text-on-primary opacity-60 hover:opacity-100 transition-opacity">
            <Globe size={20} />
          </button>
          <button className="text-on-primary opacity-60 hover:opacity-100 transition-opacity">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
