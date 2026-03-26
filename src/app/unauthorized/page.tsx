import Link from 'next/link'
import './unauthorized.css'

export default function UnauthorizedPage() {
  return (
    <div className="unauth-page">
      {/* Left — decorative image panel */}
      <div className="unauth-panel-image">
        <div className="unauth-panel-image-bg" />
        <div className="unauth-panel-image-overlay" />
        <div className="unauth-panel-image-content">
          <div className="unauth-panel-brand font-cormorant">
            Hotel <span className="unauth-panel-brand-gold">Costa Dorada</span>
          </div>
          <p className="unauth-panel-tagline">Luxury &amp; Elegance Since 1952</p>
          <div className="unauth-panel-divider" />
          <p className="unauth-panel-quote font-cormorant">
            &ldquo;Where every moment becomes an unforgettable memory, and every stay a story worth
            telling.&rdquo;
          </p>
        </div>
      </div>

      {/* Right — content panel */}
      <div className="unauth-panel-content">
        <div className="unauth-inner">
          <div className="unauth-icon-wrap">
            <svg
              className="unauth-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>

          <p className="unauth-eyebrow">Restricted Access</p>
          <h1 className="unauth-title font-cormorant">Members Only</h1>
          <p className="unauth-description">
            To access this page you must be signed in. Please log in to your account or create a new
            one to continue.
          </p>

          <div className="unauth-divider" />

          <div className="unauth-actions">
            <Link href="/login" className="unauth-btn-primary">
              Sign In
            </Link>
            <Link href="/" className="unauth-btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
