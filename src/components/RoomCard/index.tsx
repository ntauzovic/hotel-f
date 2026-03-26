import { ArrowRight } from 'lucide-react'
import type { Room } from '@/types'

const fallbackImages: Record<string, string> = {
  single:
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80&auto=format&fit=crop',
  double:
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80&auto=format&fit=crop',
  suite:
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&auto=format&fit=crop',
  apartment:
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80&auto=format&fit=crop',
}

const typeLabels: Record<string, string> = {
  single: 'Single Room',
  double: 'Double Room',
  suite: 'Suite',
  apartment: 'Apartment',
}

const statusClasses: Record<string, string> = {
  available: 'bg-emerald-500/90 text-white',
  occupied: 'bg-red-500/90 text-white',
  maintenance: 'bg-amber-500/90 text-white',
}

export default function RoomCard({ room }: { room: Room }) {
  const image = room.images && room.images.length > 0 ? room.images[0] : fallbackImages[room.type]

  return (
    <div className="group overflow-hidden border border-[#ede8df] bg-white transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_48px_rgba(12,26,46,0.13)]">
      <div className="relative h-[220px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={typeLabels[room.type]}
          className="block h-full w-full object-cover transition-transform duration-500 ease-[ease] group-hover:scale-[1.06]"
        />
        <span className="text-gold absolute top-[0.9rem] left-[0.9rem] bg-[rgba(8,15,26,0.85)] px-[0.8rem] py-[0.35rem] text-[0.75rem] font-bold tracking-[0.16em] uppercase backdrop-blur-[6px]">
          #{room.name}
        </span>
        <span
          className={`absolute top-[0.9rem] right-[0.9rem] px-[0.85rem] py-[0.35rem] text-[0.7rem] font-bold tracking-[0.1em] uppercase ${statusClasses[room.status] ?? 'bg-gray-500 text-white'}`}
        >
          {room.status}
        </span>
      </div>

      <div className="px-[1.7rem] pt-6 pb-[1.8rem]">
        <p className="text-gold mb-[0.4rem] text-[0.7rem] font-bold tracking-[0.22em] uppercase">
          {typeLabels[room.type]}
        </p>
        <h3 className="font-cormorant text-navy mb-2 text-[1.55rem] font-semibold">
          Room {room.name}
        </h3>
        <p className="mb-[1.3rem] text-[0.85rem] text-slate-500">Floor {room.floor}</p>

        <div className="flex items-center justify-between border-t border-[#f0ebe2] pt-[1.1rem]">
          <div className="flex flex-col">
            <span className="font-cormorant text-navy text-[2rem] leading-none font-light">
              €{room.price_per_night}
            </span>
            <span className="mt-[0.2rem] text-[0.72rem] tracking-[0.1em] text-slate-400 uppercase">
              per night
            </span>
          </div>
          <button className="bg-navy inline-flex cursor-pointer items-center gap-2 border-none px-[1.3rem] py-[0.65rem] text-[0.72rem] font-bold tracking-[0.13em] text-white uppercase transition-colors duration-200 hover:bg-sky-500">
            Details <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </div>
  )
}
