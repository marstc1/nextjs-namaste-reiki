const Container = ({ children, variant }) => {
  return (
    <div
      className={`relative w-full pb-36 ${
        variant === 'primary' && 'bg-white'
      } ${variant === 'secondary' && 'bg-green-900 bg-opacity-30'}`}
    >
      {variant === 'hero' && (
        <div className="absolute bottom-0 z-negative w-full md:h-48 lg:h-96 bg-wave bg-cover bg-no-repeat bg-center"></div>
      )}
      <div className={`mx-auto lg:max-w-screen-xl pt-32 px-8`}>{children}</div>
    </div>
  )
}

export default Container
