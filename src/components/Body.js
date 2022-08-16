import Carousel from 'react-bootstrap/Carousel';


import Container from 'react-bootstrap/Container';
import Prom1 from "./Prom1"
import Prom2 from "./Prom2"
import Prom3 from "./Prom3"
import Prom4 from "./Prom4"
import "./styles/body.css"
import Grid from "./Grid"

import React from 'react'

function Body() {
  return (
    <div>
      <Prom1/>
      <Prom2/>
      <Prom3/>
      <Prom4/>
    </div>
  )
}

export default Body

