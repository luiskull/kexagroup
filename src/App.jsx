import './App.css'

function App() {
  return (
    <main className="coming-soon">
      <picture className="coming-soon__picture">
        <source
          media="(max-width: 768px)"
          srcSet="
            /coming-soon-mobile.png 402w,
            /coming-soon-mobile@2x.png 804w,
            /coming-soon-mobile@3x.png 1206w,
            /coming-soon-mobile@4x.png 1608w
          "
          sizes="100vw"
        />
        <source
          media="(min-width: 1920px)"
          srcSet="/coming-soon@4x.png"
        />
        <img
          src="/coming-soon.png"
          srcSet="
            /coming-soon.png 1024w,
            /coming-soon@2x.png 2048w,
            /coming-soon@3x.png 3072w,
            /coming-soon@4x.png 4096w
          "
          sizes="100vw"
          alt="Kexa Group - Coming Soon"
          className="coming-soon__image"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </main>
  )
}

export default App
