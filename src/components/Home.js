import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { LinksContext } from '../context/LinksContex';


export default function Home() {
    const navigate = useNavigate();
    const {addUser} = useContext(LinksContext)
    const [username, setUsername] = useState('');
    const [okbtn, setOkbtn] = useState(false)

    const handleButton = () => {
      addUser(username)
      if(username !== ''){
        navigate('/create');
      }else{
        setOkbtn(true)
      }
    }
    const handleOkBtn = () => {
      setOkbtn(false)
    }

  return (
    <div className=' p-10 '>
      <div className='my-56'>
        <h1 className=' text-5xl text-theme text-center '>Share all your profile with one link</h1>
        <div className='my-10 mx-14'>
          <input type="text" placeholder="Enter your name" onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={handleButton}>Get Started</button>
        </div>
        <div className={okbtn ? "block" : "hidden"}>
          <h3> Kindly enter your name or username that is used across all platforms</h3>
          <button  onClick={handleOkBtn}>Ok</button>
        </div>
        </div>
    </div>
  )
}
