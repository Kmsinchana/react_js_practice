import ToggleUseContext from "../context/ToggleContext";


export default function ToggleBtn(){

    const {theamMode,IdentifyMode} = ToggleUseContext()
    function buttonChangeAction(e){
        let toggleBtnStatus = e.currentTarget.checked
        console.log(e.target.checked)
        console.log(e.currentTarget)
        console.log(e.currentTarget.checked)
        if(toggleBtnStatus){
            IdentifyMode("dark")
        }else{
            IdentifyMode("light")
        }
    }

    return(
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={buttonChangeAction}
                // in general checked controls whether a checkbox is ON or OFF.
                // If checked is present, checkbox = ON
                // Here:
                // If isDark is true → checkbox turns ON
               // If isDark is false → checkbox turns OFF
            //    ********************************
              //Without checked, what happens?
              // Checkbox becomes uncontrolled:
              // <input type="checkbox" />
              // The browser controls the toggle — React does NOT know whether it's checked or not.
                checked ={theamMode === 'dark'}
            />
            {/* here div is It is only a visual slider UI. */}
            {/* if the input has peer then peere-checked means When the input is checked,
                  → change the div background
                  → move the round knob
                  → apply animations */}
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}