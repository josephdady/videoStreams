import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  compnentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "13765405435-raf40qc3a8ao9t392if7j9m9vm5dq4rn.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are sigend in</div>;
    } else if (this.state.isSignedIn) {
      return <div>You are signed in</div>;
    } else {
      return <div>You are not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
