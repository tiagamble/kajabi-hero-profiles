'use client'

import { useState, useMemo } from 'react'
import FlipCard from './components/FlipCard'
import heroes from './data/heroes.json'

const STAGE_DEFINITIONS = {
  Launch: 'Early-stage business (0-6 months). Focus on product-market fit, initial growth, and establishing predictable revenue patterns.',
  Growth: 'Accelerating business (6 months - 2 years). Strong traction with growing revenue. Focus on scaling operations and optimizing unit economics.',
  Scale: 'Established and growing (2+ years). $1M+ GMV. Focus on profitability, operational efficiency, and revenue acceleration.',
  Established: 'Mature business (5+ years). Strong revenue ($1M+) with predictable growth. Focus on optimization, enterprise features, and strategic partnerships.',
  Transition: 'Pivoting business model or market. Exploring new revenue streams or customer segments while maintaining existing business.',
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStage, setFilterStage] = useState<string | null>(null)
  const [showStageInfo, setShowStageInfo] = useState(false)

  const filteredHeroes = useMemo(() => {
    return heroes.filter((hero) => {
      const matchesSearch =
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.niche.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStage = filterStage ? hero.stage === filterStage : true

      return matchesSearch && matchesStage
    })
  }, [searchQuery, filterStage])

  const stages = Array.from(new Set(heroes.map((h) => h.stage))).sort()

  return (
    <main className="min-h-screen bg-gradient-to-br from-kajabi-white via-kajabi-lightGreen/5 to-kajabi-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-kajabi-lightGreen/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" className="flex-shrink-0">
              <rect width="40" height="40" fill="#1a1a1a" rx="3"/>
              <g>
                <polygon points="20,12 28,12 20,20 28,28 20,28 12,20" fill="#d4a574" opacity="0.8"/>
                <polygon points="20,12 28,12 20,20" fill="#e8c9a8" opacity="0.6"/>
              </g>
            </svg>
            <span className="text-kajabi-black font-bold text-xl">kajabi</span>
            <span className="text-kajabi-darkGreen/20 text-2xl">•</span>
            <h1 className="text-2xl font-semibold text-kajabi-black">
              Hero Open House
            </h1>
          </div>

          {/* Search & Filters */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Search by name, business, or niche..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 border border-kajabi-lightGreen/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-kajabi-warmTan focus:border-transparent text-kajabi-black placeholder-kajabi-darkGreen/50"
            />

            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => setFilterStage(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filterStage === null
                    ? 'bg-kajabi-warmTan text-white'
                    : 'bg-kajabi-lightGreen/20 text-kajabi-darkGreen hover:bg-kajabi-lightGreen/30'
                }`}
              >
                All Stages
              </button>
              {stages.map((stage) => (
                <button
                  key={stage}
                  onClick={() => setFilterStage(stage)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filterStage === stage
                      ? 'bg-kajabi-warmTan text-white'
                      : 'bg-kajabi-lightGreen/20 text-kajabi-darkGreen hover:bg-kajabi-lightGreen/30'
                  }`}
                >
                  {stage}
                </button>
              ))}
              <button
                onClick={() => setShowStageInfo(!showStageInfo)}
                className="ml-auto px-3 py-1.5 rounded-full text-sm font-medium bg-kajabi-lightGreen/20 text-kajabi-darkGreen hover:bg-kajabi-lightGreen/30 transition-colors"
                title="Show stage definitions"
              >
                ℹ️ Stages
              </button>
            </div>

            {showStageInfo && (
              <div className="mt-4 p-4 bg-kajabi-lightGreen/10 border border-kajabi-lightGreen/30 rounded-lg">
                <h3 className="text-sm font-semibold text-kajabi-darkGreen mb-3">Stage Definitions</h3>
                <div className="grid gap-3">
                  {Object.entries(STAGE_DEFINITIONS).map(([stage, definition]) => (
                    <div key={stage} className="text-xs">
                      <p className="font-semibold text-kajabi-darkGreen mb-1">{stage}</p>
                      <p className="text-kajabi-darkGreen/80">{definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredHeroes.length > 0 ? (
          <>
            <p className="text-sm text-kajabi-darkGreen/70 mb-6 font-medium">
              {filteredHeroes.length} of {heroes.length} heroes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHeroes.map((hero) => (
                <div key={hero.id} className="h-96">
                  <FlipCard {...hero} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-kajabi-darkGreen text-lg">
              No heroes found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setFilterStage(null)
              }}
              className="mt-4 px-6 py-2 bg-kajabi-warmTan text-white rounded-lg font-medium hover:bg-kajabi-darkBrown transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-kajabi-lightGreen/20 bg-kajabi-darkGreen/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-kajabi-darkGreen/70">
            Kajabi Hero Open House | July 13, 2026
          </p>
          <p className="text-xs text-kajabi-darkGreen/50 mt-1">
            Internal use only. Click each card to flip for stakeholder insights.
          </p>
        </div>
      </div>
    </main>
  )
}
