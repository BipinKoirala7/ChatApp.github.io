import { createContext, useState } from "react";

const UserContext = createContext()

function UserContextProvider(props) {
    console.log("UserContext rendered");
    const [AdminInfo, setAdminInfo] = useState({
        gender: "Male",
        name: "Bipin koirala",
        profession: 'Senior Developer',
        location: {
            city: 'Pokhara',
            state: "Gandaki",
            country: 'Nepal',
            postCode: '33400'
        },
        login: {
            uuid: 'Admin',
            email: 'bipenkoirala123@gmail.com',
            username: 'Bipin koirala',
            password: 'Bipinkoirala7777777',
        },
        DOB: {
            date: '2005/05/03 Sunday',
            age: '18'
        },
        phone: '9846472341',
        cell: '061-560505',
        picture: {
            large: '',
            medium: '../../../assests/Bipin.jpg',
            thumbnail: '',
        },
        country: 'Nepal',
    })
    function changeInfo(newObj) {
      setAdminInfo(newObj)  
    }
        return <UserContext.Provider value={{AdminInfo:AdminInfo,ChangeAdminInfo:changeInfo}}>{props.children}</UserContext.Provider>
    }

export {UserContext,UserContextProvider}