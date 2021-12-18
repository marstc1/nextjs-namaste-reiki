/* eslint-disable @next/next/no-html-link-for-pages */
import {
  useEffect,
  useState,
} from 'react'

import { Link } from 'react-scroll'

import { linkProps } from '../../constants/linkProps'

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

  const logoLinkProps = {
    ...linkProps,
    activeClass: 'noUnderline',
    offset: 0,
  }

  return (
    <header
      id="header"
      className={`z-50 bg-transparent md:fixed w-full transition-all duration-700 ease-in-out ${
        navBarBgVisible &&
        'md:bg-white md:text-gray-800 md:opacity-95 bgVisible'
      }`}
    >
      <div className="grid md:grid-cols-12 items-center justify-between mx-auto lg:max-w-screen-xl px-4 md:px-12 py-4">
        <div className="col-span-4 flex items-center text-5xl lg:text-6xl font-serif">
          <Link to="Main" className="noStyle" {...logoLinkProps}>
            Lynda Warne
          </Link>
        </div>
        <div className="hidden md:inline text-right col-span-8">
          <ul className="inline uppercase">
            <li className="inline mr-8">
              <Link to="About" {...linkProps}>
                About
              </Link>
            </li>
            <li className="inline mr-8">
              <Link to="Services" {...linkProps}>
                Services
              </Link>
            </li>
            <li className="inline mr-8">
              <Link to="Reviews" {...linkProps}>
                Reviews
              </Link>
            </li>
            <li className="inline">
              <Link to="Contact" {...linkProps}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
