import './Gallery.css'
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&auto=format&fit=crop',
    label: 'Infinity Pool',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop',
    label: 'Deluxe Suite',
  },
  {
    src: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80&auto=format&fit=crop',
    label: 'Private Beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop',
    label: 'Restaurant',
  },
]

export default function Gallery() {
  return (
    <div className="home-gallery">
      {galleryImages.map((img) => (
        <div key={img.label} className="gallery-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.label} />
          <div className="gallery-overlay">
            <span className="gallery-overlay-label">{img.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
