'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeroCardProps {
  id: number
  name: string
  businessName: string
  niche: string
  stage: string
  tenure: string
  gmv: string
  photo: string
  csmFocus: string
  csmContext: string
  engineeringFocus: string
  engineeringContext: string
  docLink: string
}

export default function FlipCard({
  name,
  businessName,
  niche,
  stage,
  tenure,
  gmv,
  photo,
  csmFocus,
  csmContext,
  engineeringFocus,
  engineeringContext,
  docLink,
}: HeroCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const stageColor = {
    Launch: 'bg-kajabi-gold',
    Growth: 'bg-kajabi-warmTan',
    Scale: 'bg-kajabi-navy',
    Established: 'bg-kajabi-darkGreen',
    Transition: 'bg-kajabi-lightPurple',
  }[stage] || 'bg-kajabi-warmTan'

  const stageTextColor = {
    Launch: 'text-kajabi-darkBrown',
    Growth: 'text-white',
    Scale: 'text-white',
    Established: 'text-white',
    Transition: 'text-kajabi-darkPurple',
  }[stage] || 'text-white'

  return (
    <div className="h-full perspective">
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer border border-kajabi-lightGreen/20"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-kajabi-warmTan flex-shrink-0">
            <Image
              src={photo}
              alt={name}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 640px) 160px, 160px"
            />
          </div>

          <h3 className="text-xl font-semibold text-kajabi-black text-center mb-1">
            {name}
          </h3>
          <p className="text-sm text-kajabi-darkBrown text-center mb-3 font-medium">
            {businessName}
          </p>

          <div className="w-full space-y-2 mb-4">
            <div className="text-center">
              <p className="text-xs text-kajabi-darkGreen font-semibold uppercase tracking-wide">
                {niche}
              </p>
            </div>

            <div className="flex justify-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${stageColor} ${stageTextColor}`}
              >
                {stage}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <p className="text-xs text-kajabi-darkGreen uppercase font-semibold tracking-wide">
                  Tenure
                </p>
                <p className="text-sm font-medium text-kajabi-black">{tenure}</p>
              </div>
              <div>
                <p className="text-xs text-kajabi-darkGreen uppercase font-semibold tracking-wide">
                  GMV
                </p>
                <p className="text-sm font-medium text-kajabi-black">{gmv}</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-kajabi-darkGreen text-center">
            Tap to see insights
          </p>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full bg-kajabi-darkGreen rounded-lg shadow-lg p-6 flex flex-col cursor-pointer border border-kajabi-darkGreen/30 overflow-y-auto"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-kajabi-gold uppercase tracking-wide mb-2 border-b border-kajabi-lightGreen/20 pb-2">
              CSM Focus
            </h4>
            <p className="text-xs text-kajabi-white leading-relaxed font-medium mb-2">
              {csmFocus}
            </p>
            <p className="text-xs text-kajabi-white/80 leading-relaxed italic">
              {csmContext}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-kajabi-gold uppercase tracking-wide mb-2 border-b border-kajabi-lightGreen/20 pb-2">
              Engineering Focus
            </h4>
            <p className="text-xs text-kajabi-white leading-relaxed font-medium mb-2">
              {engineeringFocus}
            </p>
            <p className="text-xs text-kajabi-white/80 leading-relaxed italic">
              {engineeringContext}
            </p>
          </div>

          <div className="mt-auto pt-3 border-t border-kajabi-lightGreen/20">
            <Link
              href={docLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs bg-kajabi-gold text-kajabi-darkBrown px-3 py-2 rounded font-semibold hover:bg-kajabi-lightTan transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Full Profile
            </Link>
            <p className="text-xs text-kajabi-white/60 mt-2">
              Tap to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
