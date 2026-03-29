'use client'

import { motion } from 'framer-motion'

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
    <div className="flex h-[55vh] min-h-[300px]">
      {galleryImages.map((img, i) => (
        <motion.div
          key={img.label}
          className="group relative overflow-hidden"
          initial={{ flex: 1 }}
          whileHover={{ flex: 1.6 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
        >
          {}
          <motion.img
            src={img.src}
            alt={img.label}
            className="block h-full w-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,15,26,0.75)_0%,transparent_60%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
          {/* Label */}
          <motion.div
            className="absolute right-0 bottom-0 left-0 flex items-end justify-between p-5"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[0.65rem] font-bold tracking-[0.25em] text-white uppercase">
              {img.label}
            </span>
            <span className="text-[0.6rem] font-light tracking-[0.15em] text-white/60 uppercase">
              0{i + 1}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
