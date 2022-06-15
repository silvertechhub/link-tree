import {React, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { LinksContext } from '../context/LinksContex';


export default function CreateTree() {

    const [inputData, setInputdata] = useState([
        {   label: "", urls:""},
        
        ]);

    // const [userName, setUserName] = useState('');
    const {addLink, username} = useContext(LinksContext);
    const navigate = useNavigate();

    // handle change function
    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list =[...inputData];
        list[index][name] = value
        setInputdata(list);
       
    }
    // generate link function
    const GenerateLink = (e) => {
        e.preventDefault();
        addLink(inputData);
         navigate(`/uniquelink/${username}`)
        
    }

    // add input function
    const handleAddInput =() =>{
        setInputdata([...inputData,  {   label: "", urls:""}])
    }
    // remove input function
    const handleRemoveInput = (index) => {
        const list =[...inputData]
        list.splice(index, 1 );
        setInputdata(list)
    }

  return (
    <div>

        
        {inputData.map((list, i) => {
             return(
                <div key={i}>
                <div>
                    <label>name</label>
                    <input type="text" name='label' value={list.label} onChange={e => handleChange(e, i)} />
                </div>
                <div>
                    <label>Url</label>
                    <input type="url" name='urls' value={list.urls} onChange={e => handleChange(e, i)}/>
                </div>
            </div>
             )
        }
        ) }
       
       
        <button onClick={handleAddInput}>
            add input field
        </button>
        {inputData.length !== 1  && <button onClick={handleRemoveInput}>remove</button>}
        <button onClick={GenerateLink}>Generate Link</button>
        <div>
            <button onClick={() => navigate(-1)}>back</button>
        </div>
    </div>
  )
}
