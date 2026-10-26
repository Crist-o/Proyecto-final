"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const guides = [
  {
    icon: "✿",
    title: "Adopción responsable",
    copy: "Todo lo que necesitas saber antes de abrirle las puertas de tu hogar.",
    tone: "pink",
  },
  {
    icon: "♡",
    title: "Cuidados y bienestar",
    copy: "Consejos sencillos para cuidar su salud, sus paseos y su felicidad.",
    tone: "yellow",
  },
  {
    icon: "✦",
    title: "Primeros días en casa",
    copy: "Ayúdale a sentirse en confianza y a encontrar su lugar en la familia.",
    tone: "mint",
  },
];

const dogs = [
  {
    name: "Mila",
    detail: "2 años · juguetona · talla mediana",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
    alt: "Perro de pelaje dorado mirando a la cámara",
    tag: "Dulce exploradora",
    color: "pink",
  },
  {
    name: "Bruno",
    detail: "1 año · tranquilo · talla pequeña",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85",
    alt: "Perro pequeño de pelaje blanco y café",
    tag: "Fan de las siestas",
    color: "yellow",
  },
  {
    name: "Lola",
    detail: "3 años · cariñosa · talla mediana",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85",
    alt: "Perro de pelaje claro disfrutando al aire libre",
    tag: "Amiga para siempre",
    color: "mint",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredDogs = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("es");
    if (!query) return dogs;
    return dogs.filter((dog) =>
      `${dog.name} ${dog.detail} ${dog.tag}`.toLocaleLowerCase("es").includes(query),
    );
  }, [search]);

  function toggleFavorite(name) {
    setFavorites((current) =>
      current.includes(name)
        ? current.filter((favorite) => favorite !== name)
        : [...current, name],
    );
  }

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="header-inner">
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className={`icon-button menu-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span />
            <span />
          </button>
          <a className="brand" href="#" aria-label="Lomo lomitos, inicio">
            <Image src="/logo.svg" alt="" width={54} height={54} />
            <span>
              Lomo <em>lomitos</em>
            </span>
          </a>
          <button
            aria-expanded={searchOpen}
            aria-label={searchOpen ? "Cerrar búsqueda" : "Buscar"}
            className="icon-button search-toggle"
            onClick={() => setSearchOpen(!searchOpen)}
            type="button"
          >
            {searchOpen ? (
              <span className="close-mark" aria-hidden="true">
                ×
              </span>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.5 4.5" />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="menu-panel" aria-label="Navegación principal">
            <a href="#adopta" onClick={() => setMenuOpen(false)}>
              Adopta
            </a>
            <a href="#aprende" onClick={() => setMenuOpen(false)}>
              Aprende
            </a>
            <a href="#historias" onClick={() => setMenuOpen(false)}>
              Historias
            </a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              Contáctanos
            </a>
          </nav>
        )}
        {searchOpen && (
          <form
            className="search-panel"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="visually-hidden" htmlFor="dog-search">
              Buscar lomitos por nombre o característica
            </label>
            <input
              autoFocus
              id="dog-search"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Busca por nombre o personalidad…"
              type="search"
              value={search}
            />
            <span>{filteredDogs.length} lomitos</span>
          </form>
        )}
      </header>

      <main id="contenido">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Un hogar cambia dos vidas</p>
            <h1 id="hero-title">
              El amor tiene
              <br />
              <span>cuatro patas.</span>
            </h1>
            <p className="hero-description">
              Hay un lomito esperando conocerte. Encuentra a tu nuevo mejor
              amigo y empiecen su historia juntos.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#adopta">
                Encuentra a tu lomito <ArrowIcon />
              </a>
              <a className="text-link" href="#aprende">
                ¿Cómo funciona?
              </a>
            </div>
            <div className="happy-note">
              <div className="avatar-stack" aria-hidden="true">
                <span>🐶</span>
                <span>🐕</span>
                <span>🐾</span>
              </div>
              <p>
                <strong>Un montón de colitas felices</strong>
                <br />
                empiezan con una adopción
              </p>
            </div>
          </div>
          <div className="hero-art" aria-label="Un perro feliz listo para encontrar hogar">
            <div className="hero-blob" />
            <div className="sun-doodle" aria-hidden="true">✳</div>
            <div className="heart-doodle" aria-hidden="true">♥</div>
            <Image
              className="hero-dog"
              src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1100&q=90"
              alt="Perro feliz sentado en el pasto"
              width={1100}
              height={1100}
              priority
            />
            <div className="photo-caption">
              <span className="caption-paw" aria-hidden="true">🐾</span>
              <span>Tu mejor amigo<br /><strong>está más cerca de lo que crees</strong></span>
            </div>
            <div className="little-star star-one" aria-hidden="true">✦</div>
            <div className="little-star star-two" aria-hidden="true">✦</div>
          </div>
          <a className="scroll-cue" href="#bienestar">
            <span>Desliza para descubrir</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="values-section" id="bienestar" aria-label="Compromisos de bienestar animal">
          <div className="values-grid">
            <article className="value-card">
              <span className="value-icon value-icon-pink" aria-hidden="true">♡</span>
              <h2>Quiérelo</h2>
              <p>El cariño, el respeto y la paciencia son el comienzo de una gran amistad.</p>
            </article>
            <article className="value-card">
              <span className="value-icon value-icon-yellow" aria-hidden="true">✿</span>
              <h2>Cuídalo</h2>
              <p>Una familia responsable le da atención, juego y cuidados para toda la vida.</p>
            </article>
            <article className="value-card">
              <span className="value-icon value-icon-mint" aria-hidden="true">✦</span>
              <h2>Adopta</h2>
              <p>Adoptar es elegir una historia compartida. La mejor parte empieza en casa.</p>
            </article>
          </div>
        </section>

        <section className="learn-section section-wrap" id="aprende">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Para una vida más feliz</p>
              <h2>Amar también es <em>aprender.</em></h2>
            </div>
            <a className="text-link desktop-link" href="#contacto">
              Ver todos los consejos <ArrowIcon />
            </a>
          </div>
          <div className="guide-grid">
            {guides.map((guide, index) => (
              <a
                className={`guide-card guide-${guide.tone}`}
                href="#contacto"
                key={guide.title}
              >
                <span className="guide-number">0{index + 1}</span>
                <span className="guide-icon" aria-hidden="true">{guide.icon}</span>
                <h3>{guide.title}</h3>
                <p>{guide.copy}</p>
                <span className="guide-arrow" aria-label={`Leer ${guide.title}`}>
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="adopt-section" id="adopta">
          <div className="section-wrap">
            <div className="section-heading adopt-heading">
              <div>
                <p className="eyebrow"><span /> Conoce a tus futuros mejores amigos</p>
                <h2>Caritas que buscan <em>familia.</em></h2>
              </div>
              <p className="section-aside">
                Cada uno tiene una personalidad única y muchísimo amor para compartir.
              </p>
            </div>
            <div className="dog-grid">
              {filteredDogs.map((dog) => (
                <article className="dog-card" key={dog.name}>
                  <div className="dog-photo-wrap">
                    <Image
                      className="dog-photo"
                      src={dog.image}
                      alt={dog.alt}
                      width={900}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 33vw, 360px"
                    />
                    <span className={`dog-tag tag-${dog.color}`}>{dog.tag}</span>
                    <button
                      aria-label={
                        favorites.includes(dog.name)
                          ? `Quitar a ${dog.name} de favoritos`
                          : `Guardar a ${dog.name} en favoritos`
                      }
                      aria-pressed={favorites.includes(dog.name)}
                      className={`favorite-button${favorites.includes(dog.name) ? " favorited" : ""}`}
                      onClick={() => toggleFavorite(dog.name)}
                      type="button"
                    >
                      {favorites.includes(dog.name) ? "♥" : "♡"}
                    </button>
                  </div>
                  <div className="dog-info">
                    <div>
                      <h3>{dog.name}</h3>
                      <p>{dog.detail}</p>
                    </div>
                    <a
                      aria-label={`Conocer a ${dog.name}`}
                      className="dog-arrow"
                      href="#contacto"
                    >
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {filteredDogs.length === 0 && (
              <p className="no-results">
                No encontramos lomitos con ese nombre. Prueba con otra búsqueda.
              </p>
            )}
          </div>
        </section>

        <section className="story-section section-wrap" id="historias">
          <div className="story-mark" aria-hidden="true">“</div>
          <p className="eyebrow"><span /> Una familia, una nueva historia</p>
          <blockquote>
            “Llegó a casa y, sin decir una palabra, hizo que todo se sintiera más bonito.”
          </blockquote>
          <p className="story-credit">— La familia de Nube <span>♡</span></p>
        </section>
      </main>

      <footer className="site-footer" id="contacto">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#" aria-label="Lomo lomitos, inicio">
            <Image src="/logo.svg" alt="" width={46} height={46} />
            <span>
              Lomo <em>lomitos</em>
            </span>
          </a>
          <p>Más colitas felices, más hogares llenos de amor.</p>
          <a className="footer-contact" href="mailto:hola@lomolomitos.mx">
            ¿Platicamos? <span>hola@lomolomitos.mx</span>
          </a>
          <span className="footer-copy">Hecho con amor y muchas huellitas · © 2026 Lomo lomitos</span>
        </div>
      </footer>
    </>
  );
}
