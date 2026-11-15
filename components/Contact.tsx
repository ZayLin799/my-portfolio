import Link from "next/link";
import { FormEvent, ChangeEvent, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

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

// Keep these in sync with the size checks in firestore.rules.
const FIELD_LIMITS = {
  name: 100,
  phone: 30,
  email: 254,
  subject: 150,
  message: 5000,
} as const;

const successToast: ToastState = {
  type: "success",
  msg: "Message sent. I will get back to you soon.",
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [honeypot, setHoneypot] = useState("");
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

    // Bots tend to fill every field, including the hidden honeypot.
    // Pretend it worked so they don't retry, but store nothing.
    if (honeypot) {
      setToast(successToast);
      setForm(initialForm);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        status: "new",
        createdAt: serverTimestamp(),
      });

      setToast(successToast);
      setForm(initialForm);
    } catch (error) {
      console.error("Contact form submission failed", error);
      setToast({
        type: "error",
        msg: "Sorry, your message could not be sent. Please try again or email me directly.",
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
            especially interested in roles that need end-to-end ownership across
            requirements, architecture, delivery, and production operations.
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

          </div>

          <div className="contact-links contact-social-links">
            <a href={personalProfile.linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedinIn size={18} />
              LinkedIn
            </a>
            <a href={personalProfile.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub size={18} />
              GitHub
            </a>
            <a href={personalProfile.resumeUrl} target="_blank" rel="noreferrer">
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
                  maxLength={FIELD_LIMITS.name}
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  maxLength={FIELD_LIMITS.phone}
                  autoComplete="tel"
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
                maxLength={FIELD_LIMITS.email}
                autoComplete="email"
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
                maxLength={FIELD_LIMITS.subject}
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
                maxLength={FIELD_LIMITS.message}
                placeholder="Tell me about the role, project, or team."
                required
              />
            </label>

            <label className="form-honeypot" aria-hidden="true">
              <span>Leave this field empty</span>
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            <button type="submit" className="button-primary full-width-button" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>

            {toast && (
              <div
                role={toast.type === "error" ? "alert" : "status"}
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
