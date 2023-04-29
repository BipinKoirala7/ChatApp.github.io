import { createContext } from "react";

const UserContext = createContext()

function UserContextProvider(props) {
    const AdminInfo = {
        gender: "Male",
        name: "Bipin koirala",
        profession:'Senior Developer',
        location: {
            city: 'Pokhara',
            state: "Gandaki",
            country: 'Nepal',
            postCode:'33400'
        },
        login: {
            uuid: 'Admin',
            email: 'bipenkoirala123@gmail.com',
            username: 'Bipin koirala',
            password: 'Bipinkoirala7777777',
        },
        DOB: {
            date: '2005/05/03 Sunday',
            age:'18'
        },
        phone: '9846472341',
        cell: '061-560505',
        picture: {
            large: '',
            medium: '',
            thumbnail:'',
        },
        country:'Nepal'

        }
        return <UserContext.Provider value={AdminInfo}>{props.children}</UserContext.Provider>
    }

export {UserContext,UserContextProvider}