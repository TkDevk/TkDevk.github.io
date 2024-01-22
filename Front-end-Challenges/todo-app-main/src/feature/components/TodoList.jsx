import CreateNew from "./CreateNew"
import Theme from "./Theme"
import ShowList from "./ShowList"
import FilterList from "./FilterList"
import PropTypes from "prop-types"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoList = ({changeColor:changeColor, darkMode:darkMode}) => {
    const [checkClick, setCheckClick] = useState(false)
    const [deleteClick, setDeleteClick] = useState(false)
    /*
    I need to create unique identifiers that generates UUIDs per task, also create an array so i can appen the new todos
    
    */

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos(
            [...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false,
            }]
        )

    }
    const todoCompleted = (id) =>{
        setTodos(
            todos.map(
                todo=>
                todo.id === id? 
                {...todo, completed: !todo.completed}
                :todo
            )
        )
    }

    /*Tricky one Enter key goes like 13 or Enter, i tried with e.keyCode but it didn't work o i checked that onKeydown share the same property as well */

    /*Passing event thorough props it was fun tho uwu*/


    function handleClick(){
        setCheckClick(
         prevValue => !prevValue
        )
       
 }
 const handleDelete = (index) => {
    // Implement logic to delete the todo item at the given index
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setDeleteClick(updatedTodos);
 }
    return (
        <section className="TODO-container">
            <Theme changeColor={changeColor}  darkMode={darkMode} />
            <CreateNew addTodo={addTodo} />
            <ul className='TODO-list-container'>  
            {deleteClick ? null :
        
        <li className='New-todo'>
             <figure 
            onClick={handleClick}
            className="Check-TODO">
                 <picture 
                
                className="Icon-Checked">
            <img src="/icon-check.svg"
                alt="" />
        </picture> 
        </figure>
          <s>Complete online JavaScript course</s>
        <picture 
        onClick={handleDelete}
        className='Delete-todo'>
        
            <img src="icon-cross.svg" 
        alt="" />
        </picture>
        </li>}
            {deleteClick ? null :
        
        <li className='New-todo'>
             <figure 
            onClick={handleClick}
            className="Check-TODO">
                {checkClick &&<picture 
                
                className="Icon-Checked">
            <img src="/icon-check.svg"
                alt="" />
        </picture> }
        </figure>
           { checkClick?<s>Jag Around the park 3x</s>  : 'Jag Around the park 3x' }
        <picture 
        onClick={handleDelete}
        className='Delete-todo'>
        
            <img src="icon-cross.svg" 
        alt="" />
        </picture>
        </li>}
   
        {deleteClick ? null :
        
        <li className='New-todo'>
             <figure 
            onClick={handleClick}
            className="Check-TODO">
                {checkClick &&<picture 
                
                className="Icon-Checked">
            <img src="/icon-check.svg"
                alt="" />
        </picture> }
        </figure>
           { checkClick?<s>10 minutes meditation</s>  : '10 minutes meditation' }
        <picture 
        onClick={handleDelete}
        className='Delete-todo'>
        
            <img src="icon-cross.svg" 
        alt="" />
        </picture>
        </li>}

        {deleteClick ? null :
        
        <li className='New-todo'>
             <figure 
            onClick={handleClick}
            className="Check-TODO">
                {checkClick &&<picture 
                
                className="Icon-Checked">
            <img src="/icon-check.svg"
                alt="" />
        </picture> }
        </figure>
           { checkClick?<s>Read for 1 hour</s>  : 'Read for 1 hour' }
        <picture 
        onClick={handleDelete}
        className='Delete-todo'>
        
            <img src="icon-cross.svg" 
        alt="" />
        </picture>
        </li>}
        {deleteClick ? null :
        
        <li className='New-todo'>
             <figure 
            onClick={handleClick}
            className="Check-TODO">
                {checkClick &&<picture 
                
                className="Icon-Checked">
            <img src="/icon-check.svg"
                alt="" />
        </picture> }
        </figure>
           { checkClick?<s>Pick up groceries</s>  : 'Pick up groceries' }
        <picture 
        onClick={handleDelete}
        className='Delete-todo'>
        
            <img src="icon-cross.svg" 
        alt="" />
        </picture>
        </li>}
        {deleteClick ? null :
        
        <li className='New-todo'>
             <figure 
            onClick={handleClick}
            className="Check-TODO">
                {checkClick &&<picture 
                
                className="Icon-Checked">
            <img src="/icon-check.svg"
                alt="" />
        </picture> }
        </figure>
           { checkClick?<s>Complete todo App onf Frontend Mentor</s>  : 'Complete todo App onf Frontend Mentor' }
        <picture 
        onClick={handleDelete}
        className='Delete-todo'>
        
            <img src="icon-cross.svg" 
        alt="" />
        </picture>
        </li>}

            {todos.map((todo, index) => (
                <ShowList task={todo} key={index} />
            ))}
            
            </ul>
            <FilterList todoCompleted={todoCompleted}/>
            
            
            <span className='Dragdrop'>
                Drag and drop to reorder list
            </span>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                Coded by <a href="https://github.com/TkDevk">Duvan Rodriguez</a>.
            </footer>
            
        </section>
    )
}
TodoList.propTypes={
    changeColor:PropTypes.any, 
    darkMode:PropTypes.any,
}

export default TodoList

//When i have to use Enter as trigger the best option is use form tag