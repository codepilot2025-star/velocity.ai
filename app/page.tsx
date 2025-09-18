export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Velocity.AI</h1>
          <p>Accelerate Your Future with AI-Powered Innovation</p>
          <a href="#features" className="cta-button">
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Velocity.AI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>
                Experience blazing fast AI processing with our cutting-edge
                infrastructure designed for maximum performance.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Smart Intelligence</h3>
              <p>
                Leverage advanced machine learning algorithms that adapt and
                learn from your specific use cases and requirements.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>
                Your data is protected with enterprise-grade security and
                privacy measures, ensuring complete confidentiality.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Global Scale</h3>
              <p>
                Deploy and scale your AI solutions worldwide with our robust
                global infrastructure and reliable network.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>
                Stay ahead with the latest AI innovations and breakthrough
                technologies that drive business transformation.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precise Results</h3>
              <p>
                Achieve exceptional accuracy and precision in your AI models
                with our advanced training and optimization techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Velocity.AI. All rights reserved.</p>
          <p>Accelerating the future, one innovation at a time.</p>
        </div>
      </footer>
    </main>
  )
}