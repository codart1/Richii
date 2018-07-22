import { withFormik } from 'formik'
import Register from '../../components/Register'
import * as yup from 'yup'

const ValidationForm = withFormik({
  mapPropsToValues: props => ({
    email: '',
    password: '',
    fullName: '',
    idCardNumber: '',
    phoneNumber: ''
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: yup
      .string()
      .required('password khong duoc de trong')
      .min(6, 'password phai co it nhat ${min} ki tu') // eslint-disable-line no-template-curly-in-string
  }),
  handleSubmit: async (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */
    }
  ) => {
    setSubmitting(true)
    await props.doRegister(values)
    setSubmitting(false)
  }
})(Register)

export default ValidationForm
