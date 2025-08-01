'use client';

import { useEffect, useState } from 'react';

export default function Parcours() {
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

    const element = document.getElementById('parcours');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const parcoursData = [
    {
      year: "2019",
      title: "Collège François Truffaut",
      description: "Brevet Mention Bien",
      image: "Collège François Truffaut"
    },
    {
      year: "2022",
      title: "Lycée Mazeray-Gabriel",
      description: "Baccalauréat Général - Numérique Sciences Informatiques (NSI)",
      image: "Lycée Mazeray-Gabriel"
    },
    {
      year: "2025",
      title: "BTS Services Informatiques aux Organisations",
      description: "en Alternance",
      image: "BTS SIO SISR"
    }
  ];

  return (
    <section id="parcours" className="section bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="section-title text-blue-800">
            MON PARCOURS DE FORMATION
          </h2>
          <p className="section-subtitle text-gray-600">
            depuis l&apos;année 2019
          </p>
        </div>

        {/* Three columns layout */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {parcoursData.map((item, index) => (
            <div key={index} className="text-center">
              {/* Image placeholder */}
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
                  {item.image}
                </div>
              </div>
              
              {/* Green card with text */}
              <div className="green-card text-white">
                <div className="text-lg font-semibold mb-2">
                  {item.title} ({item.year})
                </div>
                <div className="text-sm mb-2">
                  {item.description}
                </div>
                <div className="text-xs opacity-90">
                  {item.image}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 