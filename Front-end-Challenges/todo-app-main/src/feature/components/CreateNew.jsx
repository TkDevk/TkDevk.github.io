import PropTypes from 'prop-types'
import { useState } from 'react';

const CreateNew = ({addTodo}) => {
  const [inputText,setInputText] = useState("");
   // when you submit a form the page it rolad it self os in order to prevent this i'm going to use the preventDefault event method : //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

       
   const createTodo=(e)=>{
    setInputText(e.target.value)
   }

   const handleSubmit =(e)=>{
    e.preventDefault();
    addTodo(inputText)
    setInputText("")
  }
  
    return (   
        
        <form className="Create-new-container" onSubmit={handleSubmit}>
            <figure 
            className="Check-TODO">
            </figure>
            <input 
            className="Input-check-box" 
            type="text" 
            placeholder="Create a new todo..." 
            size="50" 
            onChange={createTodo}
            value={inputText}
            />
        </form>

        
    )

}

CreateNew.propTypes ={
  createTextTodo : PropTypes.any,
  inputEnter : PropTypes.any,
  showInputText : PropTypes.any,
  addTodo: PropTypes.any,
}

export default CreateNew
