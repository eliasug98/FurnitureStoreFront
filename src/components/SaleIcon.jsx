import React from 'react'

export default function SaleIcon() {
  return (
    <div className="relative inline-block">
      {/* Cartel */}
      <div className="bg-yellow-400 text-white font-bold text-sm rounded-lg px-3 py-1 shadow-md">
        <span>SALE!</span>
      </div>

      {/* Triángulo apuntando hacia abajo */}
      <div className="absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-yellow-400 left-1/2 transform -translate-x-1/2 translate-y-0"></div>
    </div>
  )
}
