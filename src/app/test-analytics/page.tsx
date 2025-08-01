'use client';

import { useEffect } from 'react';

export default function TestAnalytics() {
  useEffect(() => {
    // Test Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('✅ Google Analytics est chargé !');
      console.log('ID de suivi:', 'G-L71R55G845');
      
      // Test d'événement
      window.gtag('event', 'test_event', {
        event_category: 'test',
        event_label: 'page_test_analytics'
      });
      
      console.log('✅ Événement de test envoyé !');
    } else {
      console.log('❌ Google Analytics non détecté');
    }
  }, []);

  const testEvent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'button_click', {
        event_category: 'test',
        event_label: 'test_button'
      });
      alert('Événement envoyé ! Vérifiez la console pour les détails.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Test Google Analytics</h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Instructions de Test</h2>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Ouvrez la console du navigateur (F12)</li>
                <li>Vérifiez les messages de log</li>
                <li>Cliquez sur le bouton de test ci-dessous</li>
                <li>Vérifiez Google Analytics en temps réel</li>
              </ol>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-green-800 mb-2">Test Manuel</h2>
              <button 
                onClick={testEvent}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Tester un Événement
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">Vérifications</h2>
              <ul className="list-disc list-inside space-y-2 text-yellow-700">
                <li>Console : Messages de confirmation</li>
                <li>Réseau : Requêtes vers googletagmanager.com</li>
                <li>Google Analytics : Événements en temps réel</li>
                <li>Cookies : _ga, _gid, _gat présents</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-purple-800 mb-2">Liens Utiles</h2>
              <div className="space-y-2">
                <a 
                  href="https://analytics.google.com/analytics/web/#/p407372871/reports/intelligenthome"
                  target="_blank"
                  className="block text-purple-600 hover:underline"
                >
                  📊 Google Analytics Dashboard
                </a>
                <a 
                  href="https://analytics.google.com/analytics/web/#/p407372871/reports/realtime"
                  target="_blank"
                  className="block text-purple-600 hover:underline"
                >
                  ⏱️ Temps Réel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 