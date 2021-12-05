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
      <div className="grid grid-cols-2 items-center justify-between mx-auto lg:max-w-screen-xl px-12 py-4">
        <div className="flex items-center text-4xl">
          <img
            className={`mr-2 filter invert`}
            src="./images/lotus-flower.svg"
            alt="Logo"
            width="50px"
          />
          Namaste
        </div>
        <div className="text-right font-semibold">
          <ul className="inline">
            <li className="inline mr-8">About</li>
            <li className="inline mr-8">Treatments</li>
            <li className="inline mr-8">Praise</li>
            <li className="inline">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
