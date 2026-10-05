"use client"

import { useState } from "react"
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiFacebook, FiMessageCircle, FiSend } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import { RevealGroup } from "../../components/RevealGroup"
import { RevealItem } from "../../components/RevealGroup"

// export const metadata = {
//   title: "Contact Us | Chrysolite Foundation",
//   description: "Get in touch with Chrysolite Foundation. Reach us by email, WhatsApp, or the contact form to volunteer, partner, or ask a question.",
// }

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=2349127480531&text&type=phone_number&app_absent=0"

const contactInfo = [
  { icon: FiMail, label: "Email", value: "thechrysolitefoundation@gmail.com" },
  { icon: FiPhone, label: "WhatsApp", value: "Reach us directly on WhatsApp" },
  { icon: FiMapPin, label: "Location", value: "Ibadan, Oyo State, Nigeria" },
]

const socials = [
  { Icon: FiInstagram, label: "Instagram", href: "https://www.instagram.com/_chrysoliteng" },
  { Icon: FaXTwitter, label: "X", href: "https://x.com/_chrysoliteng" },
  { Icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/chrysolite-foundation/posts/?feedView=all" },
  { Icon: FiFacebook, label: "Facebook", href: "https://web.facebook.com/profile.php?id=100090781453931&_rdc=1&_rdr" },
]

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle") // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus("sending")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New message from ${form.name} via chrysolitefoundation.org`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const result = await res.json()

      if (result.success) {
        setStatus("sent")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <section className="relative py-28 bg-[#1A56A7]">
        <RevealGroup className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealItem className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-cyan-200/20 text-cyan-300 text-[11px] font-bold uppercase tracking-widest mb-6">
            <FiMail size={11} />
            Contact Us
          </RevealItem>

          <RevealItem>
            <h1 className="text-4xl lg:text-5xl font-bold text-white" >
              Let&apos;s Start a Conversation
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="text-blue-200 mt-4 max-w-xl mx-auto">
              Whether you want to volunteer, partner, or just learn more, we would love to hear from you.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <RevealGroup className="lg:col-span-2">
              <RevealItem>
                <h2 className="text-2xl font-bold text-[#111827] mb-8" >
                  Get in Touch
                </h2>
              </RevealItem>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <RevealItem key={label} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EBF3FF] flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-[#1A56A7]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A56A7] uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-gray-700 text-sm">{value}</div>
                    </div>
                  </RevealItem>
                ))}
              </div>

              <div>
                <RevealItem><h3 className="font-bold text-[#111827] mb-4" style={{ fontFamily: "var(--font-display)" }}>Follow Us</h3></RevealItem>
                <div className="flex gap-3">
                  {socials.map(({ Icon, label, href }) => (
                    <RevealItem key={label}>
                      <a  href={href} title={label} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-[#1A56A7] hover:bg-[#1A56A7] hover:text-white transition-all">
                        <Icon size={16} />
                      </a>
                    </RevealItem>
                  ))}
                </div>
              </div>

              <RevealItem className="mt-8 p-5 rounded-2xl bg-green-50 border border-green-100">
                <div className="flex items-center gap-3 mb-2">
                  <FiMessageCircle size={18} className="text-green-600" />
                  <span className="font-bold text-green-800 text-sm">Prefer WhatsApp?</span>
                </div>
                <p className="text-green-700 text-sm leading-relaxed">
                  Send us a message directly on WhatsApp for a quick response.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold text-sm rounded-full hover:bg-green-700 transition-colors">
                  <FiMessageCircle size={14} /> Chat on WhatsApp
                </a>
              </RevealItem>
            </RevealGroup>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === "sent" ? (
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-blue-50 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                    <FiSend size={26} className="text-[#1A56A7]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-3" style={{ fontFamily: "var(--font-display)" }}>Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-sm">Thank you for reaching out. We read every message and will respond as soon as possible.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-3 bg-[#1A56A7] text-white font-semibold text-sm rounded-full hover:bg-[#1546C7] transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-blue-50">
                  <h2 className="text-2xl font-bold text-[#111827] mb-7" style={{ fontFamily: "var(--font-display)" }}>Send a Message</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F7F4] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56A7] transition"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F7F4] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56A7] transition"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Message</label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="How can we help? Or how would you like to get involved?"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F7F4] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56A7] transition resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-sm">
                        Something went wrong sending your message. Please try again, or reach us on WhatsApp instead.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 bg-[#1A56A7] text-white font-bold rounded-full hover:bg-[#1546C7] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <FiSend size={15} /> {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}