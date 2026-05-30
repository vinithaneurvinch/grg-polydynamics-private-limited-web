"use client";

import { motion } from "framer-motion";
import { CarFront, Zap, Settings, MonitorSmartphone, CheckCircle2 } from "lucide-react";

export default function ExpertisePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRilC7UVFLwcka5kPl-IUwbyBldEBQ1_l_svmVlcR2N1VJVVLU11QYIOqxfsI-V_hvrRItPzt7xLqui2fBye31G1LPVfIoNRDMZpDM5AAjdhewWJMi0lrnKLJsypMWm_6O-gIjNw3clz0OGi2wtxHmgNYE9GDA-4qjC5tT0GF15tZdnu0IE7qEQcab_H8orKb9pd74fSkQRSa4OOLdKBL3pEzN0KAt27gjs_5UQ_T5_xaViCSo55PAgn2RFYJ33tgHRVmd2BDccE8"
            alt="Manufacturing Machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl bg-surface-container-lowest p-lg border-l-4 border-secondary shadow-lg"
          >
            <span className="font-label-md text-[14px] font-semibold tracking-wider text-secondary-container bg-primary-container px-sm py-1 rounded-sm mb-base inline-block">
              ENGINEERING AUTHORITY
            </span>
            <h1 className="font-display-lg text-[40px] md:text-[48px] text-primary mb-md">
              Domain Expertise
            </h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
              Mastering advanced polymer engineering for global industries. We deliver precision-machined solutions that meet the rigorous standards of Tier-1 manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Navigation/Summary */}
      <section className="py-xl bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          {[
            { icon: CarFront, title: "Automotive" },
            { icon: Zap, title: "Electrical" },
            { icon: Settings, title: "Machine Components" },
            { icon: MonitorSmartphone, title: "Consumer Products" }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-md hover:bg-surface-container-lowest transition-colors cursor-pointer group rounded"
            >
              <item.icon className="mx-auto text-secondary mb-base group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-label-md text-[14px] font-semibold text-primary group-hover:text-secondary">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Automotive Section */}
      <section className="py-xl bg-surface-container-lowest overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="flex items-center gap-base mb-sm">
                <div className="w-12 h-[2px] bg-secondary" />
                <span className="font-label-md text-[14px] font-semibold text-secondary tracking-widest">SECTOR 01</span>
              </div>
              <h2 className="font-headline-lg text-[32px] text-primary mb-md uppercase tracking-tight">
                Automotive Engineering
              </h2>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-lg leading-relaxed">
                Supplying critical high-tolerance polymer components for the global automotive supply chain. Our parts are engineered for thermal stability, impact resistance, and weight reduction.
              </p>
              <div className="space-y-md">
                <div className="flex gap-md border-b border-outline-variant pb-md">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-label-md text-[14px] font-semibold text-primary mb-xs">Engine Management Systems</h4>
                    <p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">High-heat resistant polymers for sensor housings and fluid connectors.</p>
                  </div>
                </div>
                <div className="flex gap-md border-b border-outline-variant pb-md">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-label-md text-[14px] font-semibold text-primary mb-xs">Interior Aesthetics & Safety</h4>
                    <p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">A-class surface finishes for dashboard components and structural safety brackets.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative group"
            >
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary opacity-10 z-0" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8uoxnB_2fdctAiPB4c9hyie_hiLFgIHzB8jaPdZ4Nid79juyiXpzEYViaSZ6YuTiIHR6RRn5V3SKfH7MOnDhnUhTGirBsZD4WzBSMDYGftVflddxiQoy2l2G_D1y-UHLjRXr8bBN4rVfRRROmZxXjdC6rJArPsQJItYwMzTtEHTs9wdXPa3S8AqKOLY6KyMlZIZ_aJl6beQuaaeVMacSBjgU-4ZbKRyli5ogwMkP6-jyREvZNRGjxL7OWeNcBSjfHYKiL-K_R5fA"
                alt="Automotive Polymer Intake"
                className="relative z-10 w-full h-[400px] object-cover border border-outline-variant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Electrical Section */}
      <section className="py-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 grid grid-cols-2 gap-base"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZCc4M0eEYCIL4-6NeCB-GTW4uxefX1EiQcoYycv46uZVPlihhyerw4qkFVCBbfUHqY-Mj8Psf7j1ZTqstU9jvFv7L0w77hDzTcoq1Af4kQxpt2T_AAsRZ9KCdrc_gIDiLWcKjVXAVCfaBxraJlHsK8thQtuBwLblnDgPmquFehTn9CsjP5k6H2GUymG-NMY5bCrIWMfBLHJ13rLaTe2CYYKVXlKGGXw6zRfFkADHTFR3GfbG1cJXqFgakJJIYGUXgYsdWFR4iVio"
                alt="Circuit Breakers"
                className="w-full h-80 object-cover border border-outline-variant"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxmTmMkAAP8JVIhh84cF74WQUx_Xo5lCooOBfFpyn2fA-H4IIwX6KgyN_hE0A4UuyWIKxP6_UF6t2O_FCq9dfA2Kmw-mvDNh85HOnu97XAMi5H3vmHeAs0RGAeYNu-L2HY2wWCBzxzcvn43jol9gTKbBxlUmLlli1jPIkRVEi3CrEmtztaMz1F3CH9oqNQvTn5I3jtHzo8sm8bmGUpbHAUjJb89jqzePrCwnYXXNqmnSy6TBYEub49b2tmmV6rsWWa4rTNPyLouII"
                alt="Electrical Insulators"
                className="w-full h-80 object-cover mt-xl border border-outline-variant"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 md:pl-lg mt-lg md:mt-0"
            >
              <div className="flex items-center gap-base mb-sm">
                <div className="w-12 h-[2px] bg-secondary" />
                <span className="font-label-md text-[14px] font-semibold text-secondary tracking-widest">SECTOR 02</span>
              </div>
              <h2 className="font-headline-lg text-[32px] text-primary mb-md uppercase tracking-tight">
                Electrical & Energy
              </h2>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-lg leading-relaxed">
                Ensuring safety and performance with flame-retardant, high-dielectric polymers. Our components are the backbone of modern power distribution systems.
              </p>
              <ul className="space-y-base">
                {[
                  "UL-94 V0 Compliant Housings",
                  "Insulating Brackets & Terminal Blocks",
                  "Smart Meter Enclosures"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-sm text-on-surface">
                    <span className="bg-primary-container text-secondary-container p-1 rounded-full shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    <span className="font-body-sm text-[14px] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
