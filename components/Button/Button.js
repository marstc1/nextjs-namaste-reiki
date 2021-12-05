const Button = ({ children }) => {
  return (
    <button className="transition-colors duration-500 font-semibold bg-transparent hover:bg-white hover:text-green-400 text-white py-2 px-4 border-2 border-white hover:border-transparent rounded">
      {children}
    </button>
  )
}

export default Button
