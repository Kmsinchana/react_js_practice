
function InputBox(
   { label,
    currencyOption =[],
    defaultCurrency,
    selectedCurrancy,
    amount,
    enteredAmount,
    // this is to make the input field for to to be disabled
    disabeled = false 
   }
) {
    return(
    <div className={`bg-white p-3 rounded-lg text-sm flex mb-2`}>
        <div className="flex flex-col w-1/2 ">
            <label
                htmlFor=""
                className='text-black/40 mb-2 inline-block'>
                {label}
            </label>
            {/* here value ="1" will set the default value as 1 */}
            <input type="number" name="" id="" 
            min={1}
            value={amount}
            // for select we use onchange
            // the blow code will take input as a string if i have multiplication then its fine if i have addition then "1"+1 will become 11
            onChange={(e)=>{enteredAmount(e.target.value)}}
            disabled = {disabeled}
            className="outline-none w-full bg-transparent py-1.5"
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select name="" id=""  
            value = {defaultCurrency} 
            onChange={(e)=>selectedCurrancy(e.target.value)}
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'>
                {/* i have used ()=>() because i need not to return anything */}
                {/* key must be required becuse each child must have unique props */}
                {/* to loop throgh any item the object should be in form of array hence there is need to use Object.key()(see in app.js) to convert if we need key value both then use Object.entity()  */}
                {currencyOption.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
)}

export default InputBox;