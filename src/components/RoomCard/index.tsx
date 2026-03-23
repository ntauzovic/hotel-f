import { ArrowRight } from 'lucide-react'
import type { Room } from '@/types'
import './RoomCard.css'

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

export default function RoomCard({ room }: { room: Room }) {
  const image = room.images && room.images.length > 0 ? room.images[0] : fallbackImages[room.type]

  return (
    <div className="room-card">
      <div className="room-card-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={typeLabels[room.type]} />
        <span className="room-card-number">#{room.name}</span>
        <span className={`room-card-status ${room.status}`}>{room.status}</span>
      </div>
      <div className="room-card-body">
        <p className="room-card-type">{typeLabels[room.type]}</p>
        <h3 className="room-card-name font-cormorant">Room {room.name}</h3>
        <p className="room-card-floor">Floor {room.floor}</p>
        <div className="room-card-footer">
          <div className="room-card-price">
            <span className="room-card-price-amount font-cormorant">€{room.price_per_night}</span>
            <span className="room-card-price-label">per night</span>
          </div>
          <button className="room-card-btn">
            Details <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </div>
  )
}
