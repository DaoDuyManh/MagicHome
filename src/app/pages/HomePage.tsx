import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Star, ArrowRight, Phone, Mail, ChevronRight, Check } from "lucide-react";
import { useServices } from "../hooks/useServices";
import { logoImg, heroImages } from "../data/initialServices";
import { SharedHeader } from "../components/SharedHeader";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { CtaBanner } from "../components/CtaBanner";
import { ServiceRow } from "../components/ServiceRow";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" style={{ fill: "url(#ig-footer-g)" }}>
      <defs>
        <linearGradient id="ig-footer-g" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const features = [
  { num: "01", title: "Superior Quality", desc: "Every image hand-edited by professionals with 5+ years in real estate photography." },
  { num: "02", title: "Fast Turnaround", desc: "Receive your finished images within 12–24 hours. Rush delivery available on request." },
  { num: "03", title: "Unlimited Revisions", desc: "Not satisfied? We revise until you love it — completely free of charge." },
  { num: "04", title: "Competitive Pricing", desc: "Professional quality at rates designed for busy real estate photographers." },
];

const steps = [
  { step: "01", title: "Send Your Photos", desc: "Upload your raw real estate photos to us via email, Google Drive, or WeTransfer." },
  { step: "02", title: "We Edit & Enhance", desc: "Our expert team applies color correction, sky replacement, HDR blending, and more." },
  { step: "03", title: "Receive & Approve", desc: "Get your polished images back in 12–24 hours. Request revisions until you're 100% happy." },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Real Estate Photographer, Sydney", text: "Magic Home has completely transformed my workflow. The quality is outstanding and delivery is always on time. My clients love the results!", rating: 5 },
  { name: "James Kowalski", role: "Property Listing Agent, Melbourne", text: "The virtual staging service is incredible — empty rooms become beautifully furnished in under 24 hours. Definitely recommend!", rating: 5 },
  { name: "Emily Chen", role: "Real Estate Photographer, Auckland", text: "I've tried many editing services but Magic Home stands out for their attention to detail. The day-to-dusk transformations look truly professional.", rating: 5 },
];

const statsData = [
  { target: 6, min: 1, suffix: "+ years", label: "Of Experience", duration: 2000 },
  { target: 99, min: 0, suffix: "%", label: "On Time Delivery", duration: 2200 },
  { target: 1800, min: 0, suffix: "+", label: "Photos Edited Daily", duration: 2500, separator: true },
];

export function HomePage() {
  const { services } = useServices();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Build portfolio images from services data
  const portfolioImages = useMemo(() => {
    const imgs: string[] = [];
    services.forEach((s) => {
      if (s.coverImage) imgs.push(s.coverImage);
      s.images?.forEach((img: { url: string }) => {
        if (img.url) imgs.push(img.url);
      });
    });
    return imgs;
  }, [services]);

  const coverPhotos    = heroImages[0];
  const coverDaytoDusk = heroImages[1];
  const coverStaging   = heroImages[3];
  const coverVideo     = heroImages[5];

  const photos1    = services[0]?.images?.[0]?.url ?? heroImages[0];
  const daytodusk1 = services[1]?.images?.[0]?.url ?? heroImages[1];
  const retouch1   = services[2]?.images?.[0]?.url ?? heroImages[2];
  const staging1   = services[3]?.images?.[0]?.url ?? heroImages[3];

  return (
    <div className="min-h-screen bg-white">

      {/* ── SHARED HEADER ── */}
      <SharedHeader />

      {/* ── HERO ── */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-orange-500 text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.2em" }}>
                #1 Real Estate Editing Service
              </p>
              <h1 className="text-gray-900 mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontFamily: "Georgia, serif", lineHeight: 1.15 }}>
                REAL ESTATE<br />
                <span className="text-orange-500">PHOTO EDITING</span>
              </h1>
              <p className="text-gray-500 mb-8 leading-relaxed max-w-lg" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
                On the mission of helping photographers optimize their working time.
                We provide high-quality photo and video editing services — so you can
                focus on shooting, not post-processing.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded transition-all duration-300 hover:shadow-lg hover:shadow-orange-200 text-sm">
                  Our Services
                </a>
                <a href="#portfolio" className="px-7 py-3 border-2 border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-500 rounded transition-all duration-300 text-sm">
                  View Portfolio
                </a>
              </div>
            </motion.div>

            {/* Right: image collage */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="grid grid-cols-2 gap-3 relative">
                <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "3/4" }}>
                  <img src={coverPhotos} alt="Real estate photo" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
                  <img src={coverDaytoDusk} alt="Day to dusk" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
                  <img src={coverStaging} alt="Virtual staging" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>12hr Delivery</p>
                    <p className="text-gray-400 text-xs">Rush available</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="border border-gray-200 rounded-2xl px-8 py-10 text-center hover:border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <p
                  className="text-gray-900 mb-2"
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    min={stat.min}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    separator={!!stat.separator}
                  />
                </p>
                <p className="text-gray-500 text-sm mt-2" style={{ fontWeight: 600 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (top) ── */}
      <CtaBanner backgroundImage={coverPhotos} />

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-orange-500 text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.2em" }}>What We Offer</p>
            <h2 className="text-gray-900" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontFamily: "Georgia, serif" }}>Our Services</h2>
            <div className="mt-4 flex justify-center"><div className="h-0.5 w-16 bg-orange-500 rounded" /></div>
          </motion.div>

          <div className="divide-y divide-gray-100">
            {services.map((service, i) => (
              <ServiceRow key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-orange-500 text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.2em" }}>Why Choose Us</p>
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontFamily: "Georgia, serif" }}>
                Excellence in Every Edit
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                We combine technical expertise with an eye for detail to deliver real estate images that truly stand out — helping properties sell faster and for more.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs" style={{ fontWeight: 700 }}>
                      {f.num}
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1" style={{ fontSize: "0.95rem", fontWeight: 600 }}>{f.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
              {[photos1, daytodusk1, retouch1, staging1].map((img, i) => (
                <div key={i} className={`rounded-xl overflow-hidden shadow-md aspect-square${i % 2 === 1 ? " mt-6" : ""}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={coverVideo} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-orange-400 text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.2em" }}>Trusted by many</p>
              <h2 className="text-white mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontFamily: "Georgia, serif" }}>Step by Step</h2>
              <div className="space-y-8">
                {steps.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-400"
                      style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem" }}>
                      {s.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-white mb-1.5" style={{ fontSize: "1rem", fontWeight: 600 }}>{s.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded transition-all duration-300 text-sm">
                  Start Today <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={coverDaytoDusk} alt="Real estate editing" className="w-full h-full object-cover" style={{ maxHeight: "500px" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GALLERY ── */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-orange-500 text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.2em" }}>Our Work</p>
            <h2 className="text-gray-900" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontFamily: "Georgia, serif" }}>Portfolio</h2>
            <div className="mt-4 flex justify-center"><div className="h-0.5 w-16 bg-orange-500 rounded" /></div>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
              A selection of our best real estate photo editing work — every image transformed to captivate buyers.
            </p>
          </motion.div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {portfolioImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.06 }}
                className="break-inside-avoid rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group mb-3">
                <img src={img} alt={`Portfolio ${i + 1}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded transition-all duration-300 text-sm">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-orange-500 text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.2em" }}>Testimonials</p>
            <h2 className="text-gray-900" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontFamily: "Georgia, serif" }}>What Our Clients Say</h2>
            <div className="mt-4 flex justify-center"><div className="h-0.5 w-16 bg-orange-500 rounded" /></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-sm" style={{ fontWeight: 700 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-6 h-2 bg-orange-500" : "w-2 h-2 bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (bottom) ── */}
      <CtaBanner backgroundImage={coverDaytoDusk} />

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <img src={logoImg} alt="Magic Home" className="h-10 w-auto object-contain mb-4 opacity-90" />
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Professional real estate photo editing service. Helping photographers save time and deliver stunning results.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/magichome.editing" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/magichome.editing" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white mb-4 text-sm" style={{ fontWeight: 600, letterSpacing: "0.05em" }}>Services</h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`/service/${s.id}`} className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 opacity-50" />{s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4 text-sm" style={{ fontWeight: 600, letterSpacing: "0.05em" }}>Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 opacity-50" />{l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4 text-sm" style={{ fontWeight: 600, letterSpacing: "0.05em" }}>Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:Magichome.editing@gmail.com" className="flex items-start gap-2.5 text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Magichome.editing@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/84385603388" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    +84 385 603 388
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Magic Home. All rights reserved.</p>
            <p className="text-gray-600 text-xs">Professional Real Estate Photo Editing</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
