"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Verified, Handshake, Factory, Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-primary-container overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3WFjeaA-Y8_pV1lbEmr6uY_NzzP5gN1cmqM3CE6ax9R_prhUvk86NZ06LqbkGi3NG_FTuTFJokKRdxL4sMisOVeH0Vf_P2NZlMazp56mKxT9KjMiLTpcEBjlUl7tvQVvwMFUmk4etBwUcuSFk4KXcqc4W_O47KM246syWUSJKmxVsVtlNpViqVEU2amzYugZCe1QlytQYsl78LZvXAhpSpbfXiWdCJ-D2EtiMvU2q3OwZf_RTtADZInJ7IoljQCJpJernJh8huu0"
            alt="Industrial Engineering"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-md"
          >
            <span className="inline-block px-sm py-xs bg-secondary text-on-secondary text-[12px] font-semibold tracking-widest uppercase rounded">
              Corporate Profile
            </span>
            <h1 className="font-display-lg text-[40px] md:text-[48px] text-on-primary font-bold">
              Pioneering Polymer Excellence Since 1994.
            </h1>
            <p className="font-body-lg text-[18px] text-on-primary-container max-w-[600px] leading-relaxed">
              GRG Poly Dynamics represents the pinnacle of industrial polymer engineering. From our humble beginnings to becoming a global leader, we have remained committed to precision, innovation, and technical integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values (Bento Layout) */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter min-h-[400px]">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white border border-outline-variant p-lg flex flex-col justify-end group hover:border-secondary transition-all duration-300 overflow-hidden relative"
          >
            <div className="absolute top-8 right-8">
              <Eye size={64} className="text-primary/5 group-hover:text-secondary/20 transition-colors duration-500" />
            </div>
            <h3 className="font-headline-md text-[24px] text-primary mb-sm">Our Vision</h3>
            <p className="font-body-md text-[16px] text-on-surface-variant max-w-2xl leading-relaxed">
              To redefine the global standards of polymer performance through sustainable engineering and technical precision, ensuring a safer and more efficient industrial future for our global partners.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-primary text-on-primary p-lg flex flex-col justify-between group"
          >
            <Rocket size={48} className="text-secondary-container group-hover:-translate-y-2 transition-transform duration-300" />
            <div className="mt-xl">
              <h3 className="font-headline-md text-[24px] mb-sm text-secondary-container">Our Mission</h3>
              <p className="font-body-sm text-[14px] opacity-80 leading-relaxed">
                Delivering uncompromising quality in polymer manufacturing while fostering innovation through R&D.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 bg-surface-container-low border border-outline-variant p-md flex flex-wrap items-center justify-between gap-md"
          >
            {[
              { icon: Verified, label: "Uncompromising Quality" },
              { icon: Handshake, label: "Ethical Partnership" },
              { icon: Factory, label: "Technical Precision" },
              { icon: Leaf, label: "Sustainable Future" },
            ].map((value) => (
              <div key={value.label} className="flex items-center gap-sm">
                <value.icon className="text-secondary" size={24} />
                <span className="font-label-md text-[14px] font-semibold text-primary">{value.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Growth Timeline */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-[32px] text-primary">A Legacy of Growth</h2>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-2xl mx-auto mt-sm">
            Three decades of engineering evolution.
          </p>
        </div>
        
        <div className="relative timeline-line space-y-xl py-md">
          {[
            {
              year: "1994",
              title: "The Foundation",
              desc: "Founded as a small chemical research firm with a focus on core polymer derivatives.",
              align: "right",
            },
            {
              year: "2005",
              title: "Industrial Expansion",
              desc: "Commissioned our first integrated manufacturing plant with a capacity of 50,000 metric tons.",
              align: "left",
            },
            {
              year: "2018",
              title: "Global Digitalization",
              desc: "Launched the Smart-Poly initiative, integrating IoT and AI for 100% traceability.",
              align: "right",
            },
            {
              year: "2024",
              title: "The Poly Dynamics Era",
              desc: "Rebranded to GRG Poly Dynamics, expanding operations to 15 countries with a carbon-neutral roadmap.",
              align: "left",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-md md:gap-0"
            >
              <div className={`md:w-5/12 text-center ${item.align === "right" ? "md:text-right order-2 md:order-1" : "md:text-left order-2 md:order-3 hidden md:block"}`}>
                {item.align === "right" && (
                  <>
                    <h4 className="font-headline-md text-[24px] text-secondary mb-xs">{item.title}</h4>
                    <p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </>
                )}
              </div>
              <div className="w-16 h-16 bg-primary rounded-full border-[6px] border-surface flex items-center justify-center text-on-primary font-bold text-[18px] z-20 order-1 md:order-2 shrink-0">
                {item.year}
              </div>
              <div className={`md:w-5/12 text-center ${item.align === "left" ? "md:text-left order-3" : "md:text-right order-3 md:order-1 hidden md:block"}`}>
                {item.align === "left" && (
                  <>
                    <h4 className="font-headline-md text-[24px] text-secondary mb-xs">{item.title}</h4>
                    <p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
