import Link from 'next/link'

export default function UnauthorizedPage() {
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

      {/* Right — content panel */}
      <div className="bg-cream flex w-full max-w-[480px] flex-col justify-center px-10 py-12 md:w-[480px] md:flex-none">
        <div className="mx-auto w-full max-w-[380px]">
          <div className="border-warm-border mb-8 flex h-16 w-16 items-center justify-center border-[1.5px] bg-white">
            <svg
              className="text-gold h-7 w-7"
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

          <p className="text-gold mb-[0.6rem] text-[0.65rem] font-bold tracking-[0.22em] uppercase">
            Restricted Access
          </p>
          <h1 className="font-cormorant text-navy mb-3 text-[2.4rem] leading-[1.15] font-normal">
            Members Only
          </h1>
          <p className="mb-[2.2rem] text-[0.88rem] leading-[1.65] text-gray-500">
            To access this page you must be signed in. Please log in to your account or create a new
            one to continue.
          </p>

          <div className="bg-warm-border mb-8 h-px w-12" />

          <div className="flex flex-col gap-[0.85rem]">
            <Link
              href="/login"
              className="bg-navy hover:bg-navy-hover block w-full py-[0.82rem] text-center text-[0.75rem] font-bold tracking-[0.18em] text-white uppercase no-underline transition-all duration-200 hover:shadow-[0_4px_16px_rgba(12,26,46,0.18)]"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="text-navy border-warm-border hover:border-gold block w-full border-[1.5px] bg-transparent py-[0.82rem] text-center text-[0.75rem] font-bold tracking-[0.18em] uppercase no-underline transition-all duration-200 hover:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
