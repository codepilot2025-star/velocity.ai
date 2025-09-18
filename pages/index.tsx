import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In a real application, you would send this to your backend
    console.log('Email submitted:', email)
  }

  return (
    <>
      <Head>
        <title>Velocity.AI - Accelerate Your AI Journey</title>
        <meta name="description" content="Transform your business with AI-powered velocity optimization. Get faster insights, better performance, and accelerated growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero-section">
        {/* Header */}
        <header className="header">
          <div className="container">
            <nav className="nav">
              <div className="logo">
                Velocity.AI
              </div>
              <div className="nav-links">
                <a href="#features" className="nav-link">Features</a>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="hero-content">
          <div className="container">
            <h1 className="hero-title">
              Accelerate Your
              <span className="gradient-text"> AI Journey</span>
            </h1>
            <p className="hero-subtitle">
              Transform your business with AI-powered velocity optimization. 
              Get faster insights, better performance, and accelerated growth.
            </p>

            {/* CTA Section */}
            <div className="cta-container">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="cta-form">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="email-input"
                  />
                  <button
                    type="submit"
                    className="cta-button"
                  >
                    Get Started
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="features-header">
              <h2 className="features-title">
                Why Choose Velocity.AI?
              </h2>
              <p className="features-subtitle">
                Our AI-powered platform delivers unprecedented speed and accuracy for your business operations.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon">⚡</span>
                <h3 className="feature-title">Lightning Fast</h3>
                <p className="feature-description">
                  Process data 10x faster than traditional methods with our optimized AI algorithms.
                </p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">🎯</span>
                <h3 className="feature-title">Precise Results</h3>
                <p className="feature-description">
                  Achieve 99.9% accuracy with our advanced machine learning models and continuous optimization.
                </p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">🚀</span>
                <h3 className="feature-title">Scalable Growth</h3>
                <p className="feature-description">
                  Scale your operations seamlessly from startup to enterprise with our flexible infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="footer">
          <div className="container">
            <h3 className="footer-title">Ready to Get Started?</h3>
            <p className="footer-description">
              Join thousands of businesses already using Velocity.AI to accelerate their growth.
            </p>
            <div className="footer-copyright">
              <p>&copy; 2024 Velocity.AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}