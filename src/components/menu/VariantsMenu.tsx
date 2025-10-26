'use client'

import { useRef, useState } from 'react'
import { motion, Variants } from 'motion/react'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { useDimensions } from './useDimensions'

const sidebarVariants: Variants = {
  open: {
    clipPath: 'circle(2000px at 40px 40px)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const VariantsMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(containerRef)

  return (
    <div ref={containerRef} className={`relative h-screen w-full overflow-hidden ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        className='absolute inset-y-0 left-0 w-72'
      >
        <motion.div
          className='absolute inset-y-0 left-0 w-72 bg-white shadow-lg'
          variants={sidebarVariants}
          animate={isOpen ? 'open' : 'closed'}
          style={{
            clipPath: isOpen
              ? `circle(${height * 2 + 200}px at 40px 40px)`
              : 'circle(30px at 40px 40px)',
          }}
        />
        <Navigation />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
    </div>
  )
}
