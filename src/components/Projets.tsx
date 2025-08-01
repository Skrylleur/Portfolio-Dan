'use client';

import { useEffect, useState } from 'react';

export default function Projets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projets');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projetsData = [
    {
      number: "1",
      title: "Réalisation professionnelle en cours de formation",
      description: "Projet de mise en place d'un système de sauvegarde automatisé",
      status: "Terminé"
    },
    {
      number: "2",
      title: "Réalisation professionnelle en cours de 1ère année",
      description: "Migration d'un parc informatique vers Windows 11",
      status: "Terminé"
    },
    {
      number: "3",
      title: "Réalisation professionnelle en cours de 2ème année",
      description: "Déploiement d'une solution de cybersécurité",
      status: "Terminé"
    }
  ];

  return (
    <section id="projets" className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="section-title text-blue-800">
            MES PROJETS
          </h2>
        </div>

        {/* Three white cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {projetsData.map((projet, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#1e4d2b] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{projet.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {projet.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {projet.description}
              </p>
              <div className="inline-block bg-[#1e4d2b] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {projet.status}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 transition-all duration-500 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mon prochain projet ?</h3>
            <p className="text-lg text-gray-700 mb-6">
              J&apos;ai terminé mes projets de formation et je suis prêt pour de nouveaux défis.
              <br />
              <span className="font-semibold text-[#1e4d2b]">Et si votre entreprise était ma prochaine aventure ?</span>
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#1e4d2b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d5a3d] transition-colors duration-200"
            >
              Parlons de vos projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 