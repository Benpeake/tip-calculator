import { useEffect, useState } from 'react'
import PercentageButtons from './PercentageButtons'
import './tipcalc.css'

function TipCalculator () {

    const [bill, setBill] = useState('')
    const [numOfPeople, setNumOfPeople] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [tipTotalper, setTipTotalper] = useState(0)
    const [overallper, setOverallper] = useState(0)

  
//reset function
    function handleReset(event){
        event.preventDefault()
        setBill('')
        setNumOfPeople(1)
        setTipPercentage(0)
        document.querySelector('.tip-input').value = 0
    }
//set the bill
    function changeBill(event) {
        setBill(event.target.value)
    }

//set num of people
    function changeNumOfPeople(event) {
        setNumOfPeople(event.target.value)
    }

// set tip percentage
function handleTipPercentage(event) {
    setTipPercentage(event.target.value)
}

//return values
useEffect(() =>{
    let tipTotal = bill * (tipPercentage / 100)
    let tipPerPerspn = tipTotal / numOfPeople
    let billValue = bill / numOfPeople
    let totalPayment = billValue + tipPerPerspn

    if (bill>0){
        setTipTotalper(tipPerPerspn.toFixed(2))
        setOverallper(totalPayment.toFixed(2))
    }
    if (bill <= 0){
        setTipTotalper(0)
        setOverallper(0)
        setTipPercentage(0)
    }
    if (numOfPeople <= 0){
        setTipTotalper(0)
        setOverallper(0)
    }

}, [bill, numOfPeople, tipPercentage])

    return(
        <div>
            <div className='container'>

                <div className='left-col'>

                    <div className='bill-input'>
                        <label htmlFor='bill-value'>Bill</label>
                        <div className='input-container'>
                         <span className='currency-symbol2'>£</span>
                        <input id='bill-value' type='text' placeholder='0' value={bill} onChange={changeBill}
                        // only numbers
                        onInput={(e) =>{
                            e.target.value = e.target.value.replace(/[^0-9.]/g, '')
                        // limit input characters
                        if (e.target.value.length > 7) {
                            e.target.value = e.target.value.slice(0, 7);
                          }
                        }}
                        />
                        </div>
                    </div>

                    <div className='tip-percentage'>
                        <p className='instrustion'>Select tip %</p>
                        <div className='button-container'>
                            <PercentageButtons tipPercentage={tipPercentage} handleTipPercentage={handleTipPercentage} value={5} text='5%'/>
                            <PercentageButtons tipPercentage={tipPercentage} handleTipPercentage={handleTipPercentage} value={10} text='10%'/>
                            <PercentageButtons tipPercentage={tipPercentage} handleTipPercentage={handleTipPercentage} value={15} text='15%'/>
                            <PercentageButtons tipPercentage={tipPercentage} handleTipPercentage={handleTipPercentage} value={20} text='20%'/>
                            <PercentageButtons tipPercentage={tipPercentage} handleTipPercentage={handleTipPercentage} value={25} text='25%'/>
                            <PercentageButtons tipPercentage={tipPercentage} handleTipPercentage={handleTipPercentage} value={50} text='50%'/>
                        </div>            
                    </div>

                    <div className='input-container'>
                    <span className='currency-symbol'>%</span>
                    <input onChange={handleTipPercentage} placeholder='other %' className='tip-input' type='text'
                        // only numbers
                        onInput={(e) =>{
                            e.target.value = e.target.value.replace(/[^0-9]/g, '')
                        // limit input characters
                        if (e.target.value.length > 2) {
                            e.target.value = e.target.value.slice(0, 2);
                          }
                        }}
                    />
                    </div>
                

                    <div className='people-number'>
                        <div className='number-of-people'>
                            <label htmlFor='people'>Number of people</label>

                        </div>
                        <input id='people' type='text' value={numOfPeople} onChange={changeNumOfPeople}
                        // only numbers
                        onInput={(e) =>{
                            e.target.value = e.target.value.replace(/[^1-9]/g, '')
                        // limit input characters
                        if (e.target.value.length > 2) {
                            e.target.value = e.target.value.slice(0, 2);
                          }
                        }}
                        />
                    </div>
                </div>

                <div className='right-col'>
                    <div className='right-col-info'>
                    <div className='tip-amount'>
                        <div>
                            <p>Tip Amount</p>
                            <p className='small-print'>/ per person</p>
                        </div>
                        <h2>£ {tipTotalper}</h2>
                    </div>

                        <div className='tip-amount'>
                            <div>
                                <p>Total</p>
                                <p className='small-print'>/ per person</p>
                            </div>
                            <h2>£ {overallper}</h2>
                        </div>
                    </div>

                    <button className='reset' onClick={handleReset}>Reset</button>

                </div>

            </div>
        </div>
    )
}

export default TipCalculator