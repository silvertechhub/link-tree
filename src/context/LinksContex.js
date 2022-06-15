import { React, createContext, useState } from "react";


export const LinksContext = createContext();


export default function LinksContexProvider(props) {
    const [inputData, setInputdata] = useState([]);
    const [username, setUsername] = useState("")

    const addLink = (inputData) => {
        setInputdata([
            ...inputData, inputData
        ])
    }
    const addUser = (user) => {
        setUsername(user)
    }
  return (
    <LinksContext.Provider value={{inputData, username, addUser, addLink}}>
        {props.children}
    </LinksContext.Provider>
  )
}
