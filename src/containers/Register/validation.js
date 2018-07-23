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
      .email('Email không hợp lệ')
      .required('Email không được để trống'),
    password: yup
      .string()
      .required('Password không được để trống')
      .min(6, 'Password phải có ít nhất ${min} kí tự') // eslint-disable-line no-template-curly-in-string
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
