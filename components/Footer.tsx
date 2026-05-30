import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary py-xl border-t border-on-primary-fixed-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-on-primary">
        <div className="col-span-1 space-y-sm">
          <Link
            href="/"
            className="font-headline-md text-[24px] font-bold text-on-primary block no-underline hover:opacity-80 transition-opacity"
          >
            GRG Poly Dynamics
          </Link>
          <p className="font-body-sm text-[14px] text-on-primary-container opacity-80 leading-relaxed max-w-xs">
            Engineering excellence in polymer dynamics. Delivering precision and
            technical authority globally. Certified ISO 9001:2015.
          </p>
        </div>

        <div className="space-y-sm">
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

        <div className="space-y-sm">
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

        <div className="space-y-sm">
          <h5 className="font-label-md text-[14px] font-semibold text-on-primary uppercase tracking-widest opacity-60">
            Contact HQ
          </h5>
          <div className="font-body-sm text-[14px] text-on-primary-container opacity-80 leading-relaxed">
            Plot No. 44, Industrial Area Phase II<br />
            Global Tech Park, Chennai, TN 600032<br />
            <br />
            E: solutions@grgpoly.com<br />
            T: +91 44 2250 0000
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
