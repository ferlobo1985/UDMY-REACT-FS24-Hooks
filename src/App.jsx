import User from "./components/user";


const App = () => {

    const users = [
        {id:1,name:"Francis"},
        {id:2,name:"Steve"},
        {id:3,name:"Miles"}
    ]

    return(
        <>
            <User users={users}/>
        </>
    )
}

export default App;