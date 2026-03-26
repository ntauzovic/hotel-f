'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { loginApi } from '@/lib/api/endpoints'
import useAuthStore from '@/store/useAuthStore'

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
    <div className="bg-cream flex min-h-screen">
      {/* Left — decorative image panel */}
      <div className="bg-navy relative hidden flex-1 overflow-hidden md:flex">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,26,46,0.82)_0%,rgba(12,26,46,0.45)_100%)]" />
        <div className="relative z-[2] flex w-full flex-col justify-end p-14">
          <div className="font-cormorant mb-4 text-[2.2rem] leading-[1.2] font-normal tracking-[0.06em] text-white">
            Hotel <span className="text-gold">Costa Dorada</span>
          </div>
          <p className="mb-10 text-[0.78rem] tracking-[0.12em] text-white/70 uppercase">
            Luxury &amp; Elegance Since 1952
          </p>
          <div className="bg-gold mb-[1.4rem] h-px w-12" />
          <p className="font-cormorant max-w-[26rem] text-[1.05rem] leading-[1.7] text-white/[0.65] italic">
            &ldquo;Where every moment becomes an unforgettable memory, and every stay a story worth
            telling.&rdquo;
          </p>
        </div>
      </div>

      {/* Right — form panel */}
      <div className="bg-cream flex w-full max-w-[480px] flex-col justify-center px-10 py-12 md:w-[480px] md:flex-none">
        <div className="mx-auto w-full max-w-[380px]">
          <p className="text-gold mb-[0.6rem] text-[0.65rem] font-bold tracking-[0.22em] uppercase">
            Welcome back
          </p>
          <h1 className="font-cormorant text-navy mb-2 text-[2.4rem] leading-[1.15] font-normal">
            Sign in to your account
          </h1>
          <p className="mb-[2.2rem] text-[0.85rem] leading-[1.5] text-gray-500">
            Access the hotel management dashboard securely.
          </p>

          {/* Google OAuth */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="border-warm-border text-navy hover:border-gold flex w-full cursor-pointer items-center justify-center gap-[0.6rem] border-[1.5px] bg-white px-4 py-3 text-[0.82rem] font-semibold tracking-[0.04em] transition-all duration-200 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
          >
            <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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

          <div className="my-6 flex items-center gap-[0.8rem]">
            <span className="bg-warm-border h-px flex-1" />
            <span className="text-[0.72rem] tracking-[0.12em] text-gray-400 uppercase">or</span>
            <span className="bg-warm-border h-px flex-1" />
          </div>

          {/* Form */}
          <form className="flex flex-col gap-[1.1rem]" onSubmit={handleSubmit} noValidate>
            {error && (
              <div className="flex items-center gap-2 border border-red-200 bg-red-50 px-[0.9rem] py-[0.7rem] text-[0.82rem] leading-[1.4] text-red-600">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-[0.35rem]">
              <label
                className="text-[0.7rem] font-semibold tracking-[0.12em] text-gray-600 uppercase"
                htmlFor="login-email"
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                className={`text-navy focus:border-gold w-full border-[1.5px] bg-white px-[0.9rem] py-[0.72rem] text-[0.9rem] placeholder-[#b0a898] transition-all duration-200 outline-none focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] ${error ? 'border-red-400' : 'border-warm-border'}`}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="flex flex-col gap-[0.35rem]">
              <label
                className="text-[0.7rem] font-semibold tracking-[0.12em] text-gray-600 uppercase"
                htmlFor="login-password"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className={`text-navy focus:border-gold w-full border-[1.5px] bg-white px-[0.9rem] py-[0.72rem] text-[0.9rem] placeholder-[#b0a898] transition-all duration-200 outline-none focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] ${error ? 'border-red-400' : 'border-warm-border'}`}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-navy hover:not-disabled:bg-navy-hover mt-1 w-full cursor-pointer border-none py-[0.82rem] text-[0.75rem] font-bold tracking-[0.18em] text-white uppercase transition-all duration-200 hover:not-disabled:shadow-[0_4px_16px_rgba(12,26,46,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && <span className="auth-spinner" />}
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="mt-[1.8rem] text-center text-[0.82rem] text-gray-500">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="text-gold font-semibold no-underline transition-colors duration-200 hover:text-[#b8952e] hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
