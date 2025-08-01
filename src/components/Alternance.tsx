'use client';

import { useEffect, useState } from 'react';

export default function Alternance() {
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

    const element = document.getElementById('alternance');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const experiencesData = [
    {
      year: "2020",
      title: "Stage dans le service Informatique",
      location: "Mairie d'Argentan",
      description: "Assistance aux structures de la ville, montage et configuration de postes de travail, support technique pour les équipements et utilisateurs dans différents services de la ville",
      type: "Stage"
    },
    {
      year: "2023-2025",
      title: "Apprenti Technicien Informatique",
      location: "Partélios Habitat",
      description: "Gestion du stock et du parc informatique, support et assistance utilisateurs, mise en place de projets (MDT/WDS, WSUS), administration Active Directory, création de procédures et documentation",
      type: "Alternance"
    }
  ];

  return (
    <section id="alternance" className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="section-title text-blue-800">
            MON PARCOURS PROFESSIONNEL
          </h2>
        </div>

        {/* Experiences */}
        <div className={`space-y-8 transition-all duration-500 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {experiencesData.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center mb-2">
                    <span className="inline-block bg-[#1e4d2b] text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      {experience.type}
                    </span>
                    <span className="text-gray-600 font-medium">{experience.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-[#1e4d2b] font-semibold">
                    {experience.location}
                  </p>
                </div>
                
                {/* Logo for Partélios */}
                {experience.location === "Partélios Habitat" && (
                  <div className="w-48 h-24 bg-[#1e4d2b] rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-1">P</div>
                      <div className="text-sm font-semibold">Partélios</div>
                      <div className="text-xs">Habitat</div>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {experience.description}
              </p>
              
              {experience.location === "Partélios Habitat" && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Compétences développées :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#1e4d2b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Gestion du stock et du parc informatique (ordinateurs, téléphones, périphériques)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#1e4d2b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Support et assistance utilisateurs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#1e4d2b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mise en place de projets (MDT/WDS, WSUS)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#1e4d2b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Installation et gestion du service GLPI sur machine virtuelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#1e4d2b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Administration de l&apos;Active Directory (création d&apos;utilisateurs, gestion des permissions)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#1e4d2b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Création de procédures et documentation pour les utilisateurs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#1e4d2b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Mise en place de GPO</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 transition-all duration-500 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-[#1e4d2b] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Prêt à m&apos;accueillir dans votre équipe ?</h3>
            <p className="text-lg mb-6">
              Mon expérience en alternance m&apos;a permis de développer des compétences techniques solides. 
              Je suis prêt à mettre mon savoir-faire au service de votre entreprise.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-[#1e4d2b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 