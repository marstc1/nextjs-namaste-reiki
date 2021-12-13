import {
  Field,
  Form,
  Formik,
} from 'formik'

const Contact = () => {
  return (
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
            <p>Phone: 07984 828407</p>
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
  )
}

export default Contact
