import SearchList from "./SearchList";
import './Modal.css';

function Modal(props){
    function cancelHandler(){
        props.onCancel();
       }
    

    return(
    <div className = 'modal'>
        <SearchList onClick = {cancelHandler} results = {props.content} />
    </div>
    );
}

export default Modal;
