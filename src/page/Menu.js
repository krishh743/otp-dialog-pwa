import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
// import { isNumericField } from '../utils/ValidationUtils';

function Menu() {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  const handleClick = () => {
    navigate("../", { replace: false });
  };

  return (
    <div style={{ marginTop: "20px", color: "green" }}>
    <h1>This is menu Page</h1>
      <ArrowBackIcon  onClick={handleClick} fontSize="large" />
<div style={{ marginTop: "20px", color: "blue" }}>

<li>bank loans forms</li>
<li> loans policies</li>
<li>New car loans application</li>

<li>bank loans forms</li>


</div>
      
    </div>
  );
}

export default Menu;

