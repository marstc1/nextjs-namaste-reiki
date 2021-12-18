const Container = ({ children, variant, id }) => {
  return (
    <div
      id={id}
      className={`relative w-full pb-16 ${
        variant === 'primary' && 'bg-white'
      } ${variant === 'secondary' && 'bg-green-900 bg-opacity-30'}`}
    >
      {variant === 'hero' && (
        <div className="absolute bottom-0 z-negative w-full h-2/3 bg-wave bg-cover bg-no-repeat bg-center"></div>
      )}
      <div className={`mx-auto lg:max-w-screen-xl pt-16 px-4 sm:px-8`}>
        {children}
      </div>
    </div>
  )
}

export default Container
