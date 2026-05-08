export default function Hero({ onScrollDown }) {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Hi, I'm</p>
      <h1 className="hero__name">Chung-Yeh Yang</h1>
      <p className="hero__tagline">
        Data Scientist · Machine Learning · Columbia University
      </p>
      <button className="hero__scroll" onClick={onScrollDown} aria-label="Scroll down">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </button>
    </section>
  )
}
