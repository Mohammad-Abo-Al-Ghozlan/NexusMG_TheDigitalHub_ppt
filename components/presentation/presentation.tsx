"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  TitleSlide,
  IntroductionSlide,
  TargetUsersSlide,
  TechStackSlide,
  ArchitectureSlide,
  CoreFeaturesSlide,
  AIFeaturesSlide,
  AdditionalFeaturesSlide,
  ChallengesSolutionsSlide,
  TeamRolesSlide,
  FutureWorkSlide,
  ConclusionSlide,
} from "./slides"

const slides = [
  { id: 1, title: "Title", component: TitleSlide },
  { id: 2, title: "Introduction", component: IntroductionSlide },
  { id: 3, title: "Target Users", component: TargetUsersSlide },
  { id: 4, title: "Tech Stack", component: TechStackSlide },
  { id: 5, title: "Architecture", component: ArchitectureSlide },
  { id: 6, title: "Core Features", component: CoreFeaturesSlide },
  { id: 7, title: "AI Features", component: AIFeaturesSlide },
  { id: 8, title: "Additional Features", component: AdditionalFeaturesSlide },
  { id: 9, title: "Challenges & Solutions", component: ChallengesSolutionsSlide },
  { id: 10, title: "Team Roles", component: TeamRolesSlide },
  { id: 11, title: "Future Work", component: FutureWorkSlide },
  { id: 12, title: "Conclusion", component: ConclusionSlide },
]

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showOverview, setShowOverview] = useState(false)
  const [direction, setDirection] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setShowOverview(false)
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide((prev) => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide((prev) => prev - 1)
    }
  }, [currentSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showOverview) {
        if (e.key === "Escape") setShowOverview(false)
        return
      }
      
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
          nextSlide()
          break
        case "ArrowLeft":
          prevSlide()
          break
        case "f":
        case "F":
          toggleFullscreen()
          break
        case "Escape":
          if (isFullscreen) {
            document.exitFullscreen()
            setIsFullscreen(false)
          }
          break
        case "g":
        case "G":
          setShowOverview((prev) => !prev)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, toggleFullscreen, isFullscreen, showOverview])

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const CurrentSlideComponent = slides[currentSlide].component

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden animated-gradient grid-pattern">
      {/* Slide Overview Modal */}
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-background/95 backdrop-blur-xl p-8 overflow-auto"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Slide Overview</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOverview(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Press ESC to close
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {slides.map((slide, index) => (
                  <motion.button
                    key={slide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => goToSlide(index)}
                    className={`aspect-video rounded-lg overflow-hidden glass-card p-3 text-left transition-all hover:scale-105 ${
                      currentSlide === index ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <div className="text-xs text-muted-foreground mb-1">Slide {slide.id}</div>
                    <div className="text-sm font-medium text-foreground truncate">{slide.title}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Slide Container - 16:9 Aspect Ratio */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[1600px] aspect-video">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="glass-card h-10 w-10 rounded-full disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-6 bg-blue-500"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="glass-card h-10 w-10 rounded-full disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 left-6 z-40">
        <div className="glass-card px-4 py-2 rounded-full text-sm">
          <span className="text-blue-400 font-semibold">{currentSlide + 1}</span>
          <span className="text-muted-foreground"> / {slides.length}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowOverview(true)}
          className="glass-card h-10 w-10 rounded-full"
          title="Show Overview (G)"
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="glass-card h-10 w-10 rounded-full"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Keyboard Hints */}
      <div className="absolute top-6 right-6 z-40">
        <div className="glass-card px-4 py-2 rounded-full text-xs text-muted-foreground">
          <span className="hidden sm:inline">
            <kbd className="px-1.5 py-0.5 rounded bg-secondary/50 mr-1">←</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-secondary/50 mr-2">→</kbd>
            Navigate
            <span className="mx-2">|</span>
            <kbd className="px-1.5 py-0.5 rounded bg-secondary/50 mr-1">F</kbd>
            Fullscreen
            <span className="mx-2">|</span>
            <kbd className="px-1.5 py-0.5 rounded bg-secondary/50 mr-1">G</kbd>
            Grid
          </span>
        </div>
      </div>
    </div>
  )
}
