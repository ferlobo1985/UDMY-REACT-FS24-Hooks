import { createContext, useState } from 'react';


const MyContext = createContext();
const MyProvider = (props) => {

    const [users,setUsers] = useState([
        {id:1,name:"Francis"},
        {id:2,name:"Steve"},
        {id:3,name:"Miles"}
    ])


    return(
        <MyContext.Provider value={users}>
            { props.children }
        </MyContext.Provider>
    )
}


export {MyContext,MyProvider}
