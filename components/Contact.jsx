"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
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
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4 ">
              <div>
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  src={ContactImg}
                  alt="Contact image"
                />
              </div>
              <div>
                <h2 className="py-2">Zay Lin Htet</h2>
                <p>Full Stack Software Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/zay-lin-htet/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/ZayLin799"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                    <AiOutlineMail />
                  </div>

                  <Link href="/Zay-Lin-Htet-CV.pdf" passHref>
                    <a target="_blank">
                      <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={onSubmit}>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows="10"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>

                <button
                  className="w-full p-4 mt-4 text-gray-100"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>

                {toast && (
                  <p
                    className={`mt-3 text-sm ${
                      toast.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {toast.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <HiOutlineChevronDoubleUp
                  className="text-[#050506]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
