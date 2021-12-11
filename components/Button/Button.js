const Button = ({ children, variant }) => {
  const variantClass =
    variant === 'secondary'
      ? 'w-full lg:w-auto float-right hover:text-green-500 hover:border-green-400 border-transparent bg-green-500 text-gray-50'
      : 'text-white border-white hover:border-transparent hover:bg-white hover:text-green-400'
  return (
    <button
      className={`
      uppercase
      transition-colors 
      duration-500 
      font-light
      rounded
      py-2 
      px-4
      mt-6
      border-2 
      bg-transparent 
      ${variantClass}`}
    >
      {children}
    </button>
  )
}

export default Button
