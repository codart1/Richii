import React from "react";
import Register from "../../components/Register";
import firebase from "../../Firebase";
import messages from "./messages";

export default class RegisterContainer extends React.Component {
  state = {
    message: null
  };

  register = async data => {
    console.log(data);
    const { email, password } = data;

    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (err) {
      console.log(err);
      this.setState({
        message: messages[err.code]
      });
    }
  };

  render() {
    const props = {
      onRegister: this.register,
      message: this.state.message
    };

    return (
      <div>
        <Register {...props} />
      </div>
    );
  }
}
