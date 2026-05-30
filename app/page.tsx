"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Settings, Zap, CarFront, MonitorSmartphone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[921px] min-h-[600px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoRQDpiFksu1wboGoNjEGVnmIBxtgQB5rAw3xS2uq836o7lX_S2mhZp_2MoYEhLhjJIlXIs0kE-TBn-Yaz9iPxuMIJ4ugdtxLU8-9uqMx6hKl2Le7G9NWhJKoiEWg2yGzgaZze9ZvvXsfa3MgWZTxLqq02zZeoScyFr-cCuITeAjTdajyvnSbNJ_pAwcNNQrEAbYS6irebBtH93mYFpv9PV9tqebPykaO9aJsIe5fFnvPUqcDaqCX42FTx6wpsy1j_5OFb3CQoWBI"
            alt="Industrial manufacturing precision"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-transparent" />
        </div>
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-display-lg text-[40px] md:text-[48px] text-on-primary mb-md leading-tight">
              Engineering Precision. <br />Manufacturing Excellence.
            </h1>
            <p className="font-body-lg text-[18px] text-on-primary-container mb-lg opacity-90 leading-relaxed">
              Trusted plastic manufacturing and industrial solutions across automotive, electrical, and consumer industries. We engineer the future with high-performance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link
                href="/offerings"
                className="bg-[var(--color-orange-cta)] text-white px-lg py-md font-label-md text-[14px] uppercase font-semibold rounded shadow-lg hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                Explore Capabilities <ChevronRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-lg py-md font-label-md text-[14px] uppercase font-semibold rounded hover:bg-white/10 active:scale-95 transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-xl bg-surface industrial-grid">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-secondary font-label-md text-[14px] font-semibold tracking-widest uppercase mb-sm block">
                Established Authority
              </span>
              <h2 className="font-headline-lg text-[32px] text-primary mb-md">
                Pioneering Industrial Plastic Solutions
              </h2>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-lg leading-relaxed">
                GRG Poly Dynamics has been at the forefront of the manufacturing sector, delivering robust, high-precision plastic components. Our commitment to technical authority ensures every project meets the rigid standards required by global engineering giants.
              </p>
              
              <div className="grid grid-cols-2 gap-md">
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded shadow-sm hover:-translate-y-1 transition-transform duration-200">
                  <div className="text-primary font-display-lg text-[48px] leading-none mb-xs">20+</div>
                  <div className="text-on-surface-variant font-label-md text-[14px]">Years of Excellence</div>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded shadow-sm hover:-translate-y-1 transition-transform duration-200">
                  <div className="text-primary font-display-lg text-[48px] leading-none mb-xs">500+</div>
                  <div className="text-on-surface-variant font-label-md text-[14px]">Global Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary opacity-20" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7-TdULNcDTSir_l0cjKpcN0slV13TddF98jugFcOO6SAgCB7j5FOkaxg3UMtbPZ6vYu-x6dxhV4bZRQVTsRs0LmYMRc0DFzuV6jL4snoajHfecKMYnE4PQY77bfIWC_NfHacT0Em4WjiPyV6r5k4DxdUZ1Mh7GH85xDdU8sXfdfc3fd43FFhiz-ztQt3BrVUW5IUcC1lvbjl2jvdMB-DZH_rHjxCsH20kj0CrHWSiWxvjsJZGC8N6Li8Lm2-rMY3TU-NRVqBXzo"
                alt="Factory floor"
                className="rounded-lg shadow-xl w-full aspect-square object-cover grayscale-[0.2]"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-secondary opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-xl bg-primary-container text-on-primary">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-[32px] mb-sm">Industrial Domain Expertise</h2>
            <div className="w-20 h-1 bg-[var(--color-orange-cta)] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { icon: CarFront, title: "Automotive", desc: "Precision components for powertrain, interior trim, and structural assemblies." },
              { icon: Zap, title: "Electrical", desc: "High-insulation housings, switchgear parts, and complex connectivity modules." },
              { icon: Settings, title: "Machine Parts", desc: "Robust mechanical gears, pulleys, and friction-resistant industrial components." },
              { icon: MonitorSmartphone, title: "Consumer", desc: "Aesthetic and functional enclosures for home appliances and personal electronics." }
            ].map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group bg-primary-container border border-white/10 p-lg hover:bg-white/5 transition-colors duration-300 block"
              >
                <domain.icon className="text-[var(--color-orange-cta)] mb-md" size={40} />
                <h3 className="font-headline-md text-[24px] mb-sm">{domain.title}</h3>
                <p className="font-body-sm text-[14px] text-on-primary-container leading-relaxed">
                  {domain.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xl bg-white border-y border-outline-variant">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display-lg text-[40px] md:text-[48px] text-primary mb-md">
              Let's Build Manufacturing Excellence Together
            </h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant mb-xl">
              Consult with our engineering team to transform your product vision into a high-performance reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <Link
                href="/contact"
                className="bg-[var(--color-orange-cta)] text-white px-xl py-md font-label-md text-[14px] font-semibold uppercase rounded shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-xl py-md font-label-md text-[14px] font-semibold uppercase rounded shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
