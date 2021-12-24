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

const schema = yup.object().shape({
  name: yup.string().required('Please enter you name'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  phone: yup.string().required(' Please enter a valid phone number'),
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
    return <p>Thank you for your message, I will be in touch soon.</p>
  }

  return (
    <Form method="POST" name="contact" action="/" data-netlify="true">
      <Field name="form-name" value="contact" type="hidden" />
      <label htmlFor="Name">Name</label>
      <Field id="Name" name="name" type="text" />
      <ErrorMessage name="name" />
      <label htmlFor="Email">Email</label>
      <Field id="Email" name="email" type="email" />
      <ErrorMessage name="email" />
      <label htmlFor="Email">Phone number</label>
      <Field id="Phone" name="phone" type="text" />
      <ErrorMessage name="phone" />
      <label htmlFor="Message">Message</label>
      <Field id="Message" name="message" rows="4" type="text" as="textarea" />
      <ErrorMessage name="message" />
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
