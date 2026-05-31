"use client";

import { motion } from "framer-motion";
import { ChevronRight, PenTool, Printer, Factory, PaintBucket, Wrench, PackageSearch } from "lucide-react";
import Link from "next/link";

export default function OfferingsPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-primary-container text-on-primary py-xl overflow-hidden hero-clip">
        <div className="absolute inset-0 opacity-10 technical-grid" />
        <div className="relative px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto grid md:grid-cols-2 gap-lg items-center min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-md"
          >
            <span className="inline-block px-sm py-xs bg-secondary-container text-on-secondary-container rounded font-label-sm text-[12px] uppercase font-bold tracking-widest">
              PRECISION CAPABILITIES
            </span>
            <h1 className="font-display-lg text-[40px] md:text-[48px] leading-tight">
              Comprehensive Polymer Engineering Solutions
            </h1>
            <p className="font-body-lg text-[18px] opacity-80 max-w-[500px] leading-relaxed">
              From conceptual design to high-volume production, we provide vertically integrated manufacturing services that meet global aerospace and automotive standards.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeOSR2O91U8Jdr18zbSJVekGHqmZm1O-YiBzW0xeZvE1bdwiEl0_V8KSy0mZ0GjFgoF_SJTtj_IWoS736_WHl-cEIxEHkaO0mTtpRgCoys7gpja-1AoXu1SsjZStMEfDvcIyHwFwMn_nCqsp3dJDNKyNpY1mxBEimdfLDjg5M3wHuabZeLlj5OhXiDioQwKTBay9fHCywT52rvsxvrdSrvEV_zT16sxewU8zLtP0W61T1M8QCbrZrQzlRNXH5-PIEJ-U9Z0cdj_4c"
              alt="Advanced Manufacturing"
              className="rounded-xl shadow-2xl border border-outline-variant/20 object-cover h-[400px] w-full"
            />
          </motion.div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-xl bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
            <div>
              <h2 className="font-headline-lg text-[32px] text-primary">Comprehensive Offerings</h2>
              <p className="font-body-md text-[16px] text-on-surface-variant mt-sm">End-to-end manufacturing lifecycle management.</p>
            </div>
            <div className="hidden md:block h-px bg-outline-variant flex-grow mx-lg mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              { id: "SPEC-01", title: "Product Development", desc: "Converting concepts into manufacturable designs with DFM principles.", icon: PenTool },
              { id: "SPEC-02", title: "Prototyping", desc: "Rapid 3D printing and soft-tooling for validation and market testing.", icon: Printer },
              { id: "SPEC-03", title: "Mould Making", desc: "In-house precision toolroom for high-cavitation steel moulds.", icon: Wrench },
              { id: "SPEC-04", title: "Plastic Production", desc: "Automated injection molding machines from 50T to 1200T capacity.", icon: Factory },
              { id: "SPEC-05", title: "Secondary Finishing", desc: "Premium Painting, Chrome Plating, and surface treatments.", icon: PaintBucket },
              { id: "SPEC-06", title: "Printing Solutions", desc: "High-fidelity Screen and Pad printing for branding and markings.", icon: PackageSearch },
            ].map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest border border-outline-variant overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-surface-container-high px-md py-sm border-b border-outline-variant flex justify-between items-center group-hover:bg-primary-container group-hover:border-primary-container transition-colors">
                  <span className="font-label-sm text-[12px] font-semibold tracking-wider text-secondary group-hover:text-secondary-fixed">
                    {service.id}
                  </span>
                  <service.icon size={16} className="text-on-surface-variant group-hover:text-white" />
                </div>
                <div className="p-lg">
                  <h4 className="font-headline-md text-[24px] text-primary mb-sm">{service.title}</h4>
                  <p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Workflow */}
      <section className="bg-surface-container-high py-xl relative">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-[32px] text-primary mb-sm">Our Engineering Workflow</h2>
            <p className="font-body-md text-[16px] text-on-surface-variant max-w-2xl mx-auto">
              A rigorous 4-step process designed to ensure technical compliance and zero-defect manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant z-0" />
            
            {[
              { num: "01", title: "Audit", desc: "Review of technical drawings, material compatibility, and tolerance requirements." },
              { num: "02", title: "Simulation", desc: "Advanced mold flow simulation to predict warpage, weld lines, and cycle times." },
              { num: "03", title: "Validation", desc: "Tool sampling (T1, T2) and CMM verification against master golden samples." },
              { num: "04", title: "Scale", desc: "Transition to automated mass production with real-time quality monitoring." }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 bg-white border border-outline-variant p-lg rounded-xl text-center space-y-md group hover:border-secondary transition-colors"
              >
                <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto font-headline-md text-[24px] shadow-lg group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="font-headline-md text-[24px] text-primary">{step.title}</h4>
                <p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
        <div className="bg-surface-container-lowest border border-outline-variant shadow-sm p-xl rounded-xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-display-lg text-[40px] text-primary mb-md">Ready to optimize your production?</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-lg">
              Our engineers are ready to review your project specifications and provide a detailed feasibility analysis within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <Link
                href="/contact"
                className="bg-[var(--color-orange-cta)] text-white px-xl py-md rounded font-label-md text-[14px] font-semibold uppercase hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                Request a Technical Quote <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
