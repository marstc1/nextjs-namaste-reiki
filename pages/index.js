import Head from 'next/head'

import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className="text-gray-800">
      <Head>
        <title>Namaste Reiki and Meditation Circle</title>
        <meta
          name="description"
          content="Namaste Reiki and Meditation Circle"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main className="mx-auto lg:max-w-screen-xl pt-32 px-8 pb-20">
        <Hero />

        <div className="bg-gray-50 rounded-2xl grid grid-cols-2 px-12 py-24">
          <h2 className="text-4xl col-span-2 font-semibold mb-6">
            Why choose me?
          </h2>
          <div className="mr-12">
            <img
              className="shadow-lg transform -rotate-1"
              src="./images/LyndaWarne.jpg"
              alt="Lynda Warne - Reiki Master"
            />
          </div>

          <div>
            <p className="text-lg mb-6 leading-8">
              I have been healing for more than 30 years. I became a Healer
              Member for the National Federation Of Spiritual Healers (NFSH) for
              twelve years. I then took Reiki to Master level which I now
              practice from my home where I now live in Martham Village, Great
              Yarmouth.
            </p>

            <p className="text-lg mb-6 leading-8">
              I worked in the National Health Service from 1976 to 2009 in
              various locations and departments before being made redundant in
              2009 when the department I worked in at The Royal National
              Orthopaedic Hospital, Stanmore, Middlesex was closed. I then
              relocated to Norfolk. I also successfully run a monthly Meditation
              Circle at my home in Martham.
            </p>

            <p className="text-lg leading-8">Peace & Light, Namaste.</p>
          </div>
        </div>

        <div className="py-20">
          <h2 className="text-5xl text-gray-50 text-center p-8 mb-4">
            Treatments
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1 rounded-xl bg-gray-50 shadow-sm p-12">
              <h3 className="text-2xl text-center font-semibold mb-4">
                Reiki Healing
              </h3>
              <p>
                Reiki is a Japanese form of energy healing, which is a subset of
                alternative medicine. Reiki practitioners use a technique called
                palm healing or hands-on healing through which a universal
                energy is said to be transferred through the palms of the
                practitioner to the patient in order to encourage emotional or
                physical healing.
              </p>
            </div>
            <div className="col-span-1 rounded-xl bg-gray-50 shadow-sm p-12">
              <h3 className="text-2xl text-center font-semibold mb-4">
                Meditation Circle
              </h3>
              <p>
                This service is open to everyone. All meditation practice
                levels, including first timers, are welcome.
              </p>

              <h4 className="mt-4 font-semibold">Service Overview</h4>
              <p>
                This 30-minute session is a guided meditation which will help
                you remove negative energy, ground yourself, and connect with
                your inner self. The following areas of focus are part of this
                service:
              </p>
              <ul className="pl-8 mb-4 list-disc">
                <li>Clear your chakras, aura and energetic field</li>
                <li>Remove low vibrational energies</li>
                <li>Learn how to ground yourself</li>
                <li>Experience a deeper body connection</li>
              </ul>

              <h4 className="mt-4 font-semibold">Benefits</h4>
              <p>
                To experience the benefits of meditation, regular practice is
                necessary. It’s like a seed and once you cultivate a seed with
                love, the more it blossoms. Adding this practice to your daily
                routine enhances your life in many ways. The following are
                examples of benefits regular meditation offers:
              </p>

              <p className="mt-4 font-semibold">Physical:</p>
              <ul className="pl-8 mb-4 list-disc">
                <li>Lowers high blood pressure</li>
                <li>
                  Lowers the levels of blood lactate, reducing anxiety attacks
                </li>
                <li>
                  Increases serotonin production that improves mood and behavior
                </li>
                <li>Improves the immune system</li>
              </ul>

              <p className="mt-4 font-semibold">Mental:</p>
              <ul className="pl-8 mb-4 list-disc">
                <li>Anxiety decreases</li>
                <li>Emotional stability improves</li>
                <li>Creativity increases</li>
                <li>Sharpens the mind</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto lg:max-w-screen-xl p-8">
          <p className="text-2xl mb-4">Namaste Reiki and Meditation Circle</p>
          <div className="grid grid-cols-2">
            <div>
              <p className="text-xl">Address</p>
              <p>
                Bailey Close, <br />
                Martham, <br />
                Great Yarmouth, <br />
                Norfolk, NR29 4UD
              </p>
            </div>
            <div>
              <p className="text-xl">Lynda Warne</p>
              <p>Reiki Master</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
