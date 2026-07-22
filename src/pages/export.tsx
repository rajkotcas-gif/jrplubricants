import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Package, FileText, Tag, Ship, Beaker, Headphones, Award } from 'lucide-react';
import { export_page as exportPage } from 'virtual:content';

const site = 'https://jrplubricants.com';
const url = `${site}/export`;
const title = 'Export & Global Reach — JRP Lubricants | Lubricant Exporter from India';
const description =
  'JRP Lubricants exports industrial oils, automotive lubricants, and specialty greases to 50+ countries. ISO certified, full compliance documentation, private labelling, and flexible packaging.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const capIcons = [Package, FileText, Tag, Ship, Beaker, Headphones];

export default function ExportPage() {
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
                'radial-gradient(ellipse at 80% 50%, rgba(212,98,10,0.1) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(200px, 30vw, 380px)',
              fontWeight: 800,
              color: 'rgba(212,98,10,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.05em',
            }}
          >
            04
          </div>

          <div className="relative container mx-auto px-6">
            {/* Breadcrumb */}
            <div
              className="flex items-center gap-2 mb-8 text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span style={{ color: '#D4620A' }}>Export</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: '#D4620A' }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: '#D4620A' }}
              >
                {exportPage.hero.label}
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
              {exportPage.hero.headline}
            </motion.h1>

            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {exportPage.hero.subheadline}
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

        {/* ─── STATS BAR ────────────────────────────────────────────────── */}
        <section style={{ background: '#111111' }}>
          <div className="container mx-auto px-6">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 border border-white/10"
              style={{ borderTop: '2px solid #D4620A' }}
            >
              {exportPage.stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="px-8 py-10 border-r border-white/10 last:border-r-0"
                >
                  <div
                    className="font-bold leading-none mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(36px, 4vw, 52px)',
                      color: '#D4620A',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPORT REGIONS ───────────────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#111111' }}>
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(180px, 25vw, 350px)',
              fontWeight: 800,
              color: 'rgba(212,98,10,0.03)',
              lineHeight: 1,
              letterSpacing: '-0.05em',
            }}
          >
            50+
          </div>

          <div className="relative container mx-auto px-6">
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#D4620A' }}
                >
                  {exportPage.regions.sectionLabel}
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bold uppercase leading-none mb-4 max-w-3xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 60px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {exportPage.regions.headline}
              </motion.h2>
              <p className="text-base max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {exportPage.regions.subheadline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exportPage.regions.items.map((region, i) => (
                <motion.div
                  key={region.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-white/8 transition-all hover:border-primary/40 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  {/* Amber top accent */}
                  <div className="h-0.5 w-full" style={{ background: '#D4620A' }} />

                  <div className="p-6">
                    {/* Region name */}
                    <h3
                      className="font-bold uppercase mb-3"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '22px',
                        color: '#ffffff',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {region.name}
                    </h3>

                    {/* Countries */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {region.countries.map((country, ci) => (
                        <span
                          key={ci}
                          className="text-xs px-2 py-0.5 border border-white/10"
                          style={{ color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.04)' }}
                        >
                          {country}
                        </span>
                      ))}
                    </div>

                    {/* Highlight */}
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {region.highlight}
                    </p>

                    {/* Packaging note */}
                    <div
                      className="text-xs py-2 px-3 border-l-2"
                      style={{
                        borderColor: '#D4620A',
                        background: 'rgba(212,98,10,0.07)',
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {region.packagingNote}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPORT CAPABILITIES ──────────────────────────────────────── */}
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
                  {exportPage.capabilities.sectionLabel}
                </span>
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bold uppercase leading-none mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 60px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {exportPage.capabilities.headline}
              </motion.h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {exportPage.capabilities.subheadline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exportPage.capabilities.items.map((cap, i) => {
                const Icon = capIcons[i % capIcons.length];
                return (
                  <motion.div
                    key={cap.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-5 p-6 border border-white/8 transition-all hover:border-primary/40"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 flex items-center justify-center"
                      style={{ background: 'rgba(212,98,10,0.15)', color: '#D4620A' }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3
                        className="font-bold uppercase mb-2 text-sm tracking-wider"
                        style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                      >
                        {cap.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {cap.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── COMPLIANCE ───────────────────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden" style={{ background: '#111111' }}>
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50px',
              background: '#0d0d0d',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
          />

          <div className="relative container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#D4620A' }}
                >
                  {exportPage.compliance.sectionLabel}
                </span>
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
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
                {exportPage.compliance.headline}
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {exportPage.compliance.subheadline}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {exportPage.compliance.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col items-center text-center p-5 border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-3"
                    style={{ background: 'rgba(212,98,10,0.12)', color: '#D4620A' }}
                  >
                    <Award size={18} />
                  </div>
                  <div
                    className="font-bold uppercase mb-1 text-sm"
                    style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                  >
                    {item.name}
                  </div>
                  <div className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS STEPS ────────────────────────────────────────────── */}
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
                  {exportPage.process.sectionLabel}
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
                {exportPage.process.headline}
              </h2>
            </div>

            {/* Steps — horizontal timeline on desktop, vertical on mobile */}
            <div className="relative">
              {/* Connecting line (desktop) */}
              <div
                className="hidden lg:block absolute top-10 left-0 right-0 h-px"
                style={{ background: 'rgba(212,98,10,0.25)' }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {exportPage.process.steps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Step number circle */}
                    <div
                      className="relative z-10 w-20 h-20 flex items-center justify-center mb-5 border-2"
                      style={{
                        background: '#0d0d0d',
                        borderColor: '#D4620A',
                      }}
                    >
                      <span
                        className="font-bold"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '28px',
                          color: '#D4620A',
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3
                      className="font-bold uppercase mb-2 text-sm tracking-wider"
                      style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
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
                {exportPage.cta.headline}
              </h2>
              <p
                className="text-lg mb-10 max-w-2xl mx-auto"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {exportPage.cta.subheadline}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#D4620A' }}
              >
                {exportPage.cta.buttonText}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
