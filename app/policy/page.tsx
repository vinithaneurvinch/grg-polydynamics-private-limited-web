"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Leaf, FileText, Download } from "lucide-react";

export default function PolicyPage() {
  const policies = [
    { title: "Quality Policy", icon: Shield, desc: "Our commitment to ISO 9001:2015 standards and continuous improvement in all manufacturing processes." },
    { title: "Environmental Policy", icon: Leaf, desc: "Guidelines on sustainable manufacturing, carbon reduction, and responsible waste management." },
    { title: "Health & Safety (HSE)", icon: Scale, desc: "Ensuring a zero-harm environment for all employees and contractors on our factory floors." },
    { title: "Corporate Governance", icon: FileText, desc: "Ethical business practices, compliance with international trade laws, and anti-corruption policies." }
  ];

  return (
    <div className="bg-surface min-h-screen">
      <header className="bg-primary-container text-on-primary py-xl border-b border-outline-variant/20">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-display-lg text-[40px] md:text-[48px] mb-sm">Corporate Policies</h1>
          <p className="font-body-lg text-[18px] opacity-80 max-w-2xl mx-auto">
            Transparency, compliance, and ethical operations form the foundation of GRG Poly Dynamics.
          </p>
        </div>
      </header>

      <section className="py-xl max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {policies.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-outline-variant p-lg rounded-lg shadow-sm flex flex-col md:flex-row gap-md items-start group hover:border-secondary transition-colors"
            >
              <div className="bg-surface-container-low p-sm rounded border border-outline-variant group-hover:bg-primary-container group-hover:text-white transition-colors shrink-0">
                <policy.icon size={32} className="text-secondary group-hover:text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-[24px] text-primary mb-xs">{policy.title}</h3>
                <p className="font-body-sm text-[14px] text-on-surface-variant leading-relaxed mb-md">
                  {policy.desc}
                </p>
                <button className="flex items-center gap-xs font-label-sm text-[12px] uppercase font-bold text-secondary hover:text-primary transition-colors">
                  <Download size={16} /> Download PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
