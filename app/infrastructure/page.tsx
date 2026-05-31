"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, ThermometerSun } from "lucide-react";

export default function InfrastructurePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-on-primary py-xl border-b border-on-primary-fixed-variant">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-xl items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-sm py-xs bg-secondary-container text-on-secondary-container rounded font-label-sm text-[12px] uppercase font-bold tracking-widest mb-md">
              FACILITY OVERVIEW
            </span>
            <h1 className="font-display-lg text-[40px] md:text-[48px] mb-md leading-tight">
              State-of-the-Art <br />Manufacturing Infrastructure
            </h1>
            <p className="font-body-lg text-[18px] opacity-80 max-w-[500px] leading-relaxed">
              Our 50,000 sq.ft. facility houses the latest tech from Arburg, Engel, and Fanuc, operating with 24/7 uptime for maximum throughput and uncompromising quality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-sm"
          >
            <div className="space-y-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe09ciZiGA0OpweE85oyaWMmpddj_gE5GPZ80xF8v85IdeJaw2UZJzRCEys0D43mZCgW9p6lDs4MJpe79I82HNoVeyz-607z7g5a9MZndjUJRAYT6JlO2rQjgno7QWkobv4UAOjCQnu7FseJLMiq7LggXMsRGy9JDJtEJx_CDA3qw8ag2HhXr3Q2GAlv3mg_1t1PFyau0QqhsbpRLmD2XW5vUUly6BaHktKIqqLm8XdTy1tQrTONhuQV2wGwaQjPX1Ydl5P3xlJsY"
                alt="Injection molding machine"
                className="w-full h-48 object-cover rounded shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="bg-primary-container p-sm border border-outline-variant/30 rounded">
                <span className="font-label-sm text-[12px] uppercase text-secondary">ISO 9001:2015 Certified</span>
              </div>
            </div>
            <div className="space-y-sm mt-lg">
              <div className="bg-primary-container p-sm border border-outline-variant/30 rounded">
                <span className="font-label-sm text-[12px] uppercase text-secondary">Class 100k Clean Room</span>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsHawTxgruJqGIbJLSLm0uOJ-AqSlAfmGjcCDWA8i8ALXNq7KTI3lO4e2axTZR7sj3bJgraO3krSONdDwO1y3A4lw3gaO5TEXRBJJtJyiPvunmqJsPWqnMi826qGxw2svNJfU1x_BNj2qhNQywpun9kndrCOmrpsTK4fu2G37tSLfXLMyUXtzMUzya0HoV5NUfgarBr5q51BWMrjYApG5CbPQkJNUdeen5V3J7xiEciml7J4lzqDkWvmdVKv4FFCqMvEuDDNNXZ1Y"
                alt="Quality Testing Lab"
                className="w-full h-48 object-cover rounded shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Machinery Capabilities */}
      <section className="py-xl bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-[32px] text-primary mb-xl text-center">Machinery & Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: Zap, title: "Injection Molding", specs: ["50T to 1200T Capacity", "High-cavitation steel molds", "Automated robot extraction"] },
              { icon: ThermometerSun, title: "Material Conditioning", specs: ["Centralized drying systems", "Desiccant hoppers", "Automated raw material feeding"] },
              { icon: ShieldCheck, title: "Quality Control Lab", specs: ["CMM Measurement", "Spectrophotometer", "Tensile testing machines"] },
            ].map((machine, i) => (
              <motion.div
                key={machine.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-outline-variant p-lg rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-surface-container w-12 h-12 rounded flex items-center justify-center mb-md border border-outline-variant">
                  <machine.icon className="text-secondary" />
                </div>
                <h3 className="font-headline-md text-[24px] text-primary mb-sm">{machine.title}</h3>
                <ul className="space-y-sm">
                  {machine.specs.map(spec => (
                    <li key={spec} className="flex items-center gap-xs">
                      <CheckCircle2 size={16} className="text-secondary" />
                      <span className="font-body-sm text-[14px] text-on-surface-variant">{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
