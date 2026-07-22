import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { contact } from 'virtual:content';

const site = 'https://jrplubricants.com';
const url = `${site}/contact`;
const title = 'Contact JRP Lubricants | Export Inquiries & Sales — Rajkot, Gujarat';
const description =
  'Contact JRP Lubricants for export inquiries, product technical queries, private label programs, and distributor partnerships. Based in Rajkot, Gujarat, India.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const infoIcons = [MapPin, Phone, Mail, Clock];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check — abort silently if filled by a bot
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string).trim();
    const email = (data.get('email') as string).trim();
    const company = (data.get('company') as string).trim();
    const phone = (data.get('phone') as string).trim();
    const message = (data.get('message') as string).trim();

    setStatus('submitting');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (dropdowns, radios, checkboxes) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: message || 'New contact form submission' }],
            data: {
              __gd_contact_form_title: contact.form.heading,
              'Inquiry Type': inquiryType || 'General Inquiry',
              'Company': company,
              'Phone': phone,
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
        setInquiryType('');
      } else {
        setStatus('error');
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#0d0d0d' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 60% 50%, rgba(212,98,10,0.09) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(200px, 30vw, 380px)',
              fontWeight: 800,
              color: 'rgba(212,98,10,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.05em',
            }}
          >
            05
          </div>

          <div className="relative container mx-auto px-6">
            <div
              className="flex items-center gap-2 mb-8 text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span style={{ color: '#D4620A' }}>Contact</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: '#D4620A' }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: '#D4620A' }}
              >
                {contact.hero.label}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-bold uppercase leading-none mb-6 max-w-3xl"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 72px)',
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              {contact.hero.headline}
            </motion.h1>

            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {contact.hero.subheadline}
            </p>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50px',
              background: '#111111',
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
            }}
          />
        </section>

        {/* ─── MAIN CONTENT: FORM + INFO ────────────────────────────────── */}
        <section className="py-24" style={{ background: '#111111' }}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* ── CONTACT FORM (3 cols) ─────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div
                  className="border border-white/8 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="h-0.5 w-full" style={{ background: '#D4620A' }} />
                  <div className="p-8 md:p-10">
                    <h2
                      className="font-bold uppercase mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(22px, 3vw, 34px)',
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {contact.form.heading}
                    </h2>
                    <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {contact.form.subheading}
                    </p>

                    {status === 'success' ? (
                      <div
                        className="flex flex-col items-center justify-center py-16 text-center"
                      >
                        <div
                          className="w-16 h-16 flex items-center justify-center mb-5"
                          style={{ background: 'rgba(212,98,10,0.15)', color: '#D4620A' }}
                        >
                          <Send size={28} />
                        </div>
                        <h3
                          className="font-bold uppercase mb-2"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '24px',
                            color: '#ffffff',
                          }}
                        >
                          Inquiry Sent
                        </h3>
                        <p className="text-sm max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                          Thank you for reaching out. Our team will get back to you within 24 business hours.
                        </p>
                        <button
                          onClick={() => setStatus('idle')}
                          className="mt-8 text-xs font-bold tracking-widest uppercase underline underline-offset-4 transition-opacity hover:opacity-70"
                          style={{ color: '#D4620A' }}
                        >
                          Send Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} noValidate>
                        {/* Honeypot — never included in POST body */}
                        <input
                          ref={honeypotRef}
                          type="text"
                          name="_gotcha"
                          tabIndex={-1}
                          autoComplete="off"
                          style={{ position: 'absolute', left: '-9999px' }}
                          aria-hidden="true"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                          {/* Name */}
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-xs font-semibold tracking-widest uppercase mb-2"
                              style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              Full Name <span style={{ color: '#D4620A' }}>*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              placeholder="Rajesh Patel"
                              className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#F5F5F5',
                              }}
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-xs font-semibold tracking-widest uppercase mb-2"
                              style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              Email Address <span style={{ color: '#D4620A' }}>*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="you@company.com"
                              className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#F5F5F5',
                              }}
                            />
                          </div>

                          {/* Company */}
                          <div>
                            <label
                              htmlFor="company"
                              className="block text-xs font-semibold tracking-widest uppercase mb-2"
                              style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              Company / Organisation
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              placeholder="Acme Industries Ltd."
                              className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#F5F5F5',
                              }}
                            />
                          </div>

                          {/* Phone */}
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs font-semibold tracking-widest uppercase mb-2"
                              style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+971 50 000 0000"
                              className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#F5F5F5',
                              }}
                            />
                          </div>
                        </div>

                        {/* Inquiry Type */}
                        <div className="mb-5">
                          <label
                            htmlFor="inquiry-type"
                            className="block text-xs font-semibold tracking-widest uppercase mb-2"
                            style={{ color: 'rgba(255,255,255,0.5)' }}
                          >
                            Inquiry Type
                          </label>
                          <select
                            id="inquiry-type"
                            value={inquiryType}
                            onChange={(e) => setInquiryType(e.target.value)}
                            className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-primary appearance-none"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: inquiryType ? '#F5F5F5' : 'rgba(255,255,255,0.35)',
                            }}
                          >
                            <option value="" disabled style={{ background: '#1a1a1a' }}>
                              Select inquiry type…
                            </option>
                            {contact.form.inquiryTypes.map((type, i) => (
                              <option key={i} value={type} style={{ background: '#1a1a1a', color: '#F5F5F5' }}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div className="mb-7">
                          <label
                            htmlFor="message"
                            className="block text-xs font-semibold tracking-widest uppercase mb-2"
                            style={{ color: 'rgba(255,255,255,0.5)' }}
                          >
                            Message <span style={{ color: '#D4620A' }}>*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell us about your requirements — product types, volumes, destination country, packaging preferences…"
                            className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-primary resize-none"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#F5F5F5',
                            }}
                          />
                        </div>

                        {status === 'error' && (
                          <p
                            className="text-sm mb-5 px-4 py-3 border-l-2"
                            style={{
                              borderColor: '#ef4444',
                              background: 'rgba(239,68,68,0.08)',
                              color: '#fca5a5',
                            }}
                          >
                            {errorMsg}
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{ background: '#D4620A' }}
                        >
                          {status === 'submitting' ? (
                            <>
                              <span
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                              />
                              Sending…
                            </>
                          ) : (
                            <>
                              Send Inquiry
                              <ArrowRight size={16} />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* ── CONTACT INFO + QUICK LINKS (2 cols) ──────────────── */}
              <div className="lg:col-span-2 flex flex-col gap-6">

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-8" style={{ background: '#D4620A' }} />
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: '#D4620A' }}
                    >
                      {contact.info.sectionLabel}
                    </span>
                  </div>
                  <h2
                    className="font-bold uppercase leading-none mb-6"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(22px, 3vw, 34px)',
                      color: '#ffffff',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {contact.info.headline}
                  </h2>

                  <div className="flex flex-col gap-4">
                    {contact.info.items.map((item, i) => {
                      const Icon = infoIcons[i % infoIcons.length];
                      return (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 border border-white/8"
                          style={{ background: 'rgba(255,255,255,0.02)' }}
                        >
                          <div
                            className="shrink-0 w-9 h-9 flex items-center justify-center"
                            style={{ background: 'rgba(212,98,10,0.15)', color: '#D4620A' }}
                          >
                            <Icon size={16} />
                          </div>
                          <div>
                            <div
                              className="text-xs font-semibold tracking-widest uppercase mb-0.5"
                              style={{ color: 'rgba(255,255,255,0.4)' }}
                            >
                              {item.label}
                            </div>
                            <div className="text-sm leading-snug" style={{ color: '#F5F5F5' }}>
                              {item.value}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Quick links */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="border border-white/8 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="h-0.5 w-full" style={{ background: '#D4620A' }} />
                  <div className="p-6">
                    <h3
                      className="font-bold uppercase mb-4 text-sm tracking-wider"
                      style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                    >
                      {contact.quickLinks.headline}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {contact.quickLinks.items.map((ql, qi) => {
                        const hrefs = ['/products', '/export', '/about'];
                        return (
                          <Link
                            key={ql.id}
                            to={hrefs[qi] ?? '/'}
                            className="flex items-center justify-between px-4 py-3 border border-white/8 text-sm font-semibold transition-all hover:border-primary/40 group"
                            style={{ color: 'rgba(255,255,255,0.7)' }}
                          >
                            <span>{ql.label}</span>
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover:translate-x-1"
                              style={{ color: '#D4620A' }}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
