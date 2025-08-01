import Link from 'next/link';

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
                <p>Cette politique de confidentialité décrit comment Dan LAINE collecte, utilise et protège vos informations personnelles lorsque vous utilisez ce portfolio.</p>
                <p>Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles de manière transparente et responsable.</p>
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
              <div className="space-y-2">
                <p><strong>Important :</strong> Ce site ne collecte aucune donnée personnelle automatiquement.</p>
                <p>Les seules données que nous pouvons recevoir sont celles que vous choisissez de nous envoyer via le formulaire de contact :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nom</li>
                  <li>Adresse email</li>
                  <li>Sujet du message</li>
                  <li>Contenu du message</li>
                </ul>
                <p>Ces données ne sont collectées que si vous décidez de nous contacter.</p>
              </div>
            </section>

            {/* Finalité */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Finalité du Traitement</h2>
              <div className="space-y-2">
                <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Répondre à votre demande de contact</li>
                  <li>Traiter votre candidature ou demande d&apos;information</li>
                  <li>Maintenir une relation professionnelle</li>
                </ul>
                <p>Aucune donnée n&apos;est utilisée à des fins commerciales ou marketing.</p>
              </div>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Base Légale</h2>
              <div className="space-y-2">
                <p>Le traitement de vos données personnelles est fondé sur :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Votre consentement explicite lors de l&apos;envoi du formulaire</li>
                  <li>L&apos;intérêt légitime pour répondre à votre demande</li>
                </ul>
              </div>
            </section>

            {/* Conservation */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Conservation des Données</h2>
              <div className="space-y-2">
                <p>Vos données personnelles sont conservées :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Le temps nécessaire pour traiter votre demande</li>
                  <li>Maximum 2 ans après le dernier contact</li>
                  <li>Ou jusqu&apos;à votre demande de suppression</li>
                </ul>
              </div>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Destinataires des Données</h2>
              <div className="space-y-2">
                <p>Vos données ne sont accessibles qu&apos;à :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Dan LAINE (responsable du traitement)</li>
                  <li>Formspree (service de traitement des formulaires)</li>
                </ul>
                <p>Aucune donnée n&apos;est vendue, louée ou partagée avec des tiers.</p>
              </div>
            </section>

            {/* Droits utilisateur */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Vos Droits</h2>
              <div className="space-y-2">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Droit d&apos;accès :</strong> Connaître les données vous concernant</li>
                  <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                  <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données</li>
                  <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement</li>
                </ul>
              </div>
            </section>

            {/* Exercice des droits */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Exercice de vos Droits</h2>
              <div className="space-y-2">
                <p>Pour exercer vos droits, contactez-nous :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
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
                <p>Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Chiffrement des données en transit (HTTPS)</li>
                  <li>Accès restreint aux données</li>
                  <li>Surveillance des accès</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Cookies</h2>
              <div className="space-y-2">
                <p>Ce site n&apos;utilise que des cookies techniques nécessaires au fonctionnement :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Aucun cookie de tracking</li>
                  <li>Aucun cookie publicitaire</li>
                  <li>Aucun cookie de réseaux sociaux</li>
                </ul>
                <p>Pour plus d&apos;informations, consultez notre <Link href="/cookies" className="text-[#1e4d2b] hover:underline">gestion des cookies</Link>.</p>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e4d2b] mb-4">Modifications</h2>
              <div className="space-y-2">
                <p>Cette politique peut être mise à jour. La version la plus récente sera toujours disponible sur cette page.</p>
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