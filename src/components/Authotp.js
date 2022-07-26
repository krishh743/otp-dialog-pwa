import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Authotp() {
  const [mobile, setMobile] = useState("");
  const handelChange = (event) => {
    setMobile(event.target.value);
  };
  const navigate = useNavigate();

  // const getUserDataa = () => {
  //   
  // };

  // let url = `https://api.authkey.io/request?authkey=cd292d4f2e410524&mobile=${mobile}&country_code=91&sid=5315&company=emproto&time=10mins&otp=1234`;
  let url=`https://api.authkey.io/request?authkey=56b322950fb71ea3&mobile=${mobile}&country_code=91&sid=5254&company=Emproto&time=10`
  async function getUserData() {
    try {
      const response = await axios.get(url);
      console.log(response);
      console.log(mobile);
      navigate("../login", { replace: false });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <TextField
        nput
        alt="type a number"
        onChange={handelChange}
        value={mobile}
      />
      <Button
        size="large"
        className="btn btn-primary"
        variant="contained"
        onClick={getUserData}
      >
        send otp
      </Button>
    </div>
  );
}

export default Authotp;









// import React from 'react'
// import axios from "axios";
// import Button from "@mui/material/Button"
// import swal from 'sweetalert';
// import { Link } from 'react-router-dom';

// function Authotp() {

//     let url="https://api.authkey.io/request?authkey=cd292d4f2e410524&mobile=9140621042&country_code=91&sid=5315&company=emproto&time=10mins&otp=1234";
//     async function getUserData() {
//         try {
//             const response = await axios.get(url);
//             console.log(response);
//             swal("OTP sent on your mobile number")
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }

//   return (

//     <div>

//     <Button  variant="outlined" primary="success" className="btn btn-primary" >

//     <Link  to="./login" >send otp</Link>
//     </Button>
//     </div>
//   )

// }

// export default Authotp
// // onClick={getUserData}
