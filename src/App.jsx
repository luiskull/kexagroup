import './App.css'

function App() {
  return (
    <main className="coming-soon">
      <picture className="coming-soon__picture">
        <source
          media="(max-width: 768px)"
          srcSet="
            /coming-soon-mobile.jpg 402w,
            /coming-soon-mobile@2x.jpg 804w,
            /coming-soon-mobile@3x.jpg 1206w,
            /coming-soon-mobile@4x.jpg 1608w
          "
          sizes="100vw"
        />
        <img
          src="/coming-soon.jpg"
          srcSet="
            /coming-soon.jpg 1024w,
            /coming-soon@2x.jpg 2048w,
            /coming-soon@3x.jpg 3072w,
            /coming-soon@4x.jpg 4096w
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
