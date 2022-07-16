import React, { useEffect } from "react";
import Form from "../components/Form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function BankForm() {
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
    <div>
      BankForm
      <ArrowBackIcon onClick={handleClick} fontSize="large" />
      <Form />
    </div>
  );
}

export default BankForm;
