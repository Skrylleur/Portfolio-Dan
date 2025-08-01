export default function Veille() {
  return (
    <section id="veille" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comment j'effectue ma veille technologique
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Découvrez mes méthodes pour rester à jour avec les dernières innovations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Flipboard Section */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Flipboard
                </h3>
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  Plateforme de veille technologique
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                L'intelligence artificielle évolue rapidement, et <span className="font-semibold text-red-600 dark:text-red-400">Flipboard</span> m'aide à centraliser les actualités, analyses et découvertes liées à l'IA dans un espace personnalisé et facile à parcourir.
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">
                  Avantages de Flipboard :
                </h4>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Centralisation des sources d'information
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Interface personnalisée et intuitive
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mise à jour en temps réel
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Partage facile des articles intéressants
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 p-8 rounded-3xl shadow-2xl">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-lg mr-3"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">Flipboard</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">12:34</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      Nouvelles menaces en cybersécurité
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      Découvrez les dernières techniques d'attaque...
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      IA et sécurité des réseaux
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      Comment l'IA révolutionne la protection...
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      Tendances cybersécurité 2025
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      Les technologies à surveiller cette année...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional veille methods */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Mes Méthodes de Veille
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Sources Diversifiées</h4>
                <p className="text-blue-100 text-sm">
                  Blogs techniques, podcasts, webinaires et conférences
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Veille Quotidienne</h4>
                <p className="text-blue-100 text-sm">
                  Consultation régulière des actualités et tendances
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Analyse et Partage</h4>
                <p className="text-blue-100 text-sm">
                  Synthèse et partage des informations pertinentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 