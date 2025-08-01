export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-gray-700">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Introduction</h2>
              <div className="space-y-2">
                <p>Cette politique de confidentialité décrit comment Dan LAINE collecte, utilise et protège vos informations personnelles lorsque vous visitez ce portfolio.</p>
                <p>Nous nous engageons à protéger votre vie privée et à être transparents sur nos pratiques de collecte de données.</p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Responsable du Traitement</h2>
              <div className="space-y-2">
                <p><strong>Nom :</strong> Dan LAINE</p>
                <p><strong>Adresse :</strong> Caen, Normandie, France</p>
                <p><strong>Email :</strong> dan.laine.contact@gmail.com</p>
                <p><strong>Téléphone :</strong> 07 49 17 43 59</p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Données Collectées</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Données de navigation</h3>
                  <p>Lors de votre visite sur ce site, nous ne collectons aucune donnée personnelle. Aucun cookie de tracking n&apos;est utilisé.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Formulaire de contact</h3>
                  <p>Si vous utilisez le formulaire de contact, les données suivantes peuvent être collectées :</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Nom</li>
                    <li>Adresse email</li>
                    <li>Message</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalité du traitement */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Finalité du Traitement</h2>
              <div className="space-y-2">
                <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Répondre à votre demande de contact</li>
                  <li>Échanger concernant une opportunité d&apos;alternance</li>
                  <li>Améliorer le service proposé</li>
                </ul>
              </div>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Base Légale</h2>
              <div className="space-y-2">
                <p>Le traitement de vos données est fondé sur :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>L&apos;intérêt légitime</strong> : pour répondre à vos demandes de contact</li>
                  <li><strong>Le consentement</strong> : lorsque vous soumettez volontairement le formulaire</li>
                </ul>
              </div>
            </section>

            {/* Conservation des données */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Conservation des Données</h2>
              <div className="space-y-2">
                <p>Vos données personnelles sont conservées :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>3 ans maximum</strong> après le dernier contact</li>
                  <li>Ou jusqu&apos;à votre demande de suppression</li>
                </ul>
              </div>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Destinataires des Données</h2>
              <div className="space-y-2">
                <p>Vos données ne sont partagées qu&apos;avec :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Dan LAINE (responsable du traitement)</li>
                  <li>L&apos;hébergeur Netlify (données techniques uniquement)</li>
                </ul>
                <p>Aucune donnée n&apos;est vendue, louée ou partagée avec des tiers à des fins commerciales.</p>
              </div>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Vos Droits</h2>
              <div className="space-y-2">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Droit d&apos;accès</strong> : connaître les données vous concernant</li>
                  <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                  <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité</strong> : récupérer vos données</li>
                  <li><strong>Droit d&apos;opposition</strong> : refuser le traitement</li>
                </ul>
              </div>
            </section>

            {/* Exercer vos droits */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Exercer Vos Droits</h2>
              <div className="space-y-2">
                <p>Pour exercer vos droits, contactez-nous :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Par email : dan.laine.contact@gmail.com</li>
                  <li>Par téléphone : 07 49 17 43 59</li>
                </ul>
                <p>Nous répondrons dans un délai maximum de 30 jours.</p>
              </div>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Sécurité</h2>
              <div className="space-y-2">
                <p>Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre :</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>L&apos;accès non autorisé</li>
                  <li>La divulgation accidentelle</li>
                  <li>La perte ou destruction</li>
                  <li>L&apos;altération</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Cookies</h2>
              <div className="space-y-2">
                <p>Ce site n&apos;utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques peuvent être utilisés pour le bon fonctionnement du site.</p>
                <p>Pour plus d&apos;informations, consultez notre <a href="/cookies" className="text-[#1e4d2b] hover:underline">page de gestion des cookies</a>.</p>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Modifications</h2>
              <div className="space-y-2">
                <p>Cette politique de confidentialité peut être mise à jour. La version la plus récente sera toujours disponible sur cette page.</p>
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