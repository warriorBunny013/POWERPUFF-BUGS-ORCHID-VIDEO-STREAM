import React,{useState} from 'react'
import {GoSearch} from "react-icons/go"
import Modal from './Modal';


const Searchbar= ({setResults})=> {
    const [input, setInput] = useState("");
    // const [ismodal, setismodal] = useState(false);

    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          });
          setResults(results);
          // {input.length != 0 && <Modal content = {results}/>} 
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  


  return (
      <div className="flex row border-solid border-2 w-96 pl-3 rounded-full border-white-600 bg-white flex-row align-middle">
        
        
        <GoSearch id="search-icon" className=" h-8" style = {{color : "black"}}/>
          <input className="outline-none bg-white-600 pl-5 text-black w-full rounded-full" placeholder="Search"  value={input}
        onChange={(e) => handleChange(e.target.value)}
          />

        </div>
      
  )
}

export default Searchbar
