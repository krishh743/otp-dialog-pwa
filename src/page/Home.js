import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div  style={{display: 'flex', justifyContent: 'center'}}>
      <Button  size="large">
        <Link to="./menu">menu</Link>
      </Button>
      <Button size="large">
        <Link to="./bankform">bankform</Link>
      </Button>
      <Button size="large"> 
       <Link to="./loans">loans</Link>
      </Button>
      <Button size="large"> 
       <Link to="./applications">applications</Link>
      </Button>
    </div>
  );
}

export default Home;
