"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Check, ChevronDown, MessageCircle } from "lucide-react";

const SERVICE_GROUPS = [
  {
    label: "Shopify E-Commerce",
    options: [
      { value: "Shopify — Standard (₹11,999)", tag: "15 Days" },
      { value: "Shopify — Premium (₹24,999)", tag: "Popular" },
      { value: "Shopify — Platinum (₹49,999)", tag: "20 Days" },
    ],
  },
  {
    label: "Custom-Coded Website",
    options: [
      { value: "Landing Page (₹7,999)", tag: "7–10 Days" },
      { value: "Basic Website (₹14,999)", tag: "Starter" },
      { value: "Custom Coded E-Commerce (₹50,000)", tag: "Best Value" },
      { value: "Multivendor Marketplace (₹1,00,000)", tag: "Enterprise" },
      { value: "Custom Query — Price on Requirement", tag: "Free Quote" },
    ],
  },
  {
    label: "Website Type",
    options: [
      { value: "Business / Corporate Website", tag: "" },
      { value: "Portfolio / Showcase Website", tag: "" },
      { value: "Lead Generation Page", tag: "" },
    ],
  },
  {
    label: "Other",
    options: [
      { value: "SEO Optimization", tag: "" },
      { value: "Website Redesign", tag: "" },
      { value: "Consultation", tag: "Free" },
    ],
  },
];

const CONDITIONAL_FIELDS = {
  shopify: [
    { name: "numProducts", label: "Number of Products", options: ["Less than 20", "20–50", "50–100", "100–500", "500+"] },
    { name: "paymentGateway", label: "Payment Gateway", options: ["Razorpay", "Stripe", "PayPal", "Not Sure"] },
    { name: "existingStore", label: "Existing Store?", options: ["No, starting fresh", "Migrating from another platform", "Redesigning existing Shopify"] },
    { name: "timeline", label: "Timeline", options: ["ASAP", "Within 1 month", "1–3 months", "Flexible"] },
  ],
  landing: [
    { name: "campaignGoal", label: "Page Goal", options: ["Lead capture", "Product launch", "Event registration", "App download", "Other"] },
    { name: "hasContent", label: "Content Ready?", options: ["Yes, everything ready", "Partially ready", "No — need help"] },
    { name: "timeline", label: "Timeline", options: ["ASAP", "Within 2 weeks", "Within 1 month", "Flexible"] },
  ],
  basic: [
    { name: "numPages", label: "Number of Pages", options: ["1–5 pages", "5–10 pages", "10–20 pages", "20+ pages"] },
    { name: "hasContent", label: "Content Ready?", options: ["Yes, everything ready", "Partially ready", "No — need help"] },
    { name: "timeline", label: "Timeline", options: ["ASAP", "Within 1 month", "1–3 months", "Flexible"] },
  ],
  ecommerce: [
    { name: "numProducts", label: "Number of Products", options: ["Less than 50", "50–100", "100–500", "500+"] },
    { name: "paymentGateway", label: "Payment Gateway", options: ["Razorpay", "Stripe", "PayPal", "Not Sure"] },
    { name: "hasContent", label: "Content Ready?", options: ["Yes, everything ready", "Partially ready", "No — need help"] },
    { name: "timeline", label: "Timeline", options: ["ASAP", "1–3 months", "3–6 months", "Flexible"] },
  ],
  multivendor: [
    { name: "numVendors", label: "Expected Vendors", options: ["Less than 10", "10–50", "50–200", "200+", "Not sure"] },
    { name: "paymentGateway", label: "Payment Gateway", options: ["Razorpay", "Stripe", "PayPal", "Not Sure"] },
    { name: "timeline", label: "Timeline", options: ["ASAP", "Within 2 months", "3–6 months", "Flexible"] },
  ],
  other: [
    { name: "timeline", label: "When to Start?", options: ["Immediately", "Within 2 weeks", "Next month", "Just exploring"] },
  ],
};

