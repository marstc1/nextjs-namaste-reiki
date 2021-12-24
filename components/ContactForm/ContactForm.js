import {
  ErrorMessage,
  Field,
  Form,
} from 'formik'
import * as Scroll from 'react-scroll'
import * as yup from 'yup'

const scroller = Scroll.scroller

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const contactNumberValidation = yup
  .string()
  .required('Please enter a contact number')
  .matches(
    /(^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$)/,
    'Please enter a valid UK telephone number'
  )

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  phone: contactNumberValidation,
  message: yup.string().required('Please enter a message'),
})

const onSubmit = (
  values,
  { resetForm, setErrors, setStatus, setSubmitting }
) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...values }),
  })
    .then(() => {
      resetForm({})
      setStatus({ success: true })
      scroller.scrollTo('Contact')
      console.log('Success')
    })
    .catch((error) => {
      console.log(error)
      setStatus({ success: false })
      setSubmitting(false)
      setErrors({ submit: error.message })
    })
}

const ContactForm = ({ status, isSubmitting }) => {
  if (status) {
    return (
      <div className="h-96 mb-24">
        <p>Thank you for your message, I will be in touch soon.</p>
      </div>
    )
  }

  return (
    <Form method="POST" name="contact" action="/" data-netlify="true">
      <Field name="form-name" value="contact" type="hidden" />
      <label htmlFor="Name">Name</label>
      <Field id="Name" name="name" type="text" />
      <div className="text-sm font-normal text-red-500 mt-1">
        <ErrorMessage name="name" />
      </div>

      <label htmlFor="Email">Email</label>
      <Field id="Email" name="email" type="email" />
      <div className="text-sm font-normal text-red-500 mt-1">
        <ErrorMessage name="email" />
      </div>

      <label htmlFor="Email">Phone number</label>
      <Field id="Phone" name="phone" type="text" />
      <div className="text-sm font-normal text-red-500 mt-1">
        <ErrorMessage name="phone" />
      </div>

      <label htmlFor="Message">Message</label>
      <Field id="Message" name="message" rows="4" type="text" as="textarea" />
      <div className="text-sm font-normal text-red-500 mt-1">
        <ErrorMessage name="message" />
      </div>

      <button
        type="submit"
        className="float-right mt-8"
        disabled={isSubmitting}
      >
        Send
      </button>
    </Form>
  )
}

export { ContactForm, onSubmit, schema }
