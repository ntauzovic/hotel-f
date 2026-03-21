import './Footer.css'
export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-footer-logo font-cormorant">
        Hotel <span>Costa Dorada</span>
      </div>
      <p className="home-footer-copy">
        Marbella, Costa del Sol · España &nbsp;·&nbsp; © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
