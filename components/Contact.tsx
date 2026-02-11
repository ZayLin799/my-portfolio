"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaFlag } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineLocationMarker, HiOutlineGlobeAlt } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

// Firestore
import { db } from "../lib/firebase"; // adjust path if you placed it elsewhere
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const onChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);
    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        status: "new",
        createdAt: serverTimestamp(),
      });
      setToast({
        type: "success",
        msg: "✅ Message sent! I will get back to you soon.",
      });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      setToast({
        type: "error",
        msg: `❌ ${err?.message || "Failed to send"}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10 text-center sm:text-left">
        <div className="space-y-4 mb-16">
          <p className="uppercase text-sm tracking-[0.4em] text-primary font-bold">
            Contact
          </p>
          <h2 className="leading-tight">Let&#39;s Start a <span className="text-primary italic">Conversation</span></h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-1 lg:col-span-2">
            <div className="glass-card h-full flex flex-col justify-between">
              <div className="space-y-8">
                <div className="relative group overflow-hidden rounded-xl">
                  <Image
                    className="duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                    src={ContactImg}
                    alt="Contact image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Zay Lin Htet</h2>
                  <p className="text-primary font-medium tracking-wide uppercase text-xs">Full-Stack Software Developer</p>
                  <p className="text-slate-400 leading-relaxed pt-2">
                    I am available for freelance or full-time positions. Let&#39;s collaborate on something extraordinary.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {[
                    { Icon: AiOutlineMail, text: "zaylin13.dev@gmail.com" },
                    { Icon: AiOutlinePhone, text: "+66 889131528" },
                    { Icon: HiOutlineLocationMarker, text: "Thailand" },
                    { Icon: FaFlag, text: "Myanmar" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-slate-300 group cursor-default">
                      <div className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <item.Icon size={18} />
                      </div>
                      <span className="text-sm font-medium tracking-wide">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12">
                <p className="uppercase text-xs font-black tracking-[0.2em] text-slate-500 mb-6">Connect With Me</p>
                <div className="flex items-center gap-4">
                  {[
                    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/zay-lin-htet/" },
                    { Icon: FaGithub, href: "https://github.com/ZayLin799" },
                    { Icon: BsFillPersonLinesFill, href: "/Zay-Lin-Htet-CV.pdf" }
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/50 transition-all">
                        <item.Icon size={20} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto col-span-1 lg:col-span-3">
            <div className="glass-card bg-white/[0.03]">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid w-full gap-6 md:grid-cols-2">
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-black tracking-widest uppercase text-slate-500 ml-1">Name</label>
                    <input
                      className="w-full p-4 rounded-xl glass bg-white/[0.02] border-white/5 focus:border-primary/50 outline-none transition-all text-white placeholder:text-slate-600"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-black tracking-widest uppercase text-slate-500 ml-1">Phone</label>
                    <input
                      className="w-full p-4 rounded-xl glass bg-white/[0.02] border-white/5 focus:border-primary/50 outline-none transition-all text-white placeholder:text-slate-600"
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-black tracking-widest uppercase text-slate-500 ml-1">Email</label>
                  <input
                    className="w-full p-4 rounded-xl glass bg-white/[0.02] border-white/5 focus:border-primary/50 outline-none transition-all text-white placeholder:text-slate-600"
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-black tracking-widest uppercase text-slate-500 ml-1">Subject</label>
                  <input
                    className="w-full p-4 rounded-xl glass bg-white/[0.02] border-white/5 focus:border-primary/50 outline-none transition-all text-white placeholder:text-slate-600"
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={onChange}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-black tracking-widest uppercase text-slate-500 ml-1">Message</label>
                  <textarea
                    className="w-full p-4 rounded-xl glass bg-white/[0.02] border-white/5 focus:border-primary/50 outline-none transition-all text-white placeholder:text-slate-600 resize-none"
                    rows={6}
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    className="w-full py-4 text-sm font-black tracking-[0.2em] shadow-primary/20"
                    disabled={loading}
                  >
                    {loading ? "SENDING MESSAGE..." : "SEND MESSAGE"}
                  </button>
                </div>

                {toast && (
                  <div className={`p-4 rounded-xl glass border-none text-center ${toast.type === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                    }`}>
                    {toast.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-24">
          <Link href="/">
            <div className="w-16 h-16 rounded-2xl glass border-white/5 flex items-center justify-center text-primary hover:-translate-y-2 transition-all cursor-pointer shadow-lg shadow-primary/5">
              <HiOutlineChevronDoubleUp size={24} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
