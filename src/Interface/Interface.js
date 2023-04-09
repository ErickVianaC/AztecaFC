import React from "react";

import Home from "../Pages/Home/Home";
import Historia from "../Pages/Historia/Historia";
import Redes from "../Pages/Redes/Redes";
import Elenco from "../Pages/Elenco/Elenco";
import Games from "../Pages/Games/Games";


function Interface() {
  return (
    <div className="interface">
      <Home/>
      <Historia />
      <Elenco/>
      <Redes/>
      <Games />
    </div>
  );
}

export default Interface;
