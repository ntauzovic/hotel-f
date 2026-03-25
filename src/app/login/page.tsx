'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { loginApi } from '@/lib/api/endpoints'
import useAuthStore from '@/store/useAuthStore'
import './login.css'

export default function LoginPage() {
  const router = useRouter()
  const { setAuth } = useAuthStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const user = await loginApi(email, password)
      setAuth(user)
      router.replace('/home')
    } catch (err: unknown) {
      const message =
        err &&
        typeof err === 'object' &&
        'response' in err &&
        err.response &&
        typeof err.response === 'object' &&
        'data' in err.response &&
        err.response.data &&
        typeof err.response.data === 'object' &&
        'message' in err.response.data
          ? String((err.response.data as { message: string }).message)
          : 'Invalid email or password. Please try again.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
  }

  return (
    <div className="auth-page">
      {/* Left — decorative image panel */}
      <div className="auth-panel-image">
        <div className="auth-panel-image-bg" />
        <div className="auth-panel-image-overlay" />
        <div className="auth-panel-image-content">
          <div className="auth-panel-brand font-cormorant">
            Hotel <span className="auth-panel-brand-gold">Costa Dorada</span>
          </div>
          <p className="auth-panel-tagline">Luxury &amp; Elegance Since 1952</p>
          <div className="auth-panel-divider" />
          <p className="auth-panel-quote font-cormorant">
            &ldquo;Where every moment becomes an unforgettable memory, and every stay a story worth
            telling.&rdquo;
          </p>
        </div>
      </div>

      {/* Right — form panel */}
      <div className="auth-panel-form">
        <div className="auth-form-inner">
          <p className="auth-form-eyebrow">Welcome back</p>
          <h1 className="auth-form-title font-cormorant">Sign in to your account</h1>
          <p className="auth-form-subtitle">Access the hotel management dashboard securely.</p>

          {/* Google OAuth */}
          <button type="button" className="auth-google-btn" onClick={handleGoogleLogin}>
            <svg className="auth-google-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <div className="auth-divider">
            <span className="auth-divider-line" />
            <span className="auth-divider-text">or</span>
            <span className="auth-divider-line" />
          </div>

          {/* Email / password form */}
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {error && <div className="auth-error">{error}</div>}

            <div className="auth-field">
              <label className="auth-label" htmlFor="login-email">
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                className={`auth-input${error ? 'input-error' : ''}`}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className={`auth-input${error ? 'input-error' : ''}`}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading && <span className="auth-spinner" />}
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="auth-footer-text">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="auth-footer-link">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
