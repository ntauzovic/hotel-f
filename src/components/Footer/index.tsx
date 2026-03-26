export default function Footer() {
  return (
    <footer className="bg-navy-dark border-gold/[0.15] border-t px-8 py-12 text-center">
      <div className="font-cormorant mb-3 text-[1.8rem] font-light tracking-[0.1em] text-white/60">
        Hotel <span className="text-gold">Costa Dorada</span>
      </div>
      <p className="text-[0.68rem] tracking-[0.1em] text-white/[0.22]">
        Marbella, Costa del Sol · España &nbsp;·&nbsp; © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
