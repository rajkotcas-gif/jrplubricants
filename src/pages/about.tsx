import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Award, Users, FlaskConical, Globe } from 'lucide-react';
import { about } from 'virtual:content';

const site = 'https://jrplubricants.com';
const url = `${site}/about`;
const title = 'About JRP Lubricants | Gujarat Lubricant Manufacturer Since 1998';
const description =
  'JRP Lubricants — ISO certified lubricant manufacturer from Rajkot, Gujarat. 25+ years of formulation expertise, 500+ products, exported to 50+ countries. Learn our story.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const valueIcons = [Award, FlaskConical, Users, Globe];

export default function AboutPage() {
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
                'radial-gradient(ellipse at 70% 50%, rgba(212,98,10,0.09) 0%, transparent 60%)',
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
            03
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
              <span style={{ color: '#D4620A' }}>About</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: '#D4620A' }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: '#D4620A' }}
              >
                {about.hero.label}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-bold uppercase leading-none mb-6 max-w-4xl"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 72px)',
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              {about.hero.headline}
            </motion.h1>

            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {about.hero.subheadline}
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

        {/* ─── OUR STORY ────────────────────────────────────────────────── */}
        <section className="py-28" style={{ background: '#111111' }}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12" style={{ background: '#D4620A' }} />
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: '#D4620A' }}
                  >
                    {about.story.sectionLabel}
                  </span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-bold uppercase leading-none mb-8"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {about.story.headline}
                </motion.h2>
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {about.story.body1}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {about.story.body2}
                </p>
              </div>

              {/* Milestone timeline */}
              <div className="relative pl-6 border-l-2" style={{ borderColor: 'rgba(212,98,10,0.3)' }}>
                {about.milestones.map((ms, i) => (
                  <motion.div
                    key={ms.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative mb-8 last:mb-0"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[29px] top-1 w-3 h-3 border-2"
                      style={{
                        background: '#0d0d0d',
                        borderColor: '#D4620A',
                      }}
                    />
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: '#D4620A' }}
                    >
                      {ms.year}
                    </div>
                    <div
                      className="font-bold uppercase text-sm mb-1"
                      style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                    >
                      {ms.title}
                    </div>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {ms.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CORE VALUES ──────────────────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#0d0d0d' }}>
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50px',
              background: '#111111',
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            }}
          />

          <div className="relative container mx-auto px-6">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#D4620A' }}
                >
                  {about.values.sectionLabel}
                </span>
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
              </div>
              <h2
                className="font-bold uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 60px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {about.values.headline}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.values.items.map((val, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-5 p-7 border border-white/8 transition-all hover:border-primary/40"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div
                      className="shrink-0 w-12 h-12 flex items-center justify-center"
                      style={{ background: 'rgba(212,98,10,0.15)', color: '#D4620A' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3
                        className="font-bold uppercase mb-2"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '17px',
                          color: '#ffffff',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {val.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── FACILITY ─────────────────────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#111111' }}>
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50px',
              background: '#0d0d0d',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
          />

          <div className="relative container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Facility specs */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12" style={{ background: '#D4620A' }} />
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: '#D4620A' }}
                  >
                    {about.facility.sectionLabel}
                  </span>
                </div>
                <h2
                  className="font-bold uppercase leading-none mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {about.facility.headline}
                </h2>
                <p
                  className="text-base leading-relaxed mb-10"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {about.facility.subheadline}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {about.facility.specs.map((spec, i) => (
                    <motion.div
                      key={spec.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="p-5 border border-white/8"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div
                        className="font-bold leading-none mb-1"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(22px, 2.5vw, 32px)',
                          color: '#D4620A',
                        }}
                      >
                        {spec.value}
                      </div>
                      <div
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                      >
                        {spec.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Factory image */}
              <div className="relative overflow-hidden" style={{ height: '420px' }}>
                <img
                  src="/airo-assets/images/pages/home/factory"
                  alt="JRP Lubricants manufacturing facility in Rajkot, Gujarat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={700}
                  height={420}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(17,17,17,0.5) 0%, transparent 60%)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: '#D4620A' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── LEADERSHIP TEAM ──────────────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#0d0d0d' }}>
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50px',
              background: '#111111',
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            }}
          />

          <div className="relative container mx-auto px-6">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#D4620A' }}
                >
                  {about.team.sectionLabel}
                </span>
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
              </div>
              <h2
                className="font-bold uppercase leading-none mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 60px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {about.team.headline}
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {about.team.subheadline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {about.team.members.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-white/8 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="h-0.5 w-full" style={{ background: '#D4620A' }} />
                  <div className="p-7">
                    {/* Avatar placeholder */}
                    <div
                      className="w-14 h-14 flex items-center justify-center mb-5"
                      style={{ background: 'rgba(212,98,10,0.15)' }}
                    >
                      <span
                        className="font-bold text-xl"
                        style={{ fontFamily: 'var(--font-heading)', color: '#D4620A' }}
                      >
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3
                      className="font-bold uppercase mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        color: '#ffffff',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {member.name}
                    </h3>
                    <div
                      className="text-xs font-semibold tracking-widest uppercase mb-4"
                      style={{ color: '#D4620A' }}
                    >
                      {member.title}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CERTIFICATIONS ───────────────────────────────────────────── */}
        <section className="py-20" style={{ background: '#111111' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#D4620A' }}
                >
                  {about.certifications.sectionLabel}
                </span>
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
              </div>
              <h2
                className="font-bold uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {about.certifications.headline}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {about.certifications.items.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ background: 'rgba(212,98,10,0.12)', color: '#D4620A' }}
                  >
                    <Award size={22} />
                  </div>
                  <div
                    className="font-bold uppercase mb-1"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      color: '#ffffff',
                    }}
                  >
                    {cert.name}
                  </div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {cert.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0d0d0d 0%, #1a0d00 50%, #0d0d0d 100%)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(212,98,10,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="relative container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-bold uppercase leading-none mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(36px, 5vw, 68px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {about.cta.headline}
              </h2>
              <p
                className="text-lg mb-10 max-w-2xl mx-auto"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {about.cta.subheadline}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#D4620A' }}
              >
                {about.cta.buttonText}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
