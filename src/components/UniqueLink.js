import {React, useContext, useState} from 'react'
import { useLocation, Link, useNavigate} from 'react-router-dom'
import { LinksContext } from '../context/LinksContex'
import { v4 as uuidv4 } from 'uuid'

export default function UniqueLink() {
  const location = useLocation();
  const navigate = useNavigate();
  const userLink = window.location.href
  console.log("path", location.pathname)
  
    const {inputData, username} = useContext(LinksContext);
    const [isCopied, setIsCopied] = useState(false)

    // copy to clip board function 
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(userLink)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 10000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
  return (
    <div>
      <h1>Hey {username}</h1>
        <h2>This is your link below</h2>
        {userLink}
        {inputData.length >= 0 ? inputData.map(data => {
            return(<div key={uuidv4()}>
                <p >{data.label}</p>
                <p> {data.urls}</p>
                </div>)
            

        }) : "you have not provided any link"}
        

        <button onClick={handleCopyClick}>{isCopied ? 'Copied' : 'Copy link'}</button>
        <div>
            <button onClick={() => navigate(-1)}>Edit</button>
        </div>
        <Link to='/'>Create New Link Tree</Link>
    </div>
  )
}
