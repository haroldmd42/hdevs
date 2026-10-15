import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle, Phone, Sparkles, Loader2 } from 'lucide-react';

export const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    const serviceId = 'service_cckxpxk';
    const templateId = 'template_788qi7o';
    const apiKey = 'r13jvvvYLedIL2Pie';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then((result) => {
        setIsSubmitting(false);
        setStatusMessage({
          type: 'success',
          text: '¡Mensaje enviado con éxito! Me pondré en contacto contigo a la brevedad.',
        });
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => setStatusMessage({ type: '', text: '' }), 6000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('Email error:', error);
        setStatusMessage({
          type: 'error',
          text: 'Hubo un inconveniente al enviar el mensaje. Por favor contáctame vía WhatsApp o LinkedIn.',
        });
      });
  };

  return (
    <section id="contacto" className="py-24 bg-[#1E2023] relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B4A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2D31] border border-[#5A6068]/40 text-xs font-mono text-[#FF6B4A]">
            <Mail className="w-3.5 h-3.5" />
            <span>CANAL DIRECTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F5]">
            Iniciemos un <span className="text-[#FF6B4A]">Proyecto</span> Juntos
          </h2>
          <p className="text-base text-[#D8DADD]/80">
            ¿Tienes un proyecto de desarrollo web, necesitas construir una extensión o requieres estructurar pruebas automatizadas para tu aplicación? Escríbeme y diseñemos la solución ideal.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct info & highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#2B2D31] border border-[#5A6068]/30 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-[#F7F7F5] flex items-center gap-2">
                <span>Información de Contacto</span>
              </h3>

              <p className="text-sm text-[#D8DADD]/80 leading-relaxed">
                Estoy disponible para proyectos de <strong>Desarrollo de Software</strong>, creación de extensiones para navegadores e implementación de pruebas automatizadas con Playwright.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.link/kcceff"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1E2023] border border-[#5A6068]/30 hover:border-[#FF6B4A]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#FF6B4A]/10 text-[#FF6B4A] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#D8DADD]/70 font-mono">WhatsApp Directo</div>
                    <div className="text-sm font-semibold text-[#F7F7F5] group-hover:text-[#FF6B4A] transition-colors">
                      Enviar Mensaje Instantáneo
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/yan-harold-mu%C3%B1oz-dominguez-44a2a6b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1E2023] border border-[#5A6068]/30 hover:border-[#FF6B4A]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#FF6B4A]/10 text-[#FF6B4A] group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-linkedin text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-[#D8DADD]/70 font-mono">LinkedIn Profesional</div>
                    <div className="text-sm font-semibold text-[#F7F7F5] group-hover:text-[#FF6B4A] transition-colors">
                      Harold Muñoz Domínguez
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/haroldmd42"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1E2023] border border-[#5A6068]/30 hover:border-[#FF6B4A]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#FF6B4A]/10 text-[#FF6B4A] group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-github text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-[#D8DADD]/70 font-mono">GitHub</div>
                    <div className="text-sm font-semibold text-[#F7F7F5] group-hover:text-[#FF6B4A] transition-colors">
                      @haroldmd42
                    </div>
                  </div>
                </a>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-xl bg-[#1E2023]/60 border border-[#5A6068]/20 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#FF6B4A] shrink-0" />
                <span className="text-xs text-[#D8DADD]/80">
                  Respuesta garantizada en menos de 24 horas laborables.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Functional EmailJS Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#2B2D31] border border-[#5A6068]/30 shadow-xl">
              
              <h3 className="text-xl font-bold text-[#F7F7F5] mb-2">
                Envíame un Mensaje
              </h3>
              <p className="text-xs sm:text-sm text-[#D8DADD]/70 mb-6">
                Completa el formulario y recibiré tu solicitud directamente en mi correo electrónico.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="username" className="block text-xs font-mono text-[#D8DADD] mb-1.5 font-medium">
                    Nombres y Apellidos *
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3 rounded-xl bg-[#1E2023] border border-[#5A6068]/40 text-[#F7F7F5] placeholder-[#5A6068] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#D8DADD] mb-1.5 font-medium">
                    Correo Electrónico *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Ej. contacto@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#1E2023] border border-[#5A6068]/40 text-[#F7F7F5] placeholder-[#5A6068] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#D8DADD] mb-1.5 font-medium">
                    Mensaje o Detalles del Proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    placeholder="Describe en qué puedo ayudarte (pruebas automatizadas Playwright, desarrollo web, extensión...)"
                    className="w-full px-4 py-3 rounded-xl bg-[#1E2023] border border-[#5A6068]/40 text-[#F7F7F5] placeholder-[#5A6068] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-all text-sm resize-none"
                  />
                </div>

                {/* Status Message Alerts */}
                {statusMessage.text && (
                  <div
                    className={`p-4 rounded-xl flex items-center gap-3 text-sm animate-fadeIn ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-300'
                        : 'bg-rose-950/60 border border-rose-500/50 text-rose-300'
                    }`}
                  >
                    {statusMessage.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#FF6B4A] hover:bg-[#E85837] shadow-lg shadow-[#FF6B4A]/30 transition-all duration-200 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando Mensaje...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
