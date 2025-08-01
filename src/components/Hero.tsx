'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="accueil" className="hero-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Profile picture */}
        <div className="mb-8">
          <div className={`w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden transition-all duration-500 ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <Image
              src="/Profil.jpg"
              alt="Dan LAINE"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <div className={`mb-8 transition-all duration-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-wide">
            LAINE DAN
          </h1>
        </div>

        {/* Message de recherche d'alternance */}
        <div className={`mb-8 transition-all duration-500 delay-200 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <p className="text-2xl font-bold mb-4">Je recherche une alternance</p>
            <p className="text-xl opacity-90 mb-4">
              Et si c&apos;était votre occasion ?
            </p>
            <p className="text-lg opacity-75 mb-4">
              Licence STS Sécurité des Réseaux et Cybersécurité
            </p>
            <p className="text-sm opacity-75">
              Début de formation en Septembre 2025 - Caen, Normandie
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a
            href="/cv-dan-laine.pdf"
            target="_blank"
            className="btn btn-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200"
          >
            Découvrir mon CV
          </a>
          
          <a
            href="#contact"
            className="btn btn-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200"
          >
            Me contacter maintenant
          </a>
        </div>
      </div>
    </section>
  );
} 