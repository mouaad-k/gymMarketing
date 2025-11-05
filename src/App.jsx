// Gym Marketing  v2 (FR)  Site marketing pour salles de sport marocaines
// Design coloré, moderne et accueillant (Tailwind CSS requis)

export default function App () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-50 text-gray-900 font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow">
              AB
            </div>
            <div>
              <h1 className="text-xl font-bold">Gym Marketing </h1>
              <p className="text-xs text-gray-500 tracking-wide">
                Marketing pour salles de sport marocaines
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
            <a href="#services" className="hover:text-pink-600 transition">
              Services
            </a>
            <a href="#how" className="hover:text-pink-600 transition">
              Processus
            </a>
            <a href="#success" className="hover:text-pink-600 transition">
              Témoignages
            </a>
            <a href="#contact" className="hover:text-pink-600 transition">
              Contact
            </a>
          </nav>
          <div className="md:hidden text-2xl text-pink-600">☰</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Boostez la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
              fidélité et les revenus
            </span>{" "}
            de votre salle de sport
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-md">
            Nous aidons les salles de GYM en France, au Maroc, à Dubaï et en Arabie saoudite à attirer plus de clients et à fidéliser leurs membres. Grâce à nos méthodes puissantes de marketing et de vente, nous aidons les gyms à réduire la perte de clients dès les premiers mois et à assurer une croissance stable et durable.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
            >
              Audit Gratuit
            </a>
            <a
              href="#how"
              className="px-6 py-3 bg-white border border-pink-200 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition"
            >
              Voir le Processus
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full opacity-30 blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1200&auto=format&fit=crop"
            alt="Salle de sport au Maroc"
            className="rounded-2xl shadow-xl relative z-10"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto ">
          <h3 className="text-4xl font-bold text-center text-pink-600 mb-18">Nos Services</h3>
          

          <div className="grid md:grid-cols-1 gap-8">
            {[
        {
          title: "Boost de croissance",
          desc: "On booste tes clients pour augmenter ton revenu, et on supprime la perte de clients pendant les premiers mois.",
        },
        {
          title: "Fidélisation intelligente",
          desc: "On utilise les meilleures méthodes de marketing pour faire revenir les clients qui ont abandonné pendant les premiers mois et les transformer en membres fidèles.",
        },
        {
          title: "Visibilité & expansion",
          desc: "On génère des publicités puissantes et on t’aide à attirer des clients et athlètes de grande qualité pour être prêts à participer aux championnats et à faire passer ton gym au niveau mondial.",
        },
      ].map((s, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-pink-50 border border-pink-100 rounded-2xl p-8  shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <h4 className="font-semibold text-xl mb-2 text-gray-800">
                  {s.title}
                </h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* About Section */}
<section id="about" className="py-20 px-6 bg-gradient-to-br from-pink-50 to-orange-100">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="relative">
      <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"></div>
      <img
        src="./ce.jpeg"
        alt="Bity Celia – Experte en marketing fitness"
        className="rounded-2xl shadow-xl relative z-10"
      />
    </div>

    <div className="text-left">
      <h4 className="text-2xl font-semibold text-gray-800 mb-2">Bity Celia</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Je suis <strong>Bity Celia</strong>, une marketeuse spécialisée dans le domaine du fitness et fondatrice d’une
        agence de marketing dédiée aux salles de sport. J’aide les gyms à attirer plus de clients, augmenter leurs
        revenus et renforcer leur notoriété.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Forte de plusieurs années d’expérience dans l’industrie du fitness, j’ai développé des stratégies digitales
        innovantes  <em>publicité ciblée, branding, automatisation, et fidélisation</em>  tout en ayant moi-même
        créé et géré des salles de sport en France. Cette double expérience m’offre une compréhension réelle des
        défis du terrain.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Aujourd’hui, j’accompagne les gyms à se développer plus vite, à attirer une clientèle de qualité, à recruter
        des athlètes motivés et à faire grandir leur business au niveau national et international.  
        <span className="block mt-4 font-semibold text-pink-600">
          Ma mission : transformer chaque gym en success story.
        </span>
      </p>
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-20 px-6 bg-gradient-to-br from-pink-50 to-orange-100">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2  gap-12 items-center">
    

    <div className="text-left">
      <h4 className="text-2xl font-semibold text-gray-800 mb-2">Abdel</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Je m’appelle <strong>Abdel</strong>, et je suis le CEO de <strong>Gym Marketing</strong>. 
        Fort d’une solide expérience dans le domaine du business et du marketing, 
        j’ai fondé et développé avec succès plusieurs entreprises au Royaume-Uni et en France.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cette expérience m’a permis d’acquérir une <em>vision stratégique et internationale</em> du développement d’entreprise,
        tout en comprenant profondément les besoins spécifiques du secteur du fitness.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Aujourd’hui, ma mission est d’aider les salles de sport et les entrepreneurs du fitness à renforcer leur visibilité,
        attirer une clientèle de qualité et faire passer leur marque à un niveau supérieur — en France, au Maroc, 
        et à l’international.
        <span className="block mt-4 font-semibold text-pink-600">
          Ma vision : créer une nouvelle génération de gyms performants et reconnus mondialement.
        </span>
      </p>
    </div>

    <div className="relative">
      <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"></div>
      <img
        src="./ab.jpeg"
        alt="Abdel – CEO de Gym Marketing"
        className="rounded-2xl shadow-xl relative z-10"
      />
    </div>
  </div>
</section>

<section id="reviews" className="py-20 px-6 bg-gradient-to-br from-pink-50 to-orange-100">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-4xl font-bold text-pink-600 mb-6">Nos clients</h3>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "FITNESS PARK PARIS",
          image: "a.jpeg",
          rating: 4,
          location: "Casaanca, Maroc",
          phone: "+33 1 85 65 19 03",
          google: "https://maps.app.goo.gl/Yt5bs1whYTezUBvM6",
        },
        {
          name: "RITM La Motte-Picquet",
          image: "b.jpeg",
          rating: 5,
          location: "Marrakech, Maroc",
          phone: "+33 1 53 58 38 00",
          google: "https://maps.app.goo.gl/p9gGjEMRWp8tM8Qw8",
        },
        {
          name: "Basic-Fit NANTES",
          image: "c.jpeg",
          rating: 4,
          location: "Rabat, Maroc",
          phone: "+33 1 59 20 24 20",
          google: "https://maps.app.goo.gl/Fmw5zo4ZjtGWaN28A",
        },
      ].map((review, i) => (
        <div
          key={i}
          className="bg-white/80 border border-pink-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={review.image}
              alt={review.name}
              className="w-72 h-52 rounded-xl object-cover mb-4 shadow-md"
            />
            <h4 className="text-xl font-semibold text-gray-800 mb-1">{review.name}</h4>
            <div className="flex justify-center mb-2">
              {Array(review.rating)
                .fill("⭐")
                .map((star, j) => (
                  <span key={j} className="text-yellow-400 text-lg">{star}</span>
                ))}
            </div>
            <a
              href={review.google}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 text-sm font-medium hover:underline mb-2"
            >
              Voir sur Google
            </a>
            <a
              href={`tel:${review.phone.replace(/\s/g, "")}`}
              className="text-gray-700 text-sm hover:text-pink-600"
            >
              📞 {review.phone}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-gradient-to-br from-orange-50 to-pink-100 text-center">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-4xl font-bold text-pink-600 mb-6">Contact</h3>
    <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
      Pour toute demande d'information, de collaboration ou pour booster ton gym dès aujourd'hui,
      contacte-nous directement :
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg font-medium">
      <div className="flex items-center gap-3">
        <span className="text-pink-600 text-2xl">📞</span>
        <a href="tel:+212600000000" className="hover:text-pink-600 transition">
          +212 6 00 00 00 00
        </a>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-pink-600 text-2xl">✉️</span>
        <a href="mailto:contact@gymmarketing.ma" className="hover:text-pink-600 transition">
          contact@gymmarketing.ma
        </a>
      </div>
    </div>

    <div className="mt-10 text-gray-600 text-sm">
      <p>Basé au Maroc 🇲🇦 — Disponible pour les projets en France et à l'international</p>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-600 bg-white border-t border-pink-100">
        <div>© {new Date().getFullYear()} Gym Marketing   Créé avec ❤️ au Maroc</div>
        <div className="mt-2 text-pink-500 font-medium">
          Propulser le fitness marocain avec créativité
        </div>
      </footer>
    </div>
  );
}