const getFields = (service) => {
  if (!service) return [];
  const s = service.toLowerCase();
  if (s.includes("shopify")) return CONDITIONAL_FIELDS.shopify;
  if (s.includes("multivendor")) return CONDITIONAL_FIELDS.multivendor;
  if (s.includes("landing") || s.includes("lead generation")) return CONDITIONAL_FIELDS.landing;
  if (s.includes("custom coded")) return CONDITIONAL_FIELDS.ecommerce;
  if (s.includes("basic") || s.includes("corporate") || s.includes("portfolio") || s.includes("business")) return CONDITIONAL_FIELDS.basic;
  return CONDITIONAL_FIELDS.other;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [extraValues, setExtraValues] = useState({});
  const [extraFields, setExtraFields] = useState([]);

  useEffect(() => {
    const handler = (e) => setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", service: "", subject: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Min 2 characters").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().matches(/^[\+]?[1-9][\d]{0,15}$/, "Invalid number"),
      service: Yup.string().required("Required"),
      subject: Yup.string().min(3, "Min 3 characters").required("Required"),
      message: Yup.string().min(10, "Min 10 characters").required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const res = await fetch("https://api.airtable.com/v0/appY1D4ypReTKDBCM/contacts", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [{
              fields: {
                "First Name": values.name,
                "Email Address": values.email,
                "Phone Number": values.phone || "Not provided",
                "Service Interested In": values.service,
                "Subject": values.subject,
                "Message": values.message,
                ...Object.fromEntries(Object.entries(extraValues).map(([k, v]) => [k.replace(/([A-Z])/g, " $1").trim(), v])),
              },
            }],
          }),
        });
        if (!res.ok) throw new Error();
        setSuccess(true);
        resetForm();
        setExtraValues({});
        setExtraFields([]);
        setTimeout(() => setSuccess(false), 4000);
      } catch {
        alert("Failed to send. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const selectService = (val) => {
    formik.setFieldValue("service", val);
    setDropdownOpen(false);
    setExtraFields(getFields(val));
    setExtraValues({});
  };

  const inputClass = (field) =>
    `w-full bg-gray-700/30 border ${formik.touched[field] && formik.errors[field] ? "border-red-500" : "border-gray-600/50"} rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]" />
      <div className="absolute inset-0 opacity-30 transition-all duration-300" style={{ background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(249,115,22,0.15), transparent 40%)` }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-800/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {success && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-sm w-full text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-300 text-sm mb-4">We'll get back to you within 2–4 hours.</p>
            <div className="flex items-center justify-center gap-2">
              {[0, 100, 200].map((d) => (
                <div key={d} className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-0.5 mb-4">
              <span className="text-white font-black text-xl tracking-tight">WEB</span>
              <span className="text-orange-500 font-black text-xl tracking-tight italic">X</span>
              <span className="text-white font-black text-xl tracking-tight">HUNTER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
              Get In <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
              Ready to craft your digital success story? Free consultation, no commitment required.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 h-fit">
                <h3 className="text-lg font-bold text-white mb-5">Contact Information</h3>
                <div className="space-y-3">
                  {[
                    { Icon: Mail, title: "Email", value: "webxhuntertech@gmail.com" },
                    { Icon: Phone, title: "Call Us", value: "+91 72777 16187" },
                    { Icon: MessageCircle, title: "WhatsApp", value: "+91 74280 83422" },
                    { Icon: MapPin, title: "Website", value: "webxhunter.com" },
                  ].map(({ Icon, title, value }) => (
                    <div key={title} className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                      <div className="bg-orange-600/20 p-2 rounded-lg"><Icon className="w-4 h-4 text-orange-400" /></div>
                      <div>
                        <h4 className="text-white font-medium text-sm">{title}</h4>
                        <p className="text-gray-400 text-xs">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { title: "⚡ Fast Response", body: "Critical issues resolved within 2 hours." },
                    { title: "🛡️ 1 Year Free Support", body: "Free post-launch technical support included in every plan." },
                    { title: "📞 14/7 Availability", body: "Available via WhatsApp, call, and email." },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20">
                      <h4 className="text-orange-400 font-semibold text-sm mb-1">{title}</h4>
                      <p className="text-gray-300 text-xs">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-1">Start Your Project</h3>
                <p className="text-gray-400 text-xs mb-5">Free consultation · No hidden fees · Launch-ready in 15–20 days</p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={inputClass("name")} placeholder="Your full name" />
                      </div>
                      {formik.touched.name && formik.errors.name && <p className="mt-1 text-xs text-red-400">{formik.errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={inputClass("email")} placeholder="your.email@example.com" />
                      </div>
                      {formik.touched.email && formik.errors.email && <p className="mt-1 text-xs text-red-400">{formik.errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="tel" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className={inputClass("phone")} placeholder="+91 00000 00000" />
                      </div>
                      {formik.touched.phone && formik.errors.phone && <p className="mt-1 text-xs text-red-400">{formik.errors.phone}</p>}
                    </div>

                    <div className="relative">
                      <label className="block text-xs font-medium text-gray-300 mb-2">Service Needed *</label>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`w-full bg-gray-700/30 border ${formik.touched.service && formik.errors.service ? "border-red-500" : "border-gray-600/50"} rounded-xl px-3 py-2.5 text-left flex items-center justify-between focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all text-sm ${formik.values.service ? "text-white" : "text-gray-400"}`}
                      >
                        <span className="truncate pr-2">{formik.values.service || "Select a service"}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-600/50 rounded-xl shadow-2xl z-50 overflow-y-auto max-h-72">
                          {SERVICE_GROUPS.map((group) => (
                            <div key={group.label}>
                              <div className="px-3 py-2 bg-gray-800/80 border-b border-gray-700/50 sticky top-0">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{group.label}</span>
                              </div>
                              {group.options.map((opt) => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => selectService(opt.value)}
                                  className={`w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-orange-500/20 transition-colors text-sm ${formik.values.service === opt.value ? "bg-orange-500/30 text-orange-300" : "text-gray-300"}`}
                                >
                                  <span>{opt.value}</span>
                                  {opt.tag && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold ml-2 flex-shrink-0">{opt.tag}</span>}
                                </button>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                      {formik.touched.service && formik.errors.service && <p className="mt-1 text-xs text-red-400">{formik.errors.service}</p>}
                    </div>
                  </div>

                  {extraFields.length > 0 && (
                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
                      <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-3">Project Details</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {extraFields.map((field) => (
                          <div key={field.name}>
                            <label className="block text-xs font-medium text-gray-300 mb-2">{field.label}</label>
                            <div className="relative">
                              <select
                                value={extraValues[field.name] || ""}
                                onChange={(e) => setExtraValues((p) => ({ ...p, [field.name]: e.target.value }))}
                                className="w-full bg-gray-700/30 border border-gray-600/50 rounded-xl px-3 pr-8 py-2.5 text-sm text-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all appearance-none cursor-pointer"
                                style={{ colorScheme: "dark" }}
                              >
                                <option value="" disabled className="bg-gray-800">Select</option>
                                {field.options.map((o) => <option key={o} value={o} className="bg-gray-800">{o}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">Subject *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" name="subject" value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} className={inputClass("subject")} placeholder="Brief description of your project" />
                    </div>
                    {formik.touched.subject && formik.errors.subject && <p className="mt-1 text-xs text-red-400">{formik.errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">Project Details *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        name="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} rows={4}
                        className={`w-full bg-gray-700/30 border ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-600/50"} rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all resize-none`}
                        placeholder="Tell us about your requirements, goals, and timeline..."
                      />
                    </div>
                    {formik.touched.message && formik.errors.message && <p className="mt-1 text-xs text-red-400">{formik.errors.message}</p>}
                  </div>

                  <button
                    type="button"
                    onClick={formik.handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting
                      ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                      : <><Send className="w-4 h-4" />Send Message</>
                    }
                  </button>

                  <p className="text-center text-gray-500 text-xs">₹0 Consultation Fee · No Hidden Costs · Custom Quotes Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}