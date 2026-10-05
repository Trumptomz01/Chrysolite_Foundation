// src/app/donate/page.jsx
"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import Script from "next/script"
import { FiHeart, FiUsers, FiBookOpen, FiCheck, FiX } from "react-icons/fi"
import { projects } from "../data/projects"

const presetAmounts = [5000, 10000, 25000, 50000]

const impactPoints = [
  { icon: FiBookOpen, text: "Funds school essentials for Back to School outreach" },
  { icon: FiUsers, text: "Supports skills training in Ray of Hope workshops" },
  { icon: FiHeart, text: "Helps CommunityCrop grow food security in Isale-Osun" },
]

// Why this is split into its own component: useSearchParams() needs a
// Suspense boundary around whatever uses it, otherwise Next.js throws a
// build-time warning and opts the whole page out of static rendering.
// Wrapping just this part (not the page's outer shell) keeps that
// boundary as small as possible.
function DonateForm() {
  const searchParams = useSearchParams()
  const projectId = searchParams.get("project")
  const targetProject = projects.find((p) => p.id === projectId) || null

  const [frequency, setFrequency] = useState("once")
  const [amount, setAmount] = useState(10000)
  const [customAmount, setCustomAmount] = useState("")
  const [donor, setDonor] = useState({ name: "", email: "" })
  const [status, setStatus] = useState("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [clearedProject, setClearedProject] = useState(false)

  const activeProject = clearedProject ? null : targetProject
  const selectedAmount = customAmount ? Number(customAmount) : amount

  const handleDonate = (e) => {
    e.preventDefault()

    if (!selectedAmount || selectedAmount <= 0) {
      setStatus("error")
      setErrorMsg("Please enter a valid amount.")
      return
    }

    if (typeof window.PaystackPop === "undefined") {
      setStatus("error")
      setErrorMsg("Payment could not load. Please refresh and try again.")
      return
    }

    setStatus("processing")
    setErrorMsg("")

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: donor.email,
      amount: selectedAmount * 100,
      currency: "NGN",
      metadata: {
        donor_name: donor.name,
        frequency,
        project: activeProject ? activeProject.name : "General Fund",
      },
      callback: (response) => {
        verifyPayment(response.reference)
      },
      onClose: () => {
        setStatus("idle")
      },
    })

    handler.openIframe()
  }

  const verifyPayment = async (reference) => {
    setStatus("verifying")
    try {
      const res = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus("success")
      } else {
        setStatus("error")
        setErrorMsg("We received your payment but could not verify it automatically. Please contact us with your reference number.")
      }
    } catch (err) {
      setStatus("error")
      setErrorMsg("We received your payment but could not verify it automatically. Please contact us with your reference number.")
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F7F4] px-4">
        <div className="max-w-md text-center bg-white rounded-3xl p-10 border border-blue-50 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <FiCheck size={28} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#111827] mb-3" style={{ fontFamily: "var(--font-display)" }}>Thank You!</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your donation {activeProject ? `to ${activeProject.name} ` : ""}has been received and
            verified. It directly supports young people through our education and empowerment
            programs.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative py-24 bg-[#0F2A5C] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[11px] font-bold uppercase tracking-widest mb-6">
            <FiHeart size={11} />
            Donate
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-display)" }}>
            Support the Mission
          </h1>
          <p className="text-blue-200 leading-relaxed">
            Your donation helps Chrysolite Foundation advance empowerment and education for young
            people in underprivileged and marginalized communities.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Your Support Makes an Impact
            </h2>
            <div className="space-y-5">
              {impactPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-[#1A56A7]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleDonate} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-blue-50">

              {activeProject && (
                <div className="flex items-center justify-between gap-3 mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <div>
                    <div className="text-[11px] font-bold text-[#1A56A7] uppercase tracking-wider mb-0.5">Donating To</div>
                    <div className="text-[#111827] font-semibold text-sm">{activeProject.name}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setClearedProject(true)}
                    aria-label="Donate to general fund instead"
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[#1A56A7] hover:bg-blue-100 transition-colors shrink-0"
                    title="Donate to general fund instead"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              )}

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

              {status === "error" && (
                <p className="text-red-500 text-sm mb-4">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "processing" || status === "verifying"}
                className="w-full py-4 bg-[#F59E0B] text-white font-bold rounded-full hover:bg-amber-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "processing" && "Opening secure checkout..."}
                {status === "verifying" && "Confirming payment..."}
                {(status === "idle" || status === "error") &&
                  `Donate ₦${selectedAmount ? selectedAmount.toLocaleString() : "0"} ${frequency === "monthly" ? "Monthly" : "Now"}`}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default function DonatePage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="afterInteractive" />
      <Suspense fallback={null}>
        <DonateForm />
      </Suspense>
    </div>
  )
}