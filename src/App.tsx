import type React from "react"
import "./index.css"
import logo from "./assets/logo.svg"
import lock from "./assets/lock.svg"
import section from "./assets/section.svg"
import vector from "./assets/vector.svg"
import form from "./assets/form.svg"
import footer from "./assets/footer.svg"


const PasswordManager: React.FC = () => {
  return (
    <div className="password-manager">
      <header className="header">

        <div className="logo">
          <img src={logo || "/placeholder.svg"} alt="Password Manager Logo" className="logo-icon" />
          <span className="logo-text">Password Manager</span>
        </div>

        <div className="auth-buttons">
          <button className="signup-button">Sign up</button>
          <button className="login-button">Login</button>
        </div>
        <div>
        <img src={vector || "/placeholder.svg"} alt="" className="vector" />
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <div className="badge">Cross-platform Password Manager</div>
            <h1 className="hero-title">Secure Your Systems with the Ultimate Password Manager</h1>
            <p className="hero-description">
              Let us store your passwords and auto-fill them into your favorite apps, so you can forget all about them.
              We do the heavy lifting in a no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and open source.
            </p>
            <button className="get-started-button">Get Started</button>
          </div>

          <div className="hero-visual">
            <div className="lock-container">
              <img src={lock || "/placeholder.svg"} alt="Secure Lock" className="lock-icon" />
            </div>
          </div>
        </div>
        <div>
            <img src={section || "/placeholder.svg"} alt="Secure Lock" className="section" />
        </div>
      </main>

      <footer>
      <div className="footer-section">
          <div className="footer-content">
            <div className="footer-badge">Try our Additional Solution</div>
            <h1 className="footer-title">Password without saving password</h1>
            <p className="footer-description">
              Let us store your passwords and auto-fill them into your favorite apps, so you can forget all about them.
              We do the heavy lifting in a no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and open source.
            </p>
          </div>
          <div className="footer-visual">
            <div className="form-container">
              <img src={form || "/placeholder.svg"} alt="Secure Lock" className="form" />
            </div>
          </div>
        </div>
        <div className="footer-container">
              <img src={footer || "/placeholder.svg"} alt="" className="footerr" />
              </div>
      </footer>
    </div>
  )
}

export default PasswordManager