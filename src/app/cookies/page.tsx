export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Gestion des Cookies</h1>
          
          <div className="space-y-8 text-gray-700">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <div className="space-y-2">
                <p>Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies permettent au site de se souvenir de vos actions et préférences.</p>
              </div>
            </section>

            {/* Types de cookies utilisés */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Types de Cookies Utilisés</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies Techniques (Nécessaires)</h3>
                  <p>Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Cookies de session pour la navigation</li>
                    <li>Cookies de sécurité</li>
                    <li>Cookies de préférences techniques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Aucun Cookie de Tracking</h3>
                  <p>Ce site n&apos;utilise pas de cookies de tracking, d&apos;analyse ou de publicité.</p>
                </div>
              </div>
            </section>

            {/* Cookies tiers */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Cookies Tiers</h2>
              <div className="space-y-2">
                <p>Ce site n&apos;utilise pas de cookies tiers. Aucun service externe n&apos;est intégré qui pourrait placer des cookies sur votre appareil.</p>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Durée de Conservation</h2>
              <div className="space-y-2">
                <p>Les cookies techniques sont conservés :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Cookies de session</strong> : jusqu&apos;à la fermeture du navigateur</li>
                  <li><strong>Cookies de préférences</strong> : 1 an maximum</li>
                </ul>
              </div>
            </section>

            {/* Gestion des cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Comment Gérer les Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Via votre navigateur</h3>
                  <p>Vous pouvez configurer votre navigateur pour :</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Accepter ou refuser tous les cookies</li>
                    <li>Être informé quand un cookie est déposé</li>
                    <li>Supprimer les cookies existants</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Instructions par navigateur</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Chrome</h4>
                      <p className="text-sm">Paramètres → Confidentialité et sécurité → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Firefox</h4>
                      <p className="text-sm">Options → Vie privée et sécurité → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Safari</h4>
                      <p className="text-sm">Préférences → Confidentialité → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Edge</h4>
                      <p className="text-sm">Paramètres → Cookies et autorisations de site</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Impact de la désactivation */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Impact de la Désactivation</h2>
              <div className="space-y-2">
                <p>Si vous désactivez les cookies techniques :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Certaines fonctionnalités du site peuvent ne pas fonctionner correctement</li>
                  <li>Vos préférences ne seront pas sauvegardées</li>
                  <li>La navigation peut être moins fluide</li>
                </ul>
              </div>
            </section>

            {/* Conformité RGPD */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Conformité RGPD</h2>
              <div className="space-y-2">
                <p>Notre utilisation des cookies est conforme au Règlement Général sur la Protection des Données (RGPD) :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Transparence sur l&apos;utilisation des cookies</li>
                  <li>Consentement éclairé (si applicable)</li>
                  <li>Droit de retrait du consentement</li>
                  <li>Minimisation des données collectées</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Questions sur les Cookies</h2>
              <div className="space-y-2">
                <p>Pour toute question concernant l&apos;utilisation des cookies sur ce site, contactez-nous :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Par email : dan.laine.contact@gmail.com</li>
                  <li>Par téléphone : 07 49 17 43 59</li>
                </ul>
              </div>
            </section>

            {/* Mise à jour */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Mise à Jour</h2>
              <div className="space-y-2">
                <p>Cette page peut être mise à jour pour refléter les changements dans notre utilisation des cookies.</p>
                <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              </div>
            </section>

          </div>

          {/* Retour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/" 
              className="inline-flex items-center text-[#1e4d2b] hover:underline"
            >
              ← Retour à l&apos;accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 