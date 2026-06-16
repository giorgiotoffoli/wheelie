import { MapPinIcon } from 'lucide-react'
import WheelchairViewer from './wheelchair-viewer'

type WheelchairCardProps = {
  wheelchairId?: string
  correctArea?: string
  compact?: boolean
}

export default function WheelchairCard({
  wheelchairId = 'W-0147',
  correctArea = 'ICU North',
  compact = true,
}: WheelchairCardProps) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/4 p-4 shadow-2xl">
      <div className="flex gap-4">
        <div className={compact ? 'h-28 w-28' : 'h-40 w-40'}>
          <WheelchairViewer />
        </div>

        <div className="h-24 w-px bg-white/10" />

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">{wheelchairId}</h2>
          <p className="mt-2 text-white/45">Assigned area</p>

          <div className="mt-1 flex items-center gap-2">
            <span className="text-red-400">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <p className="text-lg font-medium text-white">{correctArea}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
