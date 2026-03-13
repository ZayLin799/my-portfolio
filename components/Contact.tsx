import Link from "next/link";
import { FormEvent, ChangeEvent, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineLocationMarker } from "react-icons/hi";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { personalProfile } from "../data/portfolio";
import { db } from "../lib/firebase";

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface ToastState {
  type: "success" | "error";
  msg: string;
}

const initialForm: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        msg: "Message sent. I will get back to you soon.",
      });
      setForm(initialForm);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send your message.";

      setToast({
        type: "error",
        msg: message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Hiring, freelance work, and recruiter outreach are all welcome.</h2>
      </div>

      <div className="contact-layout">
        <article className="surface-panel contact-card">
          <p className="eyebrow">Direct contact</p>
          <h3>{personalProfile.name}</h3>
          <p className="body-copy">
            If you are hiring for a full-stack engineer who can contribute across
            product, backend, frontend, and infrastructure, send me a note. I am
            especially interested in remote roles with strong ownership.
          </p>

          <div className="contact-details">
            <div className="contact-row">
              <AiOutlineMail size={18} />
              <span>{personalProfile.email}</span>
            </div>
            <div className="contact-row">
              <AiOutlinePhone size={18} />
              <span>{personalProfile.phone}</span>
            </div>
            <div className="contact-row">
              <HiOutlineLocationMarker size={18} />
              <span>{personalProfile.location}</span>
            </div>
          </div>

          <div className="contact-links" style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(22, 33, 27, 0.08)" }}>
            <a href={personalProfile.linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedinIn size={18} />
              LinkedIn
            </a>
            <a href={personalProfile.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub size={18} />
              GitHub
            </a>
            <a href={personalProfile.resumeUrl}>
              <BsFillPersonLinesFill size={18} />
              Resume
            </a>
          </div>
        </article>

        <div className="surface-panel contact-form-panel">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-grid">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                <span>Phone</span>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="Optional"
                />
              </label>
            </div>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="name@company.com"
                required
              />
            </label>

            <label>
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Hiring, freelance, or project inquiry"
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about the role, project, or team."
                required
              />
            </label>

            <button type="submit" className="button-primary full-width-button" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>

            {toast && (
              <div
                className={`toast-message ${
                  toast.type === "success" ? "toast-success" : "toast-error"
                }`}
              >
                {toast.msg}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="back-to-top">
        <Link href="/#home" className="back-link">
          <HiOutlineChevronDoubleUp size={18} />
          Back to top
        </Link>
      </div>
    </section>
  );
};

export default Contact;
