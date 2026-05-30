"use client";

import { motion } from "framer-motion";
import { FileBarChart, Calendar, ArrowRight } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    { year: "2023-2024", title: "Annual Corporate Report", type: "Financial" },
    { year: "2023-2024", title: "Sustainability & ESG Report", type: "Environmental" },
    { year: "2022-2023", title: "Annual Corporate Report", type: "Financial" },
    { year: "2021-2022", title: "Annual Corporate Report", type: "Financial" }
  ];

  return (
    <div className="bg-surface min-h-screen">
      <header className="bg-primary text-on-primary py-xl">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <span className="font-label-md text-[14px] text-secondary tracking-widest uppercase font-semibold mb-sm block">Investor Relations</span>
          <h1 className="font-display-lg text-[40px] md:text-[48px] mb-sm">Financial & ESG Reports</h1>
          <p className="font-body-lg text-[18px] opacity-80 max-w-2xl">
            Access our latest annual reports, financial statements, and sustainability metrics.
          </p>
        </div>
      </header>

      <section className="py-xl max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {reports.map((report, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-outline-variant rounded-lg p-lg hover:shadow-lg transition-all group flex flex-col justify-between min-h-[250px]"
            >
              <div>
                <div className="flex justify-between items-start mb-md">
                  <div className="bg-surface-container-low p-sm rounded text-primary">
                    <FileBarChart size={24} />
                  </div>
                  <span className="bg-surface-container-high text-on-surface-variant text-[12px] px-2 py-1 rounded font-semibold uppercase">
                    {report.type}
                  </span>
                </div>
                <h3 className="font-headline-md text-[24px] text-primary mb-xs">{report.title}</h3>
                <div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-[14px]">
                  <Calendar size={14} /> {report.year}
                </div>
              </div>
              
              <button className="mt-lg flex items-center justify-between w-full font-label-md text-[14px] text-secondary font-bold uppercase group-hover:text-primary transition-colors">
                View Report <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
