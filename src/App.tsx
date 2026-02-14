import { useEffect, useRef, useState } from 'react'
import './index.css'

// Dust particle system
const DustCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number; y: number; size: number; speedX: number; speedY: number; opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.15 - 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 168, 83, ${p.opacity})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="dust-canvas" />
}

// Section data
const sections = [
  {
    id: 'city-planning',
    number: '01',
    title: 'Urban Planning',
    image: '/images/city-aerial.jpg',
    paragraphs: [
      'Mohenjo-daro\'s grid-like street system is one of the earliest examples of urban planning. Main streets ran perfectly North-South and East-West, intersecting at right angles.',
      'Houses were constructed with standardised baked bricks (ratio 1:2:4), had multiple rooms, courtyards, wells, and private bathrooms — unmatched comfort in the ancient world.',
    ],
    facts: [
      { icon: '🗺️', text: 'Perfect grid layout with streets running N-S and E-W' },
      { icon: '🧱', text: 'Standardised brick ratio of 1:2:4 used across the entire city' },
      { icon: '🏘️', text: 'Multi-room houses with courtyards, wells, and bathrooms' },
    ],
  },
  {
    id: 'drainage',
    number: '02',
    title: 'Drainage System',
    image: '/images/drainage.jpg',
    paragraphs: [
      'Mohenjo-daro possessed the world\'s first known urban sanitation system. Covered drains ran along every major street, connected to individual houses through terracotta pipes.',
      'Soak pits and inspection manholes were placed at regular intervals for cleaning. This level of urban planning would not be seen again for thousands of years.',
    ],
    facts: [
      { icon: '🔧', text: 'Covered brick drains along every street with inspection manholes' },
      { icon: '🏠', text: 'Each house had its own bathroom connected to the main drain' },
      { icon: '🌍', text: 'Most advanced sanitation system of the ancient world' },
    ],
  },
  {
    id: 'agriculture',
    number: '03',
    title: 'Agriculture & Trade',
    image: '/images/agriculture.jpg',
    paragraphs: [
      'The fertile Indus floodplain supported extensive agriculture — wheat, barley, peas, and cotton were cultivated. The Great Granary stored surplus grain for the city\'s population.',
      'Trade networks extended to Mesopotamia, with distinctive Indus seals, beads, and weights found across the ancient world.',
    ],
    facts: [
      { icon: '🌾', text: 'Wheat, barley, and cotton were primary crops of the region' },
      { icon: '🏛️', text: 'The Great Granary stored food for the entire city' },
      { icon: '⚖️', text: 'Standardised weights and measures for international trade' },
    ],
  },
  {
    id: 'great-bath',
    number: '04',
    title: 'The Great Bath',
    image: '/images/great-bath.jpg',
    paragraphs: [
      'The most remarkable structure of Mohenjo-daro — a massive watertight tank built with precision-cut baked bricks, sealed with gypsum mortar and a layer of natural bitumen (tar).',
      'Measuring 12m long, 7m wide, and 2.4m deep, it was likely used for ritualistic bathing or purification ceremonies, reflecting the civilization\'s deep reverence for hygiene and water.',
    ],
    facts: [
      { icon: '🧱', text: 'Built with standardised baked bricks and waterproof bitumen' },
      { icon: '🛁', text: 'Likely used for ritual purification and religious ceremonies' },
      { icon: '💧', text: 'Connected to a sophisticated water supply and drainage system' },
    ],
  },
  {
    id: 'dam',
    number: '05',
    title: 'Water Management & Dam',
    image: '/images/dam.jpg',
    paragraphs: [
      'The Indus Valley people engineered sophisticated dams and water control systems to manage the mighty Indus River. These structures prevented flooding and directed water to agricultural fields.',
      'The dam architecture showcased advanced hydraulic engineering — carefully designed sluice gates, retention walls, and overflow channels that still inspire modern engineers today.',
    ],
    facts: [
      { icon: '🌊', text: 'Massive dams controlled river flow and prevented seasonal flooding' },
      { icon: '💧', text: 'Irrigation channels distributed water across vast agricultural areas' },
      { icon: '⚙️', text: 'Sluice gates and overflow systems managed water levels precisely' },
    ],
  },
]

function App() {
  const [loaded, setLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  return (
    <>
      {/* Loading screen */}
      <div className={`loader ${loaded ? 'hidden' : ''}`}>
        <h1>MOHENJO-DARO</h1>
        <div className="loader-bar" />
      </div>

      {/* Dust particles */}
      <DustCanvas />

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">MOHENJO-DARO</a>
        <ul className="nav-links">
          <li><a href="#city-planning">City</a></li>
          <li><a href="#drainage">Drainage</a></li>
          <li><a href="#agriculture">Agriculture</a></li>
          <li><a href="#great-bath">Great Bath</a></li>
          <li><a href="#dam">Dam</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">Indus Valley Civilization · 2500 BCE</p>
          <h1 className="hero-title">
            MOHENJO-DARO
            <span>Mound of the Dead</span>
          </h1>
          <p className="hero-desc">
            An interactive journey through one of the world's earliest great cities —
            where urban planning, engineering, and culture flourished over 4,500 years ago.
          </p>
          <div className="hero-scroll">
            <span>Scroll to Explore</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* Content Sections — 3D Image Cards */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="section">
          <div className="section-inner">
            {/* 3D Image Card */}
            <div className="image-3d-wrapper reveal reveal-delay-1">
              <div className="image-3d-card">
                <img src={section.image} alt={section.title} loading="lazy" />
              </div>
            </div>

            {/* Text Content */}
            <div className="section-text-content">
              <div className="section-number reveal reveal-delay-2">
                {section.number}
              </div>
              <h2 className="section-title reveal reveal-delay-2">
                {section.title}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="section-text reveal reveal-delay-3">
                  {p}
                </p>
              ))}
              <div className="section-facts reveal reveal-delay-4">
                {section.facts.map((fact, i) => (
                  <div key={i} className="fact">
                    <span className="fact-icon">{fact.icon}</span>
                    <span className="fact-text">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default App
