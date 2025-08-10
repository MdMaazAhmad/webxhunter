"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Check, ChevronDown } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const services = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Marketing",
    "SEO Optimization",
    "Custom Software",
    "Consulting"
  ];

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().matches(/^[\+]?[1-9][\d]{0,15}$/, "Invalid phone number"),
    service: Yup.string().required("Please select a service"),
    subject: Yup.string().min(3, "Subject must be at least 3 characters").required("Subject is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", service: "", subject: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.airtable.com/v0/appY1D4ypReTKDBCM/contacts", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [{
              fields: {
                'First Name': values.name,
                'Email Address': values.email,
                'Phone Number': values.phone || "Not provided",
                'Service Interested In': values.service,
                'Subject':values.subject,
                'Message': values.message,
              },
            }],
          }),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        setShowSuccessModal(true);
        resetForm();
        setTimeout(() => setShowSuccessModal(false), 4000);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(249,115,22,0.15), transparent 40%)`,
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-sm w-full text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-300 text-sm mb-4">We'll contact you within 24 hours.</p>
            <div className="flex items-center justify-center gap-2 text-orange-400">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
              Get In{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 h-fit">
                <h3 className="text-lg font-bold text-white mb-5">Contact Information</h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <div className="bg-orange-600/20 p-2 rounded-lg">
                      <Mail className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Email</h4>
                      <p className="text-gray-400 text-xs">dmfurquan@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <div className="bg-orange-600/20 p-2 rounded-lg">
                      <Phone className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Phone</h4>
                      <p className="text-gray-400 text-xs">+91 8957043589</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <div className="bg-orange-600/20 p-2 rounded-lg">
                      <MapPin className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Location</h4>
                      <p className="text-gray-400 text-xs">Available Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20">
                  <h4 className="text-orange-400 font-semibold text-sm mb-1">Quick Response</h4>
                  <p className="text-gray-300 text-xs">Response within 2-4 hours during business hours.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-5">Start Your Project</h3>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full bg-gray-700/30 border ${
                            formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-600/50"
                          } rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all`}
                          placeholder="Your full name"
                        />
                      </div>
                      {formik.touched.name && formik.errors.name && (
                        <p className="mt-1 text-xs text-red-400">{formik.errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full bg-gray-700/30 border ${
                            formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-600/50"
                          } rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {formik.touched.email && formik.errors.email && (
                        <p className="mt-1 text-xs text-red-400">{formik.errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`w-full bg-gray-700/30 border ${
                            formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-600/50"
                          } rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all`}
                          placeholder="Enter Phone number"
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="mt-1 text-xs text-red-400">{formik.errors.phone}</p>
                      )}
                    </div>

                    <div className="relative">
                      <label className="block text-xs font-medium text-gray-300 mb-2">Service Needed *</label>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-gray-700/30 border ${
                          formik.touched.service && formik.errors.service ? "border-red-500" : "border-gray-600/50"
                        } rounded-xl px-3 py-2.5 text-left flex items-center justify-between focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all text-sm ${
                          formik.values.service ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {formik.values.service || "Select a service"}
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600/50 rounded-xl shadow-2xl z-50 overflow-hidden">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => {
                                formik.setFieldValue("service", service);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full px-3 py-2.5 text-left hover:bg-orange-500/20 transition-colors text-sm ${
                                formik.values.service === service ? "bg-orange-500/30 text-orange-300" : "text-gray-300"
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      )}
                      {formik.touched.service && formik.errors.service && (
                        <p className="mt-1 text-xs text-red-400">{formik.errors.service}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">Subject *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full bg-gray-700/30 border ${
                          formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-600/50"
                        } rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all`}
                        placeholder="Brief description of your project"
                      />
                    </div>
                    {formik.touched.subject && formik.errors.subject && (
                      <p className="mt-1 text-xs text-red-400">{formik.errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">Project Details *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        rows={4}
                        className={`w-full bg-gray-700/30 border ${
                          formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-600/50"
                        } rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all resize-none`}
                        placeholder="Tell us about your project requirements, goals, and timeline..."
                      />
                    </div>
                    {formik.touched.message && formik.errors.message && (
                      <p className="mt-1 text-xs text-red-400">{formik.errors.message}</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={formik.handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;