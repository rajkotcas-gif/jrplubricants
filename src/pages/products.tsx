import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Award, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from 'virtual:content';

const site = 'https://jrplubricants.com';
const url = `${site}/products`;
const title = 'Products — JRP Lubricants | Industrial Oils, Automotive Lubricants & Greases';
const description =
  "Browse JRP Lubricants' full product range: industrial oils, automotive lubricants, specialty greases, and marine lubricants. 500+ formulations, ISO certified, exported to 50+ countries.";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(products.categories[0].id);
  // Track expanded product cards by product id
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpanded = (id: string) =>
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));

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
                'radial-gradient(ellipse at 20% 50%, rgba(212,98,10,0.08) 0%, transparent 60%)',
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
            02
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
              <span style={{ color: '#D4620A' }}>Products</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: '#D4620A' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4620A' }}>
                {products.hero.label}
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
              {products.hero.headline}
            </motion.h1>

            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {products.hero.subheadline}
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

        {/* ─── CATEGORY TABS + PRODUCTS ─────────────────────────────────── */}
        <section className="py-20" style={{ background: '#111111' }}>
          <div className="container mx-auto px-6">
            {/* Tab buttons */}
            <div
              className="flex flex-wrap gap-px mb-12"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              {products.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex-1 min-w-[140px] px-6 py-4 text-xs font-bold tracking-widest uppercase transition-all"
                  style={{
                    background: activeCategory === cat.id ? '#D4620A' : '#111111',
                    color: activeCategory === cat.id ? '#ffffff' : 'rgba(255,255,255,0.5)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* All categories — CSS visibility drives active panel */}
            {products.categories.map((cat) => (
              <div key={cat.id} className={activeCategory === cat.id ? 'block' : 'hidden'}>
                {/* Category header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
                  <div>
                    <h2
                      className="font-bold uppercase leading-none mb-4"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(28px, 3.5vw, 48px)',
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {cat.name}
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {cat.description}
                    </p>
                  </div>
                  <div className="relative overflow-hidden" style={{ height: '220px' }}>
                    <img
                      src={cat.imageSlot}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(to right, rgba(17,17,17,0.7) 0%, transparent 50%)',
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: '#D4620A' }}
                    />
                  </div>
                </div>

                {/* Product cards — inlined, no content props drilled */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.products.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="border border-white/8 transition-all hover:border-primary/40"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div className="h-0.5 w-full" style={{ background: '#D4620A' }} />
                      <div className="p-6">
                        {/* Name */}
                        <h3
                          className="font-bold uppercase leading-tight mb-2"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '18px',
                            color: '#ffffff',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {product.name}
                        </h3>
                        {/* Grade */}
                        <div
                          className="text-xs font-mono py-1.5 px-3 border-l-2 inline-block mb-4"
                          style={{
                            borderColor: '#D4620A',
                            background: 'rgba(212,98,10,0.08)',
                            color: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          {product.grade}
                        </div>
                        {/* Description */}
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: 'rgba(255,255,255,0.55)' }}
                        >
                          {product.description}
                        </p>

                        {/* Expand toggle */}
                        <button
                          onClick={() => toggleExpanded(product.id)}
                          className="flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-colors"
                          style={{ color: '#D4620A' }}
                        >
                          {expandedIds[product.id] ? 'Hide Details' : 'View Details'}
                          {expandedIds[product.id] ? (
                            <ChevronUp size={12} />
                          ) : (
                            <ChevronDown size={12} />
                          )}
                        </button>

                        {/* Expanded details */}
                        {expandedIds[product.id] && (
                          <div className="mt-4 pt-4 border-t border-white/8">
                            {/* Applications */}
                            <div className="mb-4">
                              <div
                                className="text-xs font-bold tracking-widest uppercase mb-2"
                                style={{ color: 'rgba(255,255,255,0.4)' }}
                              >
                                Applications
                              </div>
                              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                {product.applications}
                              </p>
                            </div>
                            {/* Features */}
                            <div className="mb-4">
                              <div
                                className="text-xs font-bold tracking-widest uppercase mb-2"
                                style={{ color: 'rgba(255,255,255,0.4)' }}
                              >
                                Key Features
                              </div>
                              <div className="flex flex-col gap-1.5">
                                {product.features.map((feature, fi) => (
                                  <div key={fi} className="flex items-center gap-2">
                                    <div
                                      className="w-1 h-1 rounded-full shrink-0"
                                      style={{ background: '#D4620A' }}
                                    />
                                    <span
                                      className="text-sm"
                                      style={{ color: 'rgba(255,255,255,0.55)' }}
                                    >
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-colors"
                              style={{ color: '#D4620A' }}
                            >
                              <FileText size={12} />
                              Request Datasheet
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CERTIFICATIONS ───────────────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden" style={{ background: '#0d0d0d' }}>
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50px',
              background: '#111111',
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
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
                  Certifications
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
                {products.certifications.headline}
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {products.certifications.subheadline}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.certifications.items.map((cert, i) => (
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
                    {cert.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0d0d0d 0%, #1a0d00 50%, #0d0d0d 100%)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(212,98,10,0.1) 0%, transparent 70%)',
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
                  fontSize: 'clamp(32px, 4.5vw, 60px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {products.cta.headline}
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {products.cta.subheadline}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#D4620A' }}
              >
                {products.cta.buttonText}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
