'use client';

import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [state, handleSubmit] = useForm("xldllqvz");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Si le formulaire a été envoyé avec succès
  if (state.succeeded) {
    return (
      <section id="contact" className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="mb-6">
              <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Message envoyé avec succès !</h2>
            <p className="text-lg text-gray-600 mb-8">
              Merci pour votre message. Je vous répondrai dans les plus brefs délais.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-[#1e4d2b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d5a3d] transition-colors duration-200"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="section-title text-blue-800">
            CONTACT
          </h2>
          <p className="section-subtitle text-gray-600">
            Intéressé par mon profil ? N&apos;hésitez pas à me contacter pour discuter d&apos;une opportunité d&apos;alternance.
          </p>
        </div>

        {/* Contact information */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Contact details */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#1e4d2b] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">07 49 17 43 59</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#1e4d2b] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">dan.laine.contact@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#1e4d2b] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Caen, Normandie</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compétences</h3>
              <div className="space-y-2">
                <p className="text-gray-700">• Administration système</p>
                <p className="text-gray-700">• Gestion de projet</p>
                <p className="text-gray-700">• Support utilisateur</p>
                <p className="text-gray-700">• Langue : Anglais</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Disponibilité</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Alternance disponible dès septembre 2025</p>
                <p className="text-gray-700">Formation : Licence STS Sécurité des Réseaux et Cybersécurité</p>
                <p className="text-gray-700">Zone géographique : Caen et alentours</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e4d2b] focus:border-transparent"
                  placeholder="Votre nom"
                />
                <ValidationError 
                  prefix="Nom" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e4d2b] focus:border-transparent"
                  placeholder="votre@email.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e4d2b] focus:border-transparent"
                  placeholder="Opportunité d'alternance, question..."
                />
                <ValidationError 
                  prefix="Sujet" 
                  field="subject"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e4d2b] focus:border-transparent"
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                  state.submitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#1e4d2b] text-white hover:bg-[#2d5a3d]'
                }`}
              >
                {state.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>

            {/* Alternative directe */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Ou contactez-moi directement :</p>
              <a 
                href="mailto:dan.laine.contact@gmail.com?subject=Contact%20depuis%20le%20portfolio"
                className="inline-block mt-2 text-[#1e4d2b] hover:underline font-medium"
              >
                📧 dan.laine.contact@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 transition-all duration-500 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-[#1e4d2b] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Et si on travaillait ensemble ?</h3>
            <p className="text-lg mb-6">
              Je suis actuellement à la recherche d&apos;une alternance pour ma Licence STS Sécurité des Réseaux et Cybersécurité.
              <br />
              <span className="font-semibold">Votre entreprise pourrait-elle être la bonne ?</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-dan-laine.pdf"
                target="_blank"
                className="inline-block bg-white text-[#1e4d2b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1e4d2b] transition-colors duration-200"
              >
                Me contacter directement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 