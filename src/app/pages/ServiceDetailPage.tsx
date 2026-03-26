import { useParams, Link, useNavigate } from "react-router";
import { useServices } from "../hooks/useServices";
import { ArrowLeft, Image as ImageIcon, Play, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { SharedHeader } from "../components/SharedHeader";

function getYouTubeEmbedUrl(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`;
  }
  return null;
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"
      style={{ fill: "url(#ig-detail-gradient)" }}>
      <defs>
        <linearGradient id="ig-detail-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { getServiceById } = useServices();
  const navigate = useNavigate();
  const service = serviceId ? getServiceById(serviceId) : undefined;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4 text-gray-700">Service not found</h2>
          <Link to="/" className="text-amber-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const hasVideos = (service.videos?.length ?? 0) > 0;
  const hasImages = service.images.length > 0;
  const hasBeforeAfter = (service.beforeAfterPairs?.length ?? 0) > 0;

  const openLightbox = (url: string, idx: number) => {
    setSelectedImage(url);
    setSelectedIdx(idx);
  };

  const closeLightbox = () => setSelectedImage(null);

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = (selectedIdx - 1 + service.images.length) % service.images.length;
    setSelectedIdx(newIdx);
    setSelectedImage(service.images[newIdx].url);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = (selectedIdx + 1) % service.images.length;
    setSelectedIdx(newIdx);
    setSelectedImage(service.images[newIdx].url);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Shared Header */}
      <SharedHeader />

      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-16" style={{ height: "clamp(260px, 38vw, 420px)" }}>
        <img
          src={service.coverImage}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        {/* Back button overlay */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 sm:left-8 flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm z-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2" style={{ letterSpacing: "0.2em" }}>
              Magic Home Services
            </p>
            <h1
              className="text-white mb-2"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontFamily: "Georgia, serif" }}
            >
              {service.name}
            </h1>
            <p className="text-white/70 max-w-2xl text-sm sm:text-base">{service.description}</p>
            <div className="flex items-center gap-5 mt-3 text-white/45 text-sm">
              {hasImages && (
                <span className="flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" />
                  {service.images.length} {service.images.length === 1 ? "sample" : "samples"}
                </span>
              )}
              {hasVideos && (
                <span className="flex items-center gap-1.5">
                  <Play className="w-4 h-4" />
                  {service.videos!.length} {service.videos!.length === 1 ? "video" : "videos"}
                </span>
              )}
              {service.price && (
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-0.5 rounded-full text-xs">
                  {service.price}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* ── Videos ── */}
        {hasVideos && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <Play className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <h2 className="text-gray-900" style={{ fontSize: "1.35rem", fontFamily: "Georgia, serif" }}>
                Videos
              </h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.videos!.map((video, index) => {
                const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);
                if (!embedUrl) return null;
                return (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-video">
                      <iframe
                        src={embedUrl}
                        title={video.title || `Video ${index + 1}`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    {video.title && (
                      <div className="px-4 py-3 border-t border-gray-50">
                        <p className="text-gray-700 text-sm">{video.title}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Gallery ── */}
        {(hasImages || hasBeforeAfter) && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <ImageIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <h2 className="text-gray-900" style={{ fontSize: "1.35rem", fontFamily: "Georgia, serif" }}>
                Gallery
              </h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* ── Before / After Sliders (top of gallery) ── */}
            {hasBeforeAfter && (
              <div className="mb-8">
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-4" style={{ letterSpacing: "0.18em" }}>
                  Before &amp; After
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {service.beforeAfterPairs!.map((pair, index) => (
                    <motion.div
                      key={pair.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <BeforeAfterSlider
                        before={pair.before}
                        after={pair.after}
                        label={pair.label}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Divider between before/after and regular gallery */}
                {hasImages && (
                  <div className="flex items-center gap-3 mt-10 mb-8">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-400 tracking-widest uppercase px-2" style={{ letterSpacing: "0.18em" }}>
                      More Samples
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                )}
              </div>
            )}

            {/* Regular image grid */}
            {hasImages && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {service.images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => openLightbox(image.url, index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.5 }}
                        src={image.url}
                        alt={image.caption || service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <ImageIcon className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                    {image.caption && (
                      <div className="px-4 py-3 border-t border-gray-50">
                        <p className="text-gray-500 text-sm">{image.caption}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Empty state */}
        {!hasImages && !hasVideos && !hasBeforeAfter && (
          <div className="text-center py-24">
            <ImageIcon className="w-20 h-20 mx-auto text-gray-200 mb-4" />
            <p className="text-gray-400">No samples yet</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors z-10"
              onClick={closeLightbox}
            >
              ×
            </button>

            {/* Prev */}
            {service.images.length > 1 && (
              <button
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-2xl transition-colors z-10"
                onClick={goPrev}
              >
                ‹
              </button>
            )}

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            {service.images.length > 1 && (
              <button
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-2xl transition-colors z-10"
                onClick={goNext}
              >
                ›
              </button>
            )}

            {/* Caption */}
            {service.images[selectedIdx]?.caption && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white/80 text-sm">
                {service.images[selectedIdx].caption}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-gray-900 py-14 sm:py-20 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.2em" }}>
            Interested?
          </p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontFamily: "Georgia, serif" }}>
            Get a Free Quote
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Contact us today for pricing and a custom editing plan for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Magichome.editing@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-amber-400 hover:bg-amber-300 text-black rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/20 text-sm"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <a
              href="https://wa.me/84385603388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg transition-all hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact info below footer */}
      <div className="bg-black py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            <a href="mailto:Magichome.editing@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors text-sm">
              <Mail className="w-4 h-4" /> Magichome.editing@gmail.com
            </a>
            <a href="https://wa.me/84385603388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors text-sm">
              <Phone className="w-4 h-4" /> WhatsApp: +84 385 603 388
            </a>
            <a href="https://www.facebook.com/magichome.editing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm">
              <FacebookIcon /> Magichome
            </a>
            <a href="https://www.instagram.com/magichome.editing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-pink-400 transition-colors text-sm">
              <InstagramIcon /> Magichome
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}