import User from "./components/user";
import { MyProvider } from "./context";

const App = () => {

    return(
        <MyProvider>
            <User/>
        </MyProvider>
    )
}

export default App;