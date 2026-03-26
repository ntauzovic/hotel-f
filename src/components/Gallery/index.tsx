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
    <div className="flex h-[50vh] min-h-[280px]">
      {galleryImages.map((img) => (
        <div key={img.label} className="group relative flex-1 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.label}
            className="block h-full w-full object-cover transition-transform duration-[0.6s] ease-[ease] group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 flex items-end bg-[rgba(10,18,30,0.42)] p-[1.2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-[0.62rem] font-bold tracking-[0.2em] text-white uppercase">
              {img.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
