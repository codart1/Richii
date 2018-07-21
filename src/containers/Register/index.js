import React from 'react'
import Register from '../../components/Register'
import firebase from '../../Firebase'
import messages from './messages'
import Notice from '../../shared/Notice'
import messageHelper from '../../shared/message-helper'

export default class RegisterContainer extends React.Component {
  state = {
    message: null,
    messageType: 'info',
    complete: true
  }

  register = async data => {
    console.log(data)
    const { email, password } = data

    try {
      this.setState({ complete: false })
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      console.log('Created user: ', user)
      firebase.auth().currentUser.sendEmailVerification()
      this.setMessage(messageHelper(messages, 'user_created'), 'info')
    } catch (err) {
      console.log('Error: ', err)
      this.setMessage(messageHelper(messages, err.code), 'err')
    } finally {
      this.setState({ complete: true })
    }
  }

  setMessage(message, messageType) {
    this.setState({ message, messageType })
  }

  render() {
    const { message, complete, messageType } = this.state

    const props = {
      complete,
      onRegister: this.register,
      message: message && <Notice type={messageType}>{message}</Notice>
    }

    return (
      <div>
        <Register {...props} />
      </div>
    )
  }
}
