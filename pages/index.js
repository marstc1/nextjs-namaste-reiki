import {
  Field,
  Form,
  Formik,
} from 'formik'
import Head from 'next/head'
import { Link } from 'react-scroll'
import { LocationPin } from 'styled-icons/entypo'
import { PrayingHands } from 'styled-icons/fa-solid'
import { Schedule } from 'styled-icons/material-twotone'

import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import { linkProps } from '../constants/linkProps'
import Reviews from '../sections/Reviews/Reviews'

export default function Home() {
  const iconClassName = 'inline h-12 w-12 my-8 text-green-500'
  const iconTextClassName = 'text-green-500'

  return (
    <div className="text-gray-800">
      <Head>
        <title>Lynda Warne | Reiki and Meditation</title>
        <meta name="description" content="Reiki and Meditation Circle" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Corinthia&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main id="Main">
        <Navbar />

        <Container variant="hero">
          <Hero />
        </Container>

        <Container id="About" variant="primary">
          <h2 className="text-green-500">ABOUT</h2>
          <h3>Why choose me?</h3>
          <div className="grid gap-4 md:grid-cols-2 md:px-12 items-center">
            <div className="mb-8 lg:mb-0 lg:mr-12 mx-auto">
              <img
                className="shadow-lg transform -rotate-1"
                src="./images/LyndaWarne.jpg"
                alt="Lynda Warne - Reiki Master"
              />
            </div>

            <div className="text-lg leading-8">
              <p>Hello, I&apos;m Lynda.</p>
              <p>I practice from my home in Martham Village, Great Yarmouth.</p>
              <p>I have been healing for more than 30 years.</p>
              <p>
                I became a Healer Member for the National Federation Of
                Spiritual Healers (NFSH) for twelve years. I then took Reiki to
                Master level.
              </p>
              <p>I also successfully run a monthly Meditation Circle.</p>
              <p>Peace and light, namaste.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:px-12 pt-16 align-middle items-center text-center">
            <div>
              <PrayingHands className={iconClassName} />
              <p className={iconTextClassName}>30+ years experience</p>
            </div>
            <div>
              <LocationPin className={iconClassName} />
              <p className={iconTextClassName}>Martham, Norfolk</p>
            </div>
            <div>
              <Schedule className={iconClassName} />
              <p className={iconTextClassName}>Flexible booking times</p>
            </div>
          </div>
        </Container>

        <Container id="Services">
          <h2 className="text-gray-50">SERVICES</h2>
          <h3>What I offer</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="col-span-1 rounded-xl bg-gray-50 shadow-sm p-4 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-6xl text-center mb-4">Reiki Healing</h3>
                <img
                  className="w-full my-8"
                  src="./images/healing.jpg"
                  alt=""
                />
                <p>
                  Reiki is a Japanese form of energy healing, which is a subset
                  of alternative medicine.
                </p>

                <h4 className="mt-4 font-semibold">Service Overview</h4>
                <p>
                  I use a technique called palm healing which a universal energy
                  is transferred through the palms to the patient in order to
                  encourage emotional or physical healing.
                </p>

                <h4 className="mt-4 font-semibold">Benefits</h4>
                <ul className="pl-8 mb-4 list-disc">
                  <li>Relieves pain, anxiety, and fatigue</li>
                  <li>Enhances quality of life</li>
                  <li>Boosts mood</li>
                  <li>Treats depression</li>
                  <li>Accelerates The Body’s Self-Healing Ability</li>
                  <li>Cleanses Body of Toxins and Supports Immune System</li>
                </ul>
              </div>
              <div>
                <Button variant="secondary">
                  <Link className="noStyle" to="Contact" {...linkProps}>
                    Request a booking
                  </Link>
                </Button>
              </div>
            </div>

            <div className="col-span-1 rounded-xl bg-gray-50 shadow-sm p-4 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-6xl text-center mb-4">Meditation Circle</h3>
                <img
                  className="w-full my-8"
                  src="./images/meditation.jpg"
                  alt=""
                />
                <p>
                  The meditation circle is open to everyone. All meditation
                  practice levels, including first timers, are welcome.
                </p>

                <h4 className="mt-4 font-semibold">Service Overview</h4>
                <p>
                  This 30-minute session is a guided meditation which will help
                  you remove negative energy, ground yourself, and connect with
                  your inner self.
                </p>

                <h4 className="mt-4 font-semibold">Benefits</h4>
                <ul className="pl-8 mb-4 list-disc">
                  <li>Lowers high blood pressure</li>
                  <li>Improves the immune system</li>
                  <li>Decreases anxiety</li>
                  <li>Improves emotional stability</li>
                  <li>Increases creativity</li>
                  <li>Sharpens the mind</li>
                </ul>
              </div>
              <div>
                <Button variant="secondary">
                  <Link className="noStyle" to="Contact" {...linkProps}>
                    Find out more
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>

        <Reviews />
      </main>

      <div
        id="Contact"
        className="bg-gray-800 text-white bg-bg-footer bg-no-repeat bg-bottom"
      >
        <div className="mx-auto relative lg:max-w-screen-xl p-8 pb-0 pt-16">
          <h2>CONTACT</h2>
          <h3>Get in touch</h3>
          <div className="grid md:grid-cols-2 gap-y-8 pt-8">
            <div className="col-span-1">
              <p className="text-xl">Lynda Warne</p>

              <p>
                Address: <br />
                Bailey Close, <br />
                Martham, <br />
                Great Yarmouth, <br />
                Norfolk, NR29 4UD
              </p>

              <p>Email: lyndawarne1@aol.com</p>
              <p>Phone: 07*** 828407</p>
            </div>
            <div className="col-span-1 row-span-2 mb-36">
              <p className="text-xl">Message me</p>

              <Formik
                initialValues={{ name: '', email: '' }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500))
                  alert(JSON.stringify(values, null, 2))
                }}
              >
                <Form>
                  <label htmlFor="Name">Name</label>
                  <Field id="Name" name="name" type="text" />
                  <label htmlFor="Email">Email</label>
                  <Field id="Email" name="email" type="email" />
                  <label htmlFor="Email">Phone number</label>
                  <Field id="Phone" name="phone" type="phone" />
                  <label htmlFor="Message">Message</label>
                  <textarea id="Message" name="message" rows="4" />
                  <button type="submit" className="float-right mt-8">
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
            <div
              style={{ filter: 'brightness(0)' }}
              className="col-span-1 absolute md:w-1/3 h-80 bottom-0 bg-main-hero bg-cover bg-contain bg-no-repeat bg-center"
            ></div>
          </div>
        </div>
      </div>

      <footer className="relative bg-black text-gray-600 text-xs h-80">
        <span className="absolute w-full bottom-4 text-center">
          Copyright © 2021 - Chris Marston
        </span>
      </footer>
    </div>
  )
}
