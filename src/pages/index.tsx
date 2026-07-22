import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Globe, Shield, Beaker, Truck } from 'lucide-react';
import { home } from 'virtual:content';

const site = 'https://jrplubricants.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    name: 'JRP Lubricants',
    url: `${site}/`
  },
  {
    '@type': 'Organization',
    '@id': `${site}/#organization`,
    name: 'JRP Lubricants',
    url: `${site}/`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Gujarat',
      addressCountry: 'IN'
    },
    description:
    'Gujarat-based manufacturer and global exporter of industrial oils, automotive lubricants, and specialty greases.'
  },
  {
    '@type': 'WebPage',
    '@id': `${site}/#webpage`,
    url: `${site}/`,
    isPartOf: { '@id': `${site}/#website` },
    about: { '@id': `${site}/#organization` },
    datePublished: '2026-07-20',
    dateModified: '2026-07-20'
  }]

};

const diffIcons = [Globe, Shield, Beaker, Truck];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>JRP Lubricants — Industrial Oils & Lubricants Manufacturer, Gujarat India</title>
        <meta
          name="description"
          content="JRP Lubricants is a Gujarat-based manufacturer and global exporter of industrial oils, automotive lubricants, specialty greases, and marine lubricants. Trusted in 50+ countries." />
        
        <link rel="canonical" href={site} />
        <meta property="og:title" content="JRP Lubricants — Engineered for Performance. Built for the World." />
        <meta
          property="og:description"
          content="Gujarat-based manufacturer of high-performance industrial oils, automotive lubricants, and specialty greases — trusted by industries across 50+ nations." />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0d0d0d' }}>
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/airo-assets/images/pages/home/hero"
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high" />
            
            {/* Dark overlay with amber tint at bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.88) 100%)'
              }} />
            
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                'linear-gradient(to top, rgba(212,98,10,0.12) 0%, transparent 50%)'
              }} />
            
          </div>

          {/* Oversized background number */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(200px, 30vw, 400px)',
              fontWeight: 800,
              color: 'rgba(212,98,10,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            }}>
            
            01
          </div>

          <div className="relative container mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-4xl">
              
              {/* Kicker */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#D4620A' }}>Gujarat, India · Est. 2018


                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-bold uppercase leading-none mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(48px, 7vw, 96px)',
                  letterSpacing: '-0.02em',
                  color: '#ffffff'
                }}>
                
                <span>{home.hero.headline}</span>
                <br />
                <span style={{ color: '#D4620A' }}>{home.hero.headlineAccent}</span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-lg leading-relaxed mb-10 max-w-2xl"
                style={{ color: 'rgba(255,255,255,0.65)' }}>
                
                {home.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ background: '#D4620A' }}>
                  
                  {home.hero.cta1}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white border transition-all hover:border-white/60 hover:text-white/90"
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}>
                  
                  {home.hero.cta2}
                  <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Angled bottom divider */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '80px',
              background: '#111111',
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
            }} />
          
        </section>

        {/* ─── STATS BAR ────────────────────────────────────────────────── */}
        <section style={{ background: '#111111' }} className="relative z-10">
          <div className="container mx-auto px-6">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 border border-white/10"
              style={{ borderTop: '2px solid #D4620A' }}>
              
              {home.stats.map((stat, i) =>
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-8 py-10 border-r border-white/10 last:border-r-0">
                
                  <div
                  className="font-bold leading-none mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(36px, 4vw, 52px)',
                    color: '#D4620A'
                  }}>
                  
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* ─── PRODUCTS ─────────────────────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#111111' }}>
          {/* Angled top divider */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '60px',
              background: '#0d0d0d',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
            }} />
          

          {/* Oversized bg number */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(180px, 25vw, 350px)',
              fontWeight: 800,
              color: 'rgba(212,98,10,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            }}>
            
            02
          </div>

          <div className="relative container mx-auto px-6">
            {/* Section header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4620A' }}>
                  {home.products.sectionLabel}
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bold uppercase leading-none max-w-3xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 60px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                
                {home.products.headline}
              </motion.h2>
              <p className="mt-4 text-base max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {home.products.subheadline}
              </p>
            </div>

            {/* Product cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
              {home.products.categories.map((cat, i) => {
                const imgSlots = [
                '/airo-assets/images/pages/home/products-industrial',
                '/airo-assets/images/pages/home/products-automotive',
                '/airo-assets/images/pages/home/products-grease',
                '/airo-assets/images/pages/home/products-marine'];

                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative overflow-hidden"
                    style={{ background: '#1a1a1a' }}>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={imgSlots[i]}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy" />
                      
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, transparent 60%)' }} />
                      
                    </div>

                    {/* Amber top accent line */}
                    <div className="h-0.5 w-full" style={{ background: '#D4620A' }} />

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="font-bold uppercase mb-3 leading-tight"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '20px',
                          color: '#ffffff',
                          letterSpacing: '0.02em'
                        }}>
                        
                        {cat.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {cat.description}
                      </p>
                      <div
                        className="text-xs font-mono py-2 px-3 border-l-2 mb-5"
                        style={{
                          borderColor: '#D4620A',
                          background: 'rgba(212,98,10,0.08)',
                          color: 'rgba(255,255,255,0.5)'
                        }}>
                        
                        {cat.specs}
                      </div>
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-colors"
                        style={{ color: '#D4620A' }}>
                        
                        View Details <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>);

              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white border border-white/20 transition-all hover:border-primary hover:text-primary">
                
                View Full Product Range <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── WHY JRP ──────────────────────────────────────────────────── */}
        <section
          className="relative py-28 overflow-hidden"
          style={{ background: '#0d0d0d' }}>
          
          {/* Angled top */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '60px',
              background: '#111111',
              clipPath: 'polygon(0 0, 100% 0, 0 100%)'
            }} />
          

          {/* Oversized bg number */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(180px, 25vw, 350px)',
              fontWeight: 800,
              color: 'rgba(212,98,10,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            }}>
            
            03
          </div>

          <div className="relative container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Headline + body */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12" style={{ background: '#D4620A' }} />
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4620A' }}>
                    {home.whyJrp.sectionLabel}
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
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    color: '#ffffff',
                    letterSpacing: '-0.02em'
                  }}>
                  
                  {home.whyJrp.headline}
                </motion.h2>
                <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {home.whyJrp.body}
                </p>

                {/* Factory image */}
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <img
                    src="/airo-assets/images/pages/home/factory"
                    alt="JRP Lubricants manufacturing facility"
                    className="w-full h-full object-cover"
                    loading="lazy" />
                  
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(212,98,10,0.15) 0%, transparent 60%)' }} />
                  
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{ height: '60px', background: 'linear-gradient(to top, #0d0d0d, transparent)' }} />
                  
                </div>
              </div>

              {/* Right: Differentiators */}
              <div className="flex flex-col gap-6 lg:pt-20">
                {home.whyJrp.differentiators.map((diff, i) => {
                  const Icon = diffIcons[i % diffIcons.length];
                  return (
                    <motion.div
                      key={diff.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-5 p-6 border border-white/8 transition-all hover:border-primary/40"
                      style={{ background: 'rgba(255,255,255,0.02)' }}>
                      
                      <div
                        className="shrink-0 w-10 h-10 flex items-center justify-center"
                        style={{ background: 'rgba(212,98,10,0.15)', color: '#D4620A' }}>
                        
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3
                          className="font-bold uppercase mb-1.5 text-sm tracking-wider"
                          style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                          
                          {diff.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                          {diff.description}
                        </p>
                      </div>
                    </motion.div>);

                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── EXPORT CREDENTIALS ───────────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#111111' }}>
          {/* Angled top */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '60px',
              background: '#0d0d0d',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
            }} />
          

          {/* Oversized bg number */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(180px, 25vw, 350px)',
              fontWeight: 800,
              color: 'rgba(212,98,10,0.04)',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            }}>
            
            04
          </div>

          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#D4620A' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4620A' }}>
                  {home.export.sectionLabel}
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
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                
                {home.export.headline}
              </motion.h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {home.export.subheadline}
              </p>
            </div>

            {/* Globe visual + regions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Globe/world visual */}
              <div className="relative flex items-center justify-center">
                <div
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(212,98,10,0.2) 0%, rgba(212,98,10,0.05) 50%, transparent 70%)',
                    border: '1px solid rgba(212,98,10,0.2)',
                    boxShadow: '0 0 80px rgba(212,98,10,0.1)'
                  }}>
                  
                  {/* Inner ring */}
                  <div
                    className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full"
                    style={{ border: '1px solid rgba(212,98,10,0.15)' }} />
                  
                  {/* Core */}
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(212,98,10,0.1)', border: '1px solid rgba(212,98,10,0.3)' }}>
                    
                    <Globe size={48} style={{ color: '#D4620A' }} />
                  </div>
                  {/* Orbit dots */}
                  {[0, 60, 120, 180, 240, 300].map((deg) =>
                  <div
                    key={deg}
                    className="absolute w-2.5 h-2.5 rounded-full"
                    style={{
                      background: '#D4620A',
                      top: `calc(50% + ${Math.sin(deg * Math.PI / 180) * 47}% - 5px)`,
                      left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 47}% - 5px)`,
                      opacity: 0.6
                    }} />

                  )}
                </div>
              </div>

              {/* Export regions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {home.export.regions.map((region, i) =>
                <motion.div
                  key={region.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 border border-white/8 transition-all hover:border-primary/40"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  
                    <div
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: '#D4620A' }}>
                    
                      {region.name}
                    </div>
                    <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {region.countries}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ──────────────────────────────────────────────── */}
        <section
          className="relative py-28 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0d0d0d 0%, #1a0d00 50%, #0d0d0d 100%)'
          }}>
          
          {/* Angled top */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '60px',
              background: '#111111',
              clipPath: 'polygon(0 0, 100% 0, 0 100%)'
            }} />
          

          {/* Amber glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(212,98,10,0.12) 0%, transparent 70%)'
            }} />
          

          <div className="relative container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-16" style={{ background: '#D4620A' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4620A' }}>
                  B2B Partnerships
                </span>
                <div className="h-px w-16" style={{ background: '#D4620A' }} />
              </div>
              <h2
                className="font-bold uppercase leading-none mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                
                {home.cta.headline}
              </h2>
              <p
                className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                
                {home.cta.subheadline}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#D4620A' }}>
                
                {home.cta.buttonText}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>);

}