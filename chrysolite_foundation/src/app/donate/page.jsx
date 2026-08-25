"use client"

import { useState } from "react"
import { FiHeart, FiUsers, FiBookOpen, FiCheck } from "react-icons/fi"
import { RevealGroup, RevealItem } from "@/components/RevealGroup"
import Reveal from "@/components/Reveal"

const presetAmounts = [5000, 10000, 25000, 50000]

const impactPoints = [
  { icon: FiBookOpen, text: "Funds school essentials for Back to School outreach" },
  { icon: FiUsers, text: "Supports skills training in Ray of Hope workshops" },
  { icon: FiHeart, text: "Helps CommunityCrop grow food security in Isale-Osun" },
]

export default function DonatePage() {
  const [frequency, setFrequency] = useState("once") // once | monthly
  const [amount, setAmount] = useState(10000)
  const [customAmount, setCustomAmount] = useState("")
  const [donor, setDonor] = useState({ name: "", email: "" })

  const selectedAmount = customAmount ? Number(customAmount) : amount

  const handleDonate = (e) => {
    e.preventDefault()
    // NOTE: no payment processor is connected yet. This currently does
    // not charge or move any money. See the message accompanying this
    // file for what needs to be decided before this goes live.
    alert(`This would process a ${frequency === "monthly" ? "monthly" : "one-time"} donation of ₦${selectedAmount.toLocaleString()} once a payment provider is connected.`)
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <section className="relative py-24 bg-[#0F2A5C] text-center">
        <RevealGroup className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealItem className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-400 text-[11px] font-bold uppercase tracking-widest mb-6">
            <FiHeart size={11} />
            Donate
          </RevealItem>

          <RevealItem>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Support the Mission
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="text-blue-200 leading-relaxed">
              Your donation helps Chrysolite Foundation advance empowerment and education for young
              people in underprivileged and marginalized communities.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Impact side */}
          <RevealGroup className="lg:col-span-2">
            <RevealItem>
              <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Your Support Makes an Impact
              </h2>
            </RevealItem>

            <RevealItem className="space-y-5">
              {impactPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-[#1A56A7]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-2">{text}</p>
                </div>
              ))}
            </RevealItem>

            <RevealItem className="mt-10 p-5 rounded-2xl bg-white border border-blue-50">
              <p className="text-gray-500 text-xs leading-relaxed">
                Official donation and payment details will be added here once available. For now,
                you can also reach us directly via the Contact page to arrange a donation.
              </p>
            </RevealItem>
          </RevealGroup>

          {/* Donation form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleDonate} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-blue-50">
              {/* Frequency toggle */}
              <div className="flex bg-[#F8F7F4] rounded-full p-1 mb-8">
                {["once", "monthly"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrequency(f)}
                    className={`flex-1 py-3 rounded-full text-sm font-semibold transition-colors ${
                      frequency === f ? "bg-[#1A56A7] text-white" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {f === "once" ? "One-Time" : "Monthly"}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <label className="text-sm font-semibold text-gray-700 mb-3 block">Select an Amount (₦)</label>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setAmount(amt); setCustomAmount("") }}
                    className={`py-3.5 rounded-xl border text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                      !customAmount && amount === amt
                        ? "border-[#1A56A7] bg-blue-50 text-[#1A56A7]"
                        : "border-gray-200 text-gray-600 hover:border-blue-200"
                    }`}
                  >
                    {!customAmount && amount === amt && <FiCheck size={14} />}
                    ₦{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Or Enter a Custom Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₦</span>
                  <input
                    type="number"
                    min="0"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F7F4] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56A7] transition"
                  />
                </div>
              </div>

              {/* Donor info */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={donor.name}
                    onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F7F4] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56A7] transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={donor.email}
                    onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F7F4] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56A7] transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0056A4] text-white font-bold rounded-full hover:bg-blue-700 transition-all active:scale-95"
              >
                Donate ₦{selectedAmount ? selectedAmount.toLocaleString() : "0"} {frequency === "monthly" ? "Monthly" : "Now"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}