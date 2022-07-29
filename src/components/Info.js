import React from 'react'
import delivery from "./img/delivery.svg"
import discount from "./img/discount.svg"
import card from "./img/card.svg"
import "./styles/info.css"
function Info() {
  return (
    <div>
        <div className='fle'>
             <img src={delivery} alt="delivery" className='delivery'/>
                <p className='paragraph'>Envios gratis</p>
                <p>A partir de 4.000 gs </p>


                <img src={card} alt="card credit" className='card01'/>
                <p className='paragraph'>Hasta 18 cuotas sin interés</p>
                <p>Con tarjetas seleccionadas</p>
                <img src={discount} alt="price discount" className='discount'/>
                <p className='paragraph'>5% de descuento en tu compra</p>
                <p>Pagando con transferencia bancaria</p>
        </div>

        




    </div>
  )
}

export default Info