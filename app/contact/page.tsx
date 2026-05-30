"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Shield } from "lucide-react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  return (
    <div className="bg-surface min-h-screen">
      <header className="bg-primary text-on-primary py-xl border-b border-on-primary-fixed-variant">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="font-label-md text-[14px] text-secondary tracking-widest uppercase font-semibold mb-sm block">Global Reach</span>
          <h1 className="font-display-lg text-[40px] md:text-[48px] mb-sm">Contact Engineering HQ</h1>
          <p className="font-body-lg text-[18px] opacity-80 max-w-2xl mx-auto">
            Connect with our technical team for RFQs, project consultations, and engineering support.
          </p>
        </div>
      </header>

      <section className="py-xl max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-lg"
          >
            <h2 className="font-headline-lg text-[32px] text-primary">Headquarters</h2>
            
            <div className="flex items-start gap-md">
              <div className="bg-secondary-container text-on-secondary-container p-sm rounded mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-label-md text-[14px] uppercase text-primary mb-xs">Address</h4>
                <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                  Plot No. 44, Industrial Area Phase II<br />
                  Global Tech Park, Chennai<br />
                  Tamil Nadu 600032, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-md">
              <div className="bg-secondary-container text-on-secondary-container p-sm rounded mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-label-md text-[14px] uppercase text-primary mb-xs">Phone</h4>
                <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                  +91 44 2250 0000<br />
                  +91 78454 11355 (Direct Line)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-md">
              <div className="bg-secondary-container text-on-secondary-container p-sm rounded mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-label-md text-[14px] uppercase text-primary mb-xs">Email</h4>
                <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
                  rfq@grgpoly.com (Quotes)<br />
                  solutions@grgpoly.com (General)
                </p>
              </div>
            </div>
            
            <div className="pt-md border-t border-outline-variant">
              <div className="w-full h-64 bg-surface-container border border-outline-variant rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.493867623035!2d80.207908!3d13.043743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b0b536ab67%3A0x86847bc77f2409!2sGuindy%20Industrial%20Estate%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HQ Location"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-outline-variant p-lg rounded-xl shadow-lg"
          >
            <h3 className="font-headline-md text-[24px] text-primary mb-md">Request a Quote</h3>
            {isSubmitSuccessful ? (
              <div className="bg-primary-container text-on-primary-container p-md rounded text-center py-xl">
                <Shield size={48} className="mx-auto mb-md text-secondary" />
                <h4 className="font-headline-md text-[24px] mb-xs">Inquiry Received</h4>
                <p className="font-body-sm text-[14px]">Our engineering team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-md">
                <div>
                  <label className="block font-label-sm text-[12px] uppercase text-primary mb-xs">Full Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full border border-outline-variant rounded bg-surface p-sm focus:border-secondary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-error text-xs mt-1">Name is required</span>}
                </div>
                <div>
                  <label className="block font-label-sm text-[12px] uppercase text-primary mb-xs">Company</label>
                  <input
                    {...register("company", { required: true })}
                    className="w-full border border-outline-variant rounded bg-surface p-sm focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Global Corp Ltd."
                  />
                  {errors.company && <span className="text-error text-xs mt-1">Company is required</span>}
                </div>
                <div>
                  <label className="block font-label-sm text-[12px] uppercase text-primary mb-xs">Corporate Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full border border-outline-variant rounded bg-surface p-sm focus:border-secondary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-error text-xs mt-1">Valid email is required</span>}
                </div>
                <div>
                  <label className="block font-label-sm text-[12px] uppercase text-primary mb-xs">Project Details</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    className="w-full border border-outline-variant rounded bg-surface p-sm focus:border-secondary focus:outline-none transition-colors resize-none"
                    placeholder="Briefly describe your requirements..."
                  />
                  {errors.message && <span className="text-error text-xs mt-1">Message is required</span>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-orange-cta)] text-white font-label-md text-[14px] uppercase font-semibold py-md rounded hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-xs disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
