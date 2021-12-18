import { useEffect } from 'react'

import { Link } from 'react-scroll'

import { linkProps } from '../../constants/linkProps'
import Button from '../Button/Button'

const Hero = () => {
  const handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleMouseMove)
    }
  }, [])

  return (
    <div className=" text-white overflow-hidden">
      <div className="flex grid md:grid-cols-12 items-center text-center md:text-left md:mt-20 mb-8">
        <div className="md:col-span-7 md:pl-16">
          <h1 className="font-serif text-6xl md:text-5xl lg:text-7xl">
            Reiki and meditation for your health and well being
          </h1>

          <div className="mt-6 mb-20 text-sm font-extralight">
            <span className="mr-4">Reduce stress. </span>
            <span className="mr-4">Control anxiety. </span>
            <span>Boost immunity.</span>
          </div>
          <div className="hidden md:inline">
            <Button>
              <Link className="noStyle" to="Services" {...linkProps}>
                Services
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:col-span-5">
          <img className="mx-auto" src="./images/main.png" alt="" width="80%" />
        </div>
      </div>
    </div>
  )
}

export default Hero
