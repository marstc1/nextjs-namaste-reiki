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

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="wrapper antialiased text-gray-900">
              <div>
                <img
                  src="./images/reiki.jpg"
                  alt=""
                  className="border-2 border-gray-50 w-full object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16">
                  <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h4 className="mt-1 h-14 text-xl font-semibold uppercase leading-tight truncate">
                      Reiki Healing
                    </h4>
                    <div className="mt-2 mb-4 font-semibold">
                      £25
                      <span className="text-gray-600 font-normal text-sm">
                        /per treatment.
                        <br />
                        Pre-arranged booking required.
                      </span>
                    </div>
                    <p>
                      Reiki means &apos;universal life force energy&apos; in
                      Japanese. Reiki is a Japanese form of energy healing,
                      which is a subset of alternative medicine, a natural
                      method of healing.
                    </p>
                    <h4 className="mt-4 font-semibold">Service Overview</h4>
                    <p>
                      Reiki is a hands on healing method which uses universal
                      life force energy. This is transferred through the Reiki
                      Master to the patient in order to encourage emotional and
                      physical healing which contributes to a persons well
                      being.
                    </p>
                    <p>Confidentiality is respected at all times.</p>
                    <h4 className="mt-4 font-semibold">Benefits</h4>
                    <ul className="pl-8 mb-4 list-disc">
                      <li>Relieves pain, anxiety, and fatigue</li>
                      <li>Enhances quality of life</li>
                      <li>Boosts mood</li>
                      <li>Treats depression</li>
                      <li>Accelerates the body’s self-healing ability</li>
                      <li>Cleanses body of toxins</li>
                    </ul>
                    <div>
                      <Link className="noStyle" to="Contact" {...linkProps}>
                        <Button variant="secondary">Request a booking</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper antialiased text-gray-900">
              <div>
                <img
                  src="./images/chakra.jpg"
                  alt=""
                  className="border-2 border-gray-50 w-full object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h4 className="mt-1 h-14 text-xl font-semibold uppercase leading-tight">
                      Namaste Meditation Circle
                    </h4>

                    <div className="mt-2 mb-4 font-semibold">
                      £5
                      <span className="text-gray-600 font-normal text-sm">
                        /per session.
                        <br />
                        Request to join our next session.
                      </span>
                    </div>

                    <p>
                      We are a small friendly meditation circle for your
                      spiritual and mental well being. We meet monthly at my
                      home in Martham, Norfolk.
                    </p>

                    <p>
                      Come and immerse yourself in a world of inner peace
                      through meditation where time is suspended allowing the
                      body and mind to simply be, a zen like peace. If you would
                      like to join us you&apos;ll be most welcome.
                    </p>

                    <h4 className="mt-4 font-semibold">Service Overview</h4>
                    <p>
                      In this 1 hour session we&apos;ll balance the seven main
                      &apos;Chakras&apos; (energy centres in the body) and a
                      guided meditation which will help you remove negative
                      energy, ground yourself, and connect with your inner self.
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
                    <div>
                      <Link className="noStyle" to="Contact" {...linkProps}>
                        <Button variant="secondary">Request to join</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper antialiased text-gray-900">
              <div>
                <img
                  src="./images/buddha.jpg"
                  alt=""
                  className="border-2 border-gray-50 w-full object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h4 className="mt-1 h-14 text-xl font-semibold uppercase leading-tight">
                      One to One Meditation Sessions
                    </h4>

                    <div className="mt-2 mb-4 font-semibold">
                      £10
                      <span className="text-gray-600 text-sm font-normal">
                        /per session. <br />
                        Pre-arranged booking required.
                      </span>
                    </div>

                    <p>
                      If you are new to meditation I would recommend one to one
                      sessions as an introduction until you feel comfortable
                      with joining the main group.
                    </p>

                    <p>
                      One to one sessions are held at my home in Martham,
                      Norfolk. Please call, text or use the
                      <Link
                        className="noStyle text-green-600"
                        to="Contact"
                        {...linkProps}
                      >
                        {' '}
                        contact form{' '}
                      </Link>
                      below to arrange a day and time which suits you.
                    </p>

                    <h4 className="mt-4 font-semibold">Service Overview</h4>
                    <p>
                      This is a guided introduction designed for those seeking
                      to learn more about mediation and how to meditate in an
                      environment that is a little more personal than a group
                      session.
                    </p>

                    <h4 className="mt-4 font-semibold">Benefits</h4>
                    <ul className="pl-8 mb-4 list-disc">
                      <li>One to one guidance</li>
                      <li>Lowers high blood pressure</li>
                      <li>Improves the immune system</li>
                      <li>Decreases anxiety</li>
                      <li>Improves emotional stability</li>
                      <li>Increases creativity</li>
                      <li>Sharpens the mind</li>
                    </ul>
                    <div>
                      <Link className="noStyle" to="Contact" {...linkProps}>
                        <Button variant="secondary">Request a booking</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 text-center text-sm text-gray-50">
            Please be assured that social distancing rules are adhered to at all
            times during any of the sessions mentioned above.
          </div>
        </Container>

        <Reviews />
      </main>

      <div className="flex flex-col min-h-screen">
        <div
          id="Contact"
          className="bg-gray-800 text-white bg-bg-footer bg-repeat-x bg-bottom"
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
                <p>Phone: 07984 828407</p>
              </div>
              <div className="col-span-1 row-span-2 mb-28">
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
                className="col-span-1 absolute md:w-1/3 h-72 bottom-0 bg-main-hero bg-cover bg-contain bg-no-repeat bg-center"
              ></div>
            </div>
          </div>
        </div>

        <footer className="relative bg-black text-gray-600 text-xs h-16 flex-grow">
          <span className="absolute w-full bottom-4 text-center">
            Copyright © 2021 - Chris Marston
          </span>
        </footer>
      </div>
    </div>
  )
}
