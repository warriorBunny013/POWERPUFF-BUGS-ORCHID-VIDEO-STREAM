import React,{useState} from "react";
import Searchbar from "./Searchbar";
import SearchList from './SearchList';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
    const [results,setResults]=useState([]);

    const cancelHandler = () => {
        setResults([]);
    }
     

    return (
        <>
       <div className="w-full mt-10 mb-10 text-white flex justify-between p-4 bg-stone-800 mb-2">
        <div className="logo">
         <Link to= "/">   <h1 className="text-3xl pl-2 text-sky-900 font-bold font-serif">O<span>R</span>CHID</h1></Link>
        </div>
        </div>
         </>
    )
}
export default Navbar