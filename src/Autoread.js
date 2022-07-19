// import { AutoGraphRounded } from '@mui/icons-material'
import React from 'react'
import firebase from './firebase'
import Authotp from './components/Authotp'

class Autoread extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified",response)
      },
      defaultCountry: "IN"
    });
  }

  // componentDidMount(){
  //   if ('OTPCredential' in window) {
  //     window.addEventListener('DOMContentLoaded', e => {
  //       const input = document.querySelector('input[autocomplete="one-time-code"]');
  //       if (!input) return;
  //       const ac = new AbortController();
  //       const form = input.closest('form');
  //       if (form) {
  //         form.addEventListener('submit', e => {
  //           ac.abort();
  //         });
  //       }
  //       navigator.credentials.get({
  //         otp: { transport:['sms'] },
  //         signal: ac.signal
  //       }).then(otp => {
  //         input.value = otp.code;
  //         if (form) form.submit();
  //       }).catch(err => {
  //         console.log("error__++++++++",err);
  //       });
  //     });
  //   }
  // }

  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          navigator.credentials.get({otp: {transport: ['sms']}})

          console.log("OTP has been sent",confirmationResult.verificationId)
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent",error)
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      console.log("User is verified",user)

      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>




      </div>
    )
  }
}
export default Autoread;




//https://api.authkey.io/request?authkey=cd292d4f2e410524&mobile=9140621042&country_code=91&sid=5315&name=Emproto&time=10



// if ('OTPCredential' in window) {
//   window.addEventListener('DOMContentLoaded', e => {
//     const input = document.querySelector('input[autocomplete="one-time-code"]');
//     if (!input) return;
//     const ac = new AbortController();
//     const form = input.closest('form');
//     if (form) {
//       form.addEventListener('submit', e => {
//         ac.abort();
//       });
//     }
//     navigator.credentials.get({
//       otp: { transport:['sms'] },
//       signal: ac.signal
//     }).then(otp => {
//       input.value = otp.code;
//       if (form) form.submit();
//     }).catch(err => {
//       console.log(err);
//     });
//   });
// }