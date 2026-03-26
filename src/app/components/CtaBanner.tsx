import { motion } from "motion/react";

interface CtaBannerProps {
  /** Optional background image for subtle texture */
  backgroundImage?: string;
}

export function CtaBanner({ backgroundImage }: CtaBannerProps) {
  const mailtoHref =
    "mailto:Magichome.editing@gmail.com?subject=Free%20Trial%20Request%20-%203%20Free%20Photos&body=Hello%2C%0A%0AI%20would%20like%20to%20try%20your%20free%20trial%20for%203%20photos.%20Please%20let%20me%20know%20the%20next%20steps.%0A%0AThank%20you!";

  return (
    <div>
      {/* ── Dark text block ── */}
      <div className="relative bg-gray-950 overflow-hidden py-14 sm:py-20">
        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
          </>
        )}

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white mb-5"
            style={{
              fontSize: "clamp(1.45rem, 3.5vw, 2.4rem)",
              fontFamily: "Georgia, serif",
              lineHeight: 1.3,
            }}
          >
            First time here for Real Estate Photo Editing?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-gray-400 leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
          >
            Try your first 3 photos for free! Experience our services at no cost and
            discover how we can enhance your photos.
          </motion.p>
        </div>
      </div>

      {/* ── Orange CTA bar ── */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 py-4 text-white hover:text-orange-100 transition-colors"
            style={{
              letterSpacing: "0.15em",
              fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
              fontWeight: 700,
            }}
          >
            GIVE US A TRY FOR FREE{" "}
            <span className="text-lg" aria-hidden>»</span>
          </a>
        </div>
      </div>
    </div>
  );
}
