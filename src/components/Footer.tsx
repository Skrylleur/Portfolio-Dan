'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
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

    const element = document.getElementById('footer');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[#1e4d2b]">Dan LAINE</h3>
            <p className="text-gray-300 mb-4">
              Apprenti Technicien Informatique en recherche d&apos;alternance
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 dan.laine.contact@gmail.com</p>
              <p>📱 07 49 17 43 59</p>
              <p>📍 Caen, Normandie</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1e4d2b]">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="#parcours" className="text-gray-300 hover:text-white transition-colors">Formation</Link></li>
              <li><Link href="#alternance" className="text-gray-300 hover:text-white transition-colors">Expérience</Link></li>
              <li><Link href="#projets" className="text-gray-300 hover:text-white transition-colors">Projets</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1e4d2b]">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">Gestion des cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom section with legal info */}
        <div className={`text-center transition-all duration-500 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            
            {/* Copyright */}
            <div>
              <p>&copy; 2025 Dan LAINE. Tous droits réservés.</p>
            </div>

            {/* Legal status */}
            <div>
              <p>Portfolio personnel - Recherche d&apos;alternance</p>
            </div>

            {/* Technical info */}
            <div>
              <p>Développé avec Next.js et Tailwind CSS</p>
            </div>
          </div>

          {/* Additional legal notices */}
          <div className="mt-6 text-xs text-gray-500 space-y-1">
            <p>
              Ce site est un portfolio personnel destiné à la recherche d&apos;emploi. 
              Les informations présentées sont exactes au moment de leur publication.
            </p>
            <p>
              Hébergement : Netlify Inc. - 2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis
            </p>
            <p>
              Conformité RGPD : Aucune donnée personnelle n&apos;est collectée sur ce site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 