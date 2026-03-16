/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CheckCircle2,
  XCircle,
  PlayCircle,
  Star,
  BookOpen,
  Settings,
  Zap,
  ShieldCheck,
  Award,
  ChevronDown,
  Volume2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlayingTestimonial, setIsPlayingTestimonial] = useState(false);
  const [isPausedTestimonial, setIsPausedTestimonial] = useState(false);
  const testimonialVideoRef = useRef<HTMLVideoElement>(null);

  const carouselImages = [
    "https://files.catbox.moe/0y7po5.webp",
    "https://files.catbox.moe/lvh5z7.webp",
    "https://files.catbox.moe/8vvm91.webp",
    "https://files.catbox.moe/2czh32.webp",
    "https://files.catbox.moe/fn22bb.webp",
    "https://files.catbox.moe/v38hsw.webp",
    "https://files.catbox.moe/2qewex.webp",
    "https://files.catbox.moe/kf79wv.webp"
  ];
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const nextCarouselImage = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevCarouselImage = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented or interrupted", error);
        });
      }
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Play was prevented or interrupted", error);
          });
        }
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handlePlayTestimonial = () => {
    if (testimonialVideoRef.current) {
      testimonialVideoRef.current.muted = false;
      testimonialVideoRef.current.currentTime = 0;
      const playPromise = testimonialVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented or interrupted", error);
        });
      }
      setIsPlayingTestimonial(true);
      setIsPausedTestimonial(false);
    }
  };

  const togglePlayPauseTestimonial = () => {
    if (testimonialVideoRef.current) {
      if (testimonialVideoRef.current.paused) {
        const playPromise = testimonialVideoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Play was prevented or interrupted", error);
          });
        }
        setIsPausedTestimonial(false);
      } else {
        testimonialVideoRef.current.pause();
        setIsPausedTestimonial(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-8 pb-12 md:pt-12 md:pb-16 text-center">
        {/* Top Banner (Pill) */}
        <div className="flex justify-center mb-6 md:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-red-100 text-red-700 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase"
          >
            <div className="flex items-center justify-center w-5 h-5 bg-red-200 rounded-full shrink-0">
              <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
            </div>
            ATENCIÓN: ELECTRICISTAS Y AYUDANTES
          </motion.div>
        </div>

        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
        >
          Esta misma semana puedes pasar de principiante a experto en{" "}
          <span className="text-blue-600">Variadores de Frecuencia</span>...
        </motion.h1>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-blue-50 border-l-4 border-blue-600 p-3 md:p-4 mb-8 inline-block rounded-r-lg"
        >
          <p className="text-blue-800 font-medium text-sm md:text-base">
            ...y sumar entre <strong>US$ 1,076 y US$ 4,981</strong> a tus ganancias mensuales.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-sm mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] mb-8 border-4 border-slate-800 cursor-pointer"
          onClick={() => {
            if (!isPlaying) {
              handlePlay();
            } else {
              togglePlayPause();
            }
          }}
        >
          <video
            ref={videoRef}
            src="https://files.catbox.moe/l04jop.mp4"
            className="w-full h-full object-cover pointer-events-none"
            playsInline
            autoPlay
            muted={!isPlaying}
            loop={!isPlaying}
          />
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
            >
              <motion.button 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                <PlayCircle className="w-5 h-5" /> Ver con sonido
              </motion.button>
            </div>
          )}
          {isPlaying && isPaused && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
            >
              <PlayCircle className="w-16 h-16 text-white opacity-90" />
            </div>
          )}
        </motion.div>

        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-slate-600 max-w-2xl mx-auto mb-6"
        >
          Sin complicaciones técnicas, no se requiere conocimiento previo. Obtén acceso
          instantáneo a la <strong>guía práctica 100% visual</strong> utilizada por más de 12,000 profesionales en
          toda Latinoamérica.
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-2 mb-12"
        >
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1535090042247-30387644aec5?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
            ].map((src, i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src={src}
                alt="Estudiante"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="font-bold text-slate-900">4.9/5 (12,349 Estudiantes Verificados)</p>
        </motion.div>

        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Muchos electricistas y técnicos pierden oportunidades cada semana por no dominar los variadores de frecuencia.
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-blue-600 font-bold text-xl"
        >
          La buena noticia es que tú puedes cambiar eso HOY.
        </motion.p>
      </section>

      {/* Video Testimonial Section */}
      <section className="bg-slate-50 pb-12 md:pb-16 px-4">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm border border-slate-100"
          >
            {/* Video Container */}
            <div 
              className="relative rounded-2xl overflow-hidden aspect-video mb-6 bg-slate-900 group cursor-pointer"
              onClick={() => {
                if (!isPlayingTestimonial) {
                  handlePlayTestimonial();
                } else {
                  togglePlayPauseTestimonial();
                }
              }}
            >
              <video
                ref={testimonialVideoRef}
                src="https://files.catbox.moe/iy53y8.mp4"
                className="w-full h-full object-cover pointer-events-none"
                playsInline
                autoPlay
                muted={!isPlayingTestimonial}
                loop={!isPlayingTestimonial}
              />
              {!isPlayingTestimonial && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-slate-900 px-5 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg"
                  >
                    <Volume2 className="w-5 h-5 text-blue-600" /> Clic para ver con sonido
                  </motion.button>
                </div>
              )}
              {isPlayingTestimonial && isPausedTestimonial && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
                >
                  <PlayCircle className="w-16 h-16 text-white opacity-90" />
                </div>
              )}
            </div>

            {/* Testimonial Content */}
            <div className="text-center px-2">
              <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                Diogo Luíz - México 🇲🇽
              </h3>
              
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-6">
                TÉCNICO ELECTRICISTA
              </p>
              
              <p className="text-slate-600 italic text-lg leading-relaxed">
                "Ahora puedo realizar mis propios proyectos sin depender de nadie y ganar más."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Antes y Después */}
      <section className="bg-white py-12 md:py-16 border-y border-slate-200 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12"
          >
            Imagina cómo cambiará tu <span className="text-blue-600">futuro profesional</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-100"
            >
              <h3 className="text-red-600 font-bold text-lg md:text-xl mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" /> ANTES
              </h3>
              <ul className="space-y-4">
                {[
                  "Dudas al configurar parámetros.",
                  "Miedo de dañar equipos costosos.",
                  "Pérdida de tiempo y oportunidades.",
                  "Ingresos limitados.",
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 relative"
            >
              <motion.div 
                animate={{ y: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
              >
                TU FUTURO
              </motion.div>
              <h3 className="text-emerald-700 font-bold text-xl mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" /> DESPUÉS
              </h3>
              <ul className="space-y-4">
                {[
                  "Confianza para configurar cualquier variador.",
                  "Comprensión clara de diagramas y manuales.",
                  "Más trabajos, menos errores.",
                  "Ingresos más altos y reconocimiento profesional.",
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Para ti si... */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12"
          >
            Esta guía práctica es <span className="text-emerald-400">para ti si:</span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4"
          >
            {[
              "Tienes dificultades para configurar parámetros de velocidad, torque y rampas.",
              "Eres principiante y quieres aprender sobre inversores de frecuencia.",
              "Quieres ofrecer tus servicios a industrias, condominios y comercios.",
              "Estás cansado de perder servicios por no conocer estos equipos.",
              "Siempre necesitas contactar a otros electricistas para solucionar problemas.",
              "Quieres aumentar tus ganancias.",
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 md:p-5 flex items-center gap-3 md:gap-4 hover:bg-slate-800 transition-colors"
              >
                <div className="bg-emerald-500/20 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                </div>
                <p className="text-slate-300 text-sm md:text-base">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 md:mt-12 text-center flex flex-col items-center gap-8"
          >
            <div className="inline-block border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold text-lg md:text-2xl px-6 py-3 md:px-8 md:py-4 rounded-xl uppercase tracking-wide">
              ¡PERO NO TE PREOCUPES, YA HICIMOS TODO EL TRABAJO POR TI!
            </div>
            <img 
              src="https://files.catbox.moe/8fo1ac.gif" 
              alt="Trabajo hecho por ti" 
              className="w-full max-w-2xl rounded-2xl shadow-2xl border-4 border-slate-800"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16"
          >
            Con esta guía <span className="text-blue-600">vas a poder:</span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-blue-600" />,
                title: "Dominar la teoría y práctica",
                desc: "Explicación clara y completa sobre qué es y cómo funciona un inversor de frecuencia.",
              },
              {
                icon: <Settings className="w-6 h-6 text-blue-600" />,
                title: "Configurar paso a paso",
                desc: "Guía detallada para configurar los modelos CFW300 y CFW500 desde cero.",
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                title: "Interpretar diagramas",
                desc: "Diagramas eléctricos realistas y aplicados (comandos, señalización, multispeed, etc.).",
              },
              {
                icon: <Settings className="w-6 h-6 text-blue-600" />,
                title: "Ajustar parámetros clave",
                desc: "Configuración de velocidad, torque, rampas, frecuencia mínima y máxima.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                title: "Solucionar problemas",
                desc: "Identifica códigos de error, fallas comunes y aprende cómo resetear el equipo.",
              },
              {
                icon: <Award className="w-6 h-6 text-blue-600" />,
                title: "Aumentar tus ingresos",
                desc: "Al dominar los variadores, abrirás la puerta a trabajos industriales mejor pagados.",
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
          >
            Consigue un total de <span className="text-blue-600">más de 170 páginas</span> a todo color con ilustraciones realistas
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-slate-600 mb-8 md:mb-12 text-sm md:text-base"
          >
            Visualiza el contenido interior:
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-100 rounded-2xl md:rounded-3xl p-3 md:p-8 shadow-inner mb-8 md:mb-12 relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white flex items-center justify-center">
              <img
                src={carouselImages[currentCarouselIndex]}
                alt={`Página interior ${currentCarouselIndex + 1}`}
                className="w-full max-h-[85vh] object-contain cursor-pointer"
                onClick={nextCarouselImage}
                referrerPolicy="no-referrer"
              />
              
              {/* Carousel Controls */}
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); prevCarouselImage(); }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 md:p-3 rounded-full shadow-lg transition-all z-20"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); nextCarouselImage(); }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 md:p-3 rounded-full shadow-lg transition-all z-20"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setCurrentCarouselIndex(idx); }}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all shadow-sm ${
                      idx === currentCarouselIndex ? "bg-blue-600 w-6 md:w-8" : "bg-white/80 hover:bg-white"
                    }`}
                    aria-label={`Ir a la imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offer & Bonuses */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 md:mb-12"
          >
            <span className="bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              TIEMPO LIMITADO
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6">
              COMPRE HOY Y CONSIGA <span className="text-blue-400">LOS BONOS:</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12"
          >
            {[
              {
                title: "Simulador Exclusivo + Clase",
                desc: "Accede a un simulador y más de 100 diagramas para practicar, junto con una clase exclusiva.",
                value: "US$ 97,00",
                image: "https://i.imgur.com/vNSeg6K.jpg",
              },
              {
                title: "Tabla de Presupuesto",
                desc: "Una herramienta lista para usar que te ayuda a calcular precios de forma rápida y segura.",
                value: "US$ 57,00",
                image: "https://i.imgur.com/bsQpJfQ.jpg",
              },
              {
                title: "Hoja de cálculo para motores",
                desc: "Optimiza tu tiempo con esta herramienta práctica para dimensionar correctamente motores.",
                value: "US$ 47,00",
                image: "https://i.imgur.com/YenQaCW.jpg",
              },
              {
                title: "20 Modelos de Presupuestos Editables en Canva",
                desc: "Haz que tu negocio luzca profesional desde el primer contacto. Con este pack de 20 plantillas de presupuestos 100% editables en Canva, podrás enviar cotizaciones claras, organizadas y visualmente atractivas en cuestión de minutos.",
                value: "US$ 37,00",
                image: "https://files.catbox.moe/w0ycqd.webp",
              },
              {
                title: "Diagramas bônus exclusivos",
                desc: "que van a llevar tu práctica a otro nivel, contenido que no vas a encontrar por ahí.",
                value: "US$ 47,00",
                image: "https://files.catbox.moe/vlntkc.png",
              },
            ].map((bono, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start text-center sm:text-left transition-colors hover:border-slate-600"
              >
                <div className="w-28 h-28 md:w-36 md:h-36 bg-slate-700 rounded-xl shrink-0 overflow-hidden shadow-lg border border-slate-600/50">
                  <img src={bono.image} alt={bono.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <p className="text-yellow-400 text-xs font-bold uppercase mb-1">BONO 0{i + 1}</p>
                    <h3 className="font-bold text-base md:text-lg leading-tight mb-2">{bono.title}</h3>
                    <p className="text-slate-400 text-xs md:text-sm">{bono.desc}</p>
                  </div>
                  <div className="flex justify-between items-end mt-4 pt-4 border-t border-slate-700/50 sm:border-0 sm:pt-0">
                    <span className="text-slate-500 text-xs md:text-sm line-through">De {bono.value}</span>
                    <span className="text-emerald-400 font-bold text-sm">¡GRATIS HOY!</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certificate */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-blue-900 to-slate-800 border border-blue-500/30 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-16 text-center md:text-left"
          >
            <div className="flex-1">
              <span className="bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                BONO ESPECIAL
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3 md:mb-4">Certificado Profesional Reconocido</h3>
              <p className="text-slate-300 text-sm md:text-base mb-6">
                Al completar la guía, recibirás un certificado digital emitido por una empresa reconocida en el sector eléctrico. Úsalo para demostrar tu conocimiento, destacar frente a otros técnicos y generar más confianza con tus clientes.
              </p>
              <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg font-medium text-xs md:text-sm w-full md:w-auto">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Incluido Gratis con tu compra
              </div>
            </div>
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="w-full sm:w-3/4 md:w-1/2 bg-white p-2 rounded-xl shadow-2xl rotate-0 md:rotate-2 transition-all"
            >
              <img src="https://files.catbox.moe/hv6mql.png" alt="Certificado" className="w-full rounded-lg border border-slate-200" referrerPolicy="no-referrer" />
            </motion.div>
          </motion.div>

          {/* Pricing Summary */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-amber-50 rounded-2xl md:rounded-3xl p-6 md:p-8 text-slate-900"
          >
            <h3 className="text-center font-bold text-slate-500 uppercase tracking-wider text-sm mb-6">
              TODO ESTO COSTARÍA POR SEPARADO:
            </h3>
            <div className="space-y-3 mb-6">
              {[
                { name: "Guía Práctica:", price: "$97,00" },
                { name: "Simulador + Clase:", price: "$97,00" },
                { name: "Tabla Presupuesto:", price: "$57,00" },
                { name: "Hoja Motores:", price: "$47,00" },
                { name: "20 modelos canva:", price: "$37,00" },
                { name: "Diagramas bonus:", price: "$47,00" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-slate-600 border-b border-amber-200/50 pb-2">
                  <span>{item.name}</span>
                  <span className="line-through">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl font-medium mb-2">Total: <span className="text-red-500 font-bold line-through">US$ 382,00</span></p>
              <motion.p 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-emerald-600 font-bold text-lg"
              >
                ¡Hoy te lo llevas todo GRATIS con la guía!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-200 p-6 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-blue-500"></div>
            
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight mb-6 md:mb-8">
              OFERTA PROMOCIONAL DE LANZAMIENTO
            </h2>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mb-6 md:mb-8"
            >
              <img src="https://files.catbox.moe/qpf4uv.webp" alt="Mockup del producto" className="w-full max-w-lg mx-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
            </motion.div>

            <ul className="text-left space-y-3 mb-8 md:mb-10 max-w-md mx-auto text-sm md:text-base">
              {[
                "Guía completa de más de 160 páginas con ilustraciones a color",
                "Simulador y más de 100 diagramas para practicar",
                "Explicación clara y completa sobre qué es y cómo funciona un inversor de frecuencia",
                "Guía paso a paso para configurar los modelos CFW300 y CFW500",
                "Diagramas eléctricos realistas y aplicados (comandos, señalización, multispeed, etc.)",
                "Configuración de parámetros: velocidad, torque, rampas, frecuencia mínima y máxima",
                "Solución de problemas comunes: códigos de error, fallas y cómo resetear",
                "Acceso inmediato y de por vida al material digital",
                "Certificado profesional de una empresa reconocida",
                "y mucho más..."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 md:gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="border-t border-slate-200 pt-6 md:pt-8 mb-6 md:mb-8">
              <p className="text-slate-500 mb-1 md:mb-2 text-sm md:text-base">Precio Regular por Todo:</p>
              <p className="text-xl md:text-2xl text-slate-400 line-through font-bold mb-4">US$ 382,00</p>
              
              <motion.div 
                animate={{ boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 20px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 md:p-6 mb-4 md:mb-6"
              >
                <p className="text-emerald-800 font-bold mb-1 md:mb-2 text-sm md:text-base">Precio Especial HOY de Lanzamiento:</p>
                <p className="text-5xl md:text-7xl font-black text-emerald-500 tracking-tighter">
                  US$ 15
                </p>
                <p className="text-xs md:text-sm text-emerald-600 mt-2 font-medium">Pago único • Acceso de por vida</p>
              </motion.div>
            </div>

            <p className="text-red-500 font-bold text-xs md:text-sm uppercase tracking-wide mb-6 px-2">
              APROVECHA AHORA: NO ENCONTRARÁS ESTE PRECIO MÁS ADELANTE.
            </p>

            <motion.a 
              id="btn-buy-main"
              href="https://pay.hotmart.com/E100716246N?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-2xl font-black py-4 px-4 md:py-5 md:px-8 rounded-2xl shadow-lg shadow-emerald-500/30"
            >
              ¡SÍ! QUIERO MEJORAR MI CARRERA
              <span className="block text-xs md:text-sm font-medium mt-1 opacity-90 pointer-events-none">Acceso Inmediato • Garantía de 30 Días</span>
            </motion.a>

            <div className="mt-4 flex justify-center w-full">
              <img src="https://i.imgur.com/g2fz2Sh.png" alt="Métodos de pago seguros" className="w-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <p className="text-[10px] md:text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" /> Pago Seguro | ¡Pago único! No es una suscripción.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left"
        >
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="w-32 md:w-48 shrink-0"
          >
            <img src="https://files.catbox.moe/mlswsp.png" alt="Garantía 30 días" className="w-full drop-shadow-xl rounded-full" referrerPolicy="no-referrer" />
          </motion.div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">PRUÉBALO DURANTE 30 DÍAS</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              No quiero que te sientas presionado. Asumimos todo el riesgo por usted. ¡TIENES 30 DÍAS PARA PROBAR NUESTRA GUÍA! Si no te gusta, te devolvemos el 100% de tu dinero sin hacer preguntas.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4"
          >
            {[
              {
                q: "¿Necesito tener experiencia previa?",
                a: "No. Esta guía fue creada desde cero para que cualquier persona pueda aprender, incluso si nunca ha visto un diagrama o un variador de frecuencia antes."
              },
              {
                q: "¿Cuánto tiempo tengo acceso al material?",
                a: "El acceso es de por vida. Podrás consultar la guía, los bonos y las futuras actualizaciones siempre que lo necesites."
              },
              {
                q: "¿En qué formato está la guía?",
                a: "La guía y los bonos son 100% digitales. Podrás descargarlos en formato PDF y acceder a ellos desde tu celular, tablet o computadora."
              },
              {
                q: "¿Cómo recibo el material?",
                a: "Inmediatamente después de confirmar tu pago, recibirás un correo electrónico de Hotmart con tus datos de acceso a la plataforma donde está todo el contenido."
              }
            ].map((faq, i) => (
              <motion.details 
                key={i} 
                variants={fadeInUp}
                className="group bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
              >
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 md:p-5 hover:bg-slate-700/50 transition-colors text-sm md:text-base">
                  <span className="pr-4">{faq.q}</span>
                  <span className="transition group-open:rotate-180 shrink-0">
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </span>
                </summary>
                <div className="text-slate-300 p-4 md:p-5 pt-0 border-t border-slate-700 mt-2 text-sm md:text-base">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 md:mt-12 text-center"
          >
            <motion.a 
              id="btn-buy-footer"
              href="https://pay.hotmart.com/E100716246N?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl shadow-lg"
            >
              ¡SÍ! QUIERO MEJORAR MI CARRERA
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4">
          <img src="https://files.catbox.moe/jt400x.webp" alt="Energia Rentable Logo" className="h-16 md:h-20 mx-auto object-contain mb-6" referrerPolicy="no-referrer" />
          <p className="font-bold text-slate-400 mb-2">ENERGÍA RENTABLE</p>
          <p className="mb-6">© Energía Rentable - Todos los derechos reservados</p>
          <div className="flex justify-center gap-6">
            <a href="#" id="link-privacy" className="hover:text-slate-300 transition-colors">Política de privacidad</a>
            <a href="#" id="link-terms" className="hover:text-slate-300 transition-colors">Condiciones de uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

