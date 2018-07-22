import React from 'react'
import Register from './validation'
import firebase, { db } from '../../Firebase'
import messages from './messages'
import Notice from '../../shared/Notice'
import messageHelper from '../../shared/message-helper'

export default class RegisterContainer extends React.Component {
  state = {
    message: null,
    messageType: 'info'
  }

  register = async data => {
    console.log(data)
    const { email, password, ...restData } = data

    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      console.log('Created user: ', user)
      firebase.auth().currentUser.sendEmailVerification()

      db.collection('users')
        .doc(email)
        .set(restData)
      console.log('Create user meta data succesfully')

      this.setMessage(messageHelper(messages, 'user_created'), 'info')
    } catch (err) {
      console.log('Error: ', err)
      this.setMessage(messageHelper(messages, err.code), 'err')
    }
  }

  setMessage(message, messageType) {
    this.setState({ message, messageType })
  }

  render() {
    const { message, complete, messageType } = this.state

    const props = {
      complete,
      doRegister: this.register,
      message: message && <Notice type={messageType}>{message}</Notice>
    }

    return (
      <div>
        <Register {...props} />
      </div>
    )
  }
}
