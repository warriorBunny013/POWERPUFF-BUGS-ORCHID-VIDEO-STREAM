
// import GroupCard from './GroupCard'
// import Groups from './components/Pages/Groups/CreateGroup'
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Search, Button, Transition } from 'semantic-ui-react'
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
const Group=(props)=> {
    const [url,setURL] = useState('');
    const [response,setResponse] = useState('');
    // const history = useNavigate();
    const history=createBrowserHistory()
    const [mounted, setMounted] = useState(false);

    const youtubeParser = (url) => {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = (url).match(regExp);
        console.log(match);
        return match && match[7].length === 11 ? match[7] : false;
};
const onSubmit = (e)=>{
    e.preventDefault();
    var url_id = youtubeParser(url);
    const sessionID = uuid().slice(0, 6);
    console.log("landing props:",props);
    console.log('sessid',sessionID,"urlid:",url_id);
    props.session(url_id, sessionID, true);
    if (!url_id) {
        return;
      }
    history.push('/watch/host/'+sessionID+'/'+url_id);
    console.log('history:',history);
    return;
}
useEffect(() => setMounted(true), []);

  return (<>
      <div className="bg-grey-500 flex justify-center flex-col mx-auto">
          {/* <Transition visible={mounted} animation='scale' duration={500}> */}
          {/* <Transition visible={mounted} animation='scale' duration={500}> */}
        <img src="./watchparty.gif" alt="watch" className="w-1/6 mx-auto"/>
        {/* <form>    */}
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-96 mx-auto mb-10">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <Link to="/watch/host/ueioqwjckasjdlzc/TnakUFi0J1c">
                {/* <input onChange={e=>{setURL( e.target.value)}}  type="search"  id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Room name.."/> */}
                  <button className='font-bold text-red-500 text-2xl'>Enter </button>
                </Link>
                 </div>
        {/* </form> */}
        {/* </Transition> */}
    
<a  className="block mt-2 max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Step 1:</span> Create a Room to start watch party with your friends 🎉</p>
</a>
<a  className="block mt-2 max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Step 2:</span>Add participants or invite your friends via Invite Link ✉️</p>
</a>
<a className="block mt-2 max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Step 3:</span>Stream and chat with your friends and make wonderful memories😎</p>
</a>


        


      </div>
    </>
  );
}

export default Group;
