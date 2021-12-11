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
      <div className="flex grid lg:grid-cols-12 items-center">
        <div className="col-span-7 lg:pl-16 my-40">
          <h1 className="font-serif text-5xl lg:text-7xl">
            Reiki and meditation for your health and well being
          </h1>
          <div className="my-12 font-extralight text-lg">
            <span className="mr-4">Reduce stress. </span>
            <span className="mr-4">Control anxiety. </span>
            <span>Boost immunity.</span>
          </div>
          <Button>Services</Button>
        </div>
        <div className="hidden lg:inline col-span-5 mt-20">
          <img className="mx-auto" src="./images/main.png" alt="" width="80%" />
        </div>
      </div>
    </div>
  )
}

export default Hero
