export default function TrustBar() {
  const items = [
    { icon: '🏆', label: 'Fully Insured' },
    { icon: '✅', label: 'Professionally Trained' },
    { icon: '🚗', label: '100% Mobile Service' },
    { icon: '⭐', label: '5-Star Rated' },
    { icon: '🌿', label: 'Premium Solutions' },
    { icon: '📅', label: 'Flexible Booking' },
  ]

  return (
    <div className="bg-white border-y border-neutral-200 py-5">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-sm text-neutral-600 font-medium">
              <span className="text-base">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
