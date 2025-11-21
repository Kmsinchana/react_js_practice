import { useState } from 'react'
import './App.css'
//import InputBox from './Component/InputBox'
import { InputBox } from './Component';
import useFetchData from './Customhook/useFetchData'

function App() { 
  
  const [from ,setFrom] = useState('usd')
  // problem the value is not getting set to the default one "usd" for that we need to pass the selected currency valu to input box to set the value
  //another problem the value is not getting selected from drop down for that we need to ssend the setForm

  const [to, setTo] = useState('inr')
  const [currencyAmount, setCurrencyAmount] = useState(1)
  // A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: 
  // this means that when the page is rendered
  // render 1 → value = undefined (uncontrolled input)
  // render 2 → value = 100 (controlled input)
  // solution we can initialize the convertedCurrency value
  const [convertedCurrency, setConvertedCurrency] = useState(0)
  const currencyInfo =useFetchData(from)
  // to apply maps we need the data to be in array format
  const getCurrencyKey = Object.keys(currencyInfo)


  function conversionOfCurrency(){
    // input will be in the form of string we need to conver to number while performing the conversion
    setConvertedCurrency(Number(currencyAmount)*currencyInfo[to])
  }

  function swapFunction(){
    setFrom(to)
    setTo(from)
    setConvertedCurrency(0)
  }
  return (
    <>
      <div className='w-full h-screen flex flex-col flex-wrap justify-center items-center'
        style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/040/959/652/non_2x/currency-exchange-concept-with-graph-chart-and-dollar-coin-forex-trading-financial-markets-and-global-economy-design-background-illustration-vector.jpg')` }}>
        <h1 className='text-white'>currency converter</h1>
        <div className='p-4 rounded-lg backdrop-blur-sm bg-white/30'>
        {/* function receives one object, not two separate arguments. if we destucture it then only we can two argument */}
           <InputBox
              label= "From"
              currencyOption = {getCurrencyKey}
              defaultCurrency = {from}
              selectedCurrancy = {setFrom}
              amount = {currencyAmount}
              enteredAmount ={setCurrencyAmount}
            />
             <div className='flex justify-center'>
            <button type="button" 
            // An element with position: absolute; is positioned relative to the nearest positioned ancestor (with position other than static).
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer"
            onClick={swapFunction}>
            Swap</button>
          </div>
             <InputBox
              label= "To"
              currencyOption = {getCurrencyKey}
              defaultCurrency={to}
              selectedCurrancy={setTo}
              amount = {convertedCurrency}
              // InputBox.jsx:22 Received the string `true` for the boolean attribute `disabled`. Although this works, it will not work as expected if you pass the string "false". Did you mean disabled={true}?
              // React treats "true" (string) and true (boolean) differently.
              disabeled = {true}
            />
          <div className='flex justify-center'>
            <button type="button" 
            className="bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer"
            onClick={conversionOfCurrency}
            >convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
