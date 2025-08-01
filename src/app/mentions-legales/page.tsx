export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="space-y-8 text-gray-700">
            
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Éditeur du site</h2>
              <div className="space-y-2">
                <p><strong>Nom :</strong> Dan LAINE</p>
                <p><strong>Adresse :</strong> Caen, Normandie, France</p>
                <p><strong>Email :</strong> dan.laine.contact@gmail.com</p>
                <p><strong>Téléphone :</strong> 07 49 17 43 59</p>
                <p><strong>Statut :</strong> Portfolio personnel - Recherche d&apos;alternance</p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Hébergement</h2>
              <div className="space-y-2">
                <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
                <p><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://www.netlify.com" className="text-[#1e4d2b] hover:underline">www.netlify.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Propriété Intellectuelle</h2>
              <div className="space-y-2">
                <p>L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse de l&apos;éditeur.</p>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Responsabilité</h2>
              <div className="space-y-2">
                <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
                <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l&apos;adresse dan.laine.contact@gmail.com.</p>
              </div>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Liens Hypertextes</h2>
              <div className="space-y-2">
                <p>Les liens hypertextes mis en place dans le cadre du présent site web en direction d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Dan LAINE.</p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Cookies</h2>
              <div className="space-y-2">
                <p>Ce site n&apos;utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques peuvent être utilisés pour le bon fonctionnement du site.</p>
                <p>Pour plus d&apos;informations, consultez notre <a href="/politique-confidentialite" className="text-[#1e4d2b] hover:underline">politique de confidentialité</a>.</p>
              </div>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Droit Applicable</h2>
              <div className="space-y-2">
                <p>Tout litige en relation avec l&apos;utilisation du site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Caen.</p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Contact</h2>
              <div className="space-y-2">
                <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Par email : dan.laine.contact@gmail.com</li>
                  <li>Par téléphone : 07 49 17 43 59</li>
                </ul>
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