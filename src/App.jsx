import { useRef,forwardRef } from "react"

const App = () => {
    const textInput = useRef();
    const triggerHandler = () => {
        console.log(textInput.current)
    }

    return(
        <>
           <h1>Form:</h1>
           <InputComponent ref={textInput}/>
           <button onClick={triggerHandler}>
                Trigger
           </button>
        </>
    )
}

const InputComponent = forwardRef((props,ref) =>{
    return  <input type="text" ref={ref}/>
})





export default App;