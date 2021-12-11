import {
  useEffect,
  useState,
} from 'react'

const Navbar = () => {
  const [navBarBgVisible, setNavBarBgVisible] = useState(false)

  const changeBg = () => {
    setNavBarBgVisible(window.scrollY >= 65)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBg)
    return () => {
      window.removeEventListener('scroll', changeBg)
    }
  }, [])

  return (
    <header
      className={`z-50 bg-transparent fixed w-full transition-all duration-700 ease-in-out ${
        navBarBgVisible && 'bg-white text-gray-800 opacity-95'
      }`}
    >
      <div className="grid lg:grid-cols-2 items-center justify-between mx-auto lg:max-w-screen-xl px-4 lg:px-12 py-4">
        <div className="flex items-center text-5xl lg:text-6xl font-serif">
          Lynda Warne
        </div>
        <div className="hidden lg:inline text-right">
          <ul className="inline uppercase">
            <li className="inline mr-8">About</li>
            <li className="inline mr-8">Reiki</li>
            <li className="inline mr-8">Meditation</li>
            <li className="inline mr-8">Reviews</li>
            <li className="inline">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
