import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className=" text-white py-36 px-8 bg-main-hero bg-right-top bg-no-repeat bg-contain mb-20 mr-8">
      <div className="">
        <h1 className="font-serif text-5xl font-semibold w-1/2">
          Reiki and meditation for your health and well being
        </h1>
        <p className="my-8">Stress less. Move more. Sleep soundly.</p>
        <Button>Treatments</Button>
      </div>
    </div>
  )
}

export default Hero
