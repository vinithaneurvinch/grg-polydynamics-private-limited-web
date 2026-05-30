"use client";

import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8uoxnB_2fdctAiPB4c9hyie_hiLFgIHzB8jaPdZ4Nid79juyiXpzEYViaSZ6YuTiIHR6RRn5V3SKfH7MOnDhnUhTGirBsZD4WzBSMDYGftVflddxiQoy2l2G_D1y-UHLjRXr8bBN4rVfRRROmZxXjdC6rJArPsQJItYwMzTtEHTs9wdXPa3S8AqKOLY6KyMlZIZ_aJl6beQuaaeVMacSBjgU-4ZbKRyli5ogwMkP6-jyREvZNRGjxL7OWeNcBSjfHYKiL-K_R5fA", alt: "Automotive Part" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeOSR2O91U8Jdr18zbSJVekGHqmZm1O-YiBzW0xeZvE1bdwiEl0_V8KSy0mZ0GjFgoF_SJTtj_IWoS736_WHl-cEIxEHkaO0mTtpRgCoys7gpja-1AoXu1SsjZStMEfDvcIyHwFwMn_nCqsp3dJDNKyNpY1mxBEimdfLDjg5M3wHuabZeLlj5OhXiDioQwKTBay9fHCywT52rvsxvrdSrvEV_zT16sxewU8zLtP0W61T1M8QCbrZrQzlRNXH5-PIEJ-U9Z0cdj_4c", alt: "Factory Automation" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe09ciZiGA0OpweE85oyaWMmpddj_gE5GPZ80xF8v85IdeJaw2UZJzRCEys0D43mZCgW9p6lDs4MJpe79I82HNoVeyz-607z7g5a9MZndjUJRAYT6JlO2rQjgno7QWkobv4UAOjCQnu7FseJLMiq7LggXMsRGy9JDJtEJx_CDA3qw8ag2HhXr3Q2GAlv3mg_1t1PFyau0QqhsbpRLmD2XW5vUUly6BaHktKIqqLm8XdTy1tQrTONhuQV2wGwaQjPX1Ydl5P3xlJsY", alt: "Injection Molding Machine" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsHawTxgruJqGIbJLSLm0uOJ-AqSlAfmGjcCDWA8i8ALXNq7KTI3lO4e2axTZR7sj3bJgraO3krSONdDwO1y3A4lw3gaO5TEXRBJJtJyiPvunmqJsPWqnMi826qGxw2svNJfU1x_BNj2qhNQywpun9kndrCOmrpsTK4fu2G37tSLfXLMyUXtzMUzya0HoV5NUfgarBr5q51BWMrjYApG5CbPQkJNUdeen5V3J7xiEciml7J4lzqDkWvmdVKv4FFCqMvEuDDNNXZ1Y", alt: "Quality Control Lab" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZCc4M0eEYCIL4-6NeCB-GTW4uxefX1EiQcoYycv46uZVPlihhyerw4qkFVCBbfUHqY-Mj8Psf7j1ZTqstU9jvFv7L0w77hDzTcoq1Af4kQxpt2T_AAsRZ9KCdrc_gIDiLWcKjVXAVCfaBxraJlHsK8thQtuBwLblnDgPmquFehTn9CsjP5k6H2GUymG-NMY5bCrIWMfBLHJ13rLaTe2CYYKVXlKGGXw6zRfFkADHTFR3GfbG1cJXqFgakJJIYGUXgYsdWFR4iVio", alt: "Circuit Breakers" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxmTmMkAAP8JVIhh84cF74WQUx_Xo5lCooOBfFpyn2fA-H4IIwX6KgyN_hE0A4UuyWIKxP6_UF6t2O_FCq9dfA2Kmw-mvDNh85HOnu97XAMi5H3vmHeAs0RGAeYNu-L2HY2wWCBzxzcvn43jol9gTKbBxlUmLlli1jPIkRVEi3CrEmtztaMz1F3CH9oqNQvTn5I3jtHzo8sm8bmGUpbHAUjJb89jqzePrCwnYXXNqmnSy6TBYEub49b2tmmV6rsWWa4rTNPyLouII", alt: "Electrical Insulators" }
  ];

  return (
    <div className="bg-surface min-h-screen">
      <header className="bg-surface-container-high py-xl text-center border-b border-outline-variant">
        <h1 className="font-display-lg text-[40px] md:text-[48px] text-primary mb-sm">Visual Infrastructure</h1>
        <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">
          A glimpse into our engineering excellence, machinery, and precision output.
        </p>
      </header>

      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded border border-outline-variant relative bg-white aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-md">
                <span className="text-on-primary font-label-md text-[14px] uppercase tracking-wider font-bold">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
