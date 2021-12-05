import { useEffect } from 'react'

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
      <div className="flex grid grid-cols-2 items-center">
        <div className="col-span-1 pl-16">
          <h1 className="font-serif text-xl lg:text-5xl font-semibold">
            Reiki and meditation for your health and well being
          </h1>
          <p className="mt-8 mb-8 text-lg font-extralight">
            Stress less. Move more. Sleep soundly.
          </p>
          <Button>Treatments</Button>
        </div>
        <div className="col-span-1">
          <img src="./images/main.png" alt="" width="100%" />
        </div>
      </div>
    </div>
  )
}

export default Hero
