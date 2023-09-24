import { useState } from 'react'
import './buttons.css'

function PercentageButtons(props){

    return(

        <button onClick={props.handleTipPercentage} value={props.value} className={props.tipPercentage == props.value ? 'button-selected' : 'button'}>{props.text}</button>
    )
}

export default PercentageButtons