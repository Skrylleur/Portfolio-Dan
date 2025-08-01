import Link from 'next/link';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Gestion des Cookies</h1>
          
          <div className="space-y-8 text-gray-700">
            
            {/* Qu'est-ce qu'un cookie */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Qu&apos;est-ce qu&apos;un Cookie ?</h2>
              <div className="space-y-2">
                <p>Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences pendant une période donnée.</p>
              </div>
            </section>

            {/* Types de cookies utilisés */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Types de Cookies Utilisés</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies Techniques</h3>
                  <p>Ces cookies sont strictement nécessaires au fonctionnement du site :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Cookies de session pour maintenir votre navigation</li>
                    <li>Cookies de sécurité pour protéger le site</li>
                    <li>Cookies de préférences pour mémoriser vos choix</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Aucun Cookie de Tracking</h3>
                  <p>Ce site n&apos;utilise :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Aucun cookie publicitaire</li>
                    <li>Aucun cookie de réseaux sociaux</li>
                    <li>Aucun cookie d&apos;analyse de trafic</li>
                    <li>Aucun cookie de ciblage</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies tiers */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Cookies Tiers</h2>
              <div className="space-y-2">
                <p>Ce site n&apos;intègre aucun service tiers qui déposerait des cookies sur votre appareil.</p>
                <p>Le formulaire de contact utilise Formspree, mais ce service ne dépose pas de cookies sur votre appareil.</p>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Durée de Conservation</h2>
              <div className="space-y-2">
                <p>Les cookies techniques sont conservés :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Cookies de session :</strong> Jusqu&apos;à la fermeture du navigateur</li>
                  <li><strong>Cookies de préférences :</strong> Maximum 1 an</li>
                  <li><strong>Cookies de sécurité :</strong> Maximum 30 jours</li>
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
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Accepter ou refuser les cookies</li>
                    <li>Être averti avant qu&apos;un cookie soit déposé</li>
                    <li>Supprimer les cookies existants</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Instructions par navigateur</h3>
                  <div className="space-y-2">
                    <p><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies et autres données de sites</p>
                    <p><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies et données de sites</p>
                    <p><strong>Safari :</strong> Préférences → Confidentialité → Cookies et données de sites web</p>
                    <p><strong>Edge :</strong> Paramètres → Cookies et autorisations de sites</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Impact de la désactivation */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Impact de la Désactivation</h2>
              <div className="space-y-2">
                <p>Si vous désactivez les cookies techniques :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Le site continuera de fonctionner normalement</li>
                  <li>Certaines préférences ne seront pas mémorisées</li>
                  <li>Vous devrez peut-être saisir certaines informations à nouveau</li>
                </ul>
                <p>La désactivation des cookies n&apos;affecte pas la fonctionnalité principale du site.</p>
              </div>
            </section>

            {/* Conformité RGPD */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Conformité RGPD</h2>
              <div className="space-y-2">
                <p>Ce site respecte le Règlement Général sur la Protection des Données (RGPD) :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Information claire sur l&apos;utilisation des cookies</li>
                  <li>Consentement explicite pour les cookies non essentiels</li>
                  <li>Possibilité de retirer le consentement à tout moment</li>
                  <li>Durée de conservation limitée</li>
                </ul>
              </div>
            </section>

            {/* Questions */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Questions</h2>
              <div className="space-y-2">
                <p>Si vous avez des questions concernant l&apos;utilisation des cookies sur ce site, contactez-nous :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Par email : dan.laine.contact@gmail.com</li>
                  <li>Par téléphone : 07 49 17 43 59</li>
                </ul>
              </div>
            </section>

            {/* Mises à jour */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Mises à Jour</h2>
              <div className="space-y-2">
                <p>Cette politique de gestion des cookies peut être mise à jour. La version la plus récente sera toujours disponible sur cette page.</p>
                <p>Dernière mise à jour : Janvier 2025</p>
              </div>
            </section>

          </div>

          {/* Retour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-[#1e4d2b] hover:underline"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 