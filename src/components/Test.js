import React, { Component } from 'react'

export class Test extends Component {
a=()=>{
    if ("OTPCredential" in window) {
        const ac = new AbortController();
      
        navigator.credentials
          .get({
            otp: { transport: ["sms"] },
            signal: ac.signal
          })
          .then((otp) => {
            this.setState({ otp: otp.code });
            ac.abort();
          })
          .catch((err) => {
            ac.abort();
            console.log(err);
          });
      }
    }
  render() {
    return (
      <div>Test</div>
    )
  }
}

export default Test