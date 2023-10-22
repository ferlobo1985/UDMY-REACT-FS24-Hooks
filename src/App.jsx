import User from "./components/user";
import { MyProvider } from "./context";
import Calculation from "./components/calculation";

const App = () => {

    return(
        <MyProvider>
            {/* <User/> */}
            <Calculation/>
        </MyProvider>
    )
}

export default App;