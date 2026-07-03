import './App.css'

function App() {
  return (
    <div className="coming-soon">
      <main className="coming-soon__content">
        <section className="coming-soon__logo">
          <img
            src="/assets/img/kexa-logog.png"
            alt="Kexa Group"
            className="coming-soon__logo-img"
          />
        </section>

        <section className="coming-soon__brands">
          <p className="coming-soon__brands-label">Empresas del Grupo</p>
          <div className="coming-soon__brands-row">
            <a href="https://kull.cl" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/img/kull-logo.png"
              alt="Kull"
              className="coming-soon__brand-logo"
            />
            </a>

            <div className="coming-soon__brands-divider" aria-hidden="true" />
            <a href="https://enlace360.cl" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/img/enlace360-logo.png"
              alt="Enlace360"
              className="coming-soon__brand-logo"
            />
            </a>
          </div>
        </section>

        <section className="coming-soon__headline">
          <h1>Coming Soon</h1>
        </section>

        <section className="coming-soon__address">
          <address>
            Workplaza | Av. La Dehesa 222, Of. 408
            <br />
            Lo Barnechea, Región Metropolitana
          </address>
        </section>

        <footer className="coming-soon__footer">
          <a href="https://kexagroup.cl">kexagroup.cl</a>
        </footer>
      </main>
    </div>
  )
}

export default App
