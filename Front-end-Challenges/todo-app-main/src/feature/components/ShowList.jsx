import FilterList from './FilterList'
import { useState } from 'react'
import PropTypes from "prop-types"
const ListTodo = ({inputText}) =>{
    console.log(inputText);
    const [checkClick, setCheckClick] = useState(false)
    const [deleteClick, setDeleteClick] = useState(false)
    function handleClick(){
           setCheckClick(
            prevValue => !prevValue
           )
          
    }
    console.log(`ShowList: ${ inputText}`);
    function handleDelete(){
        setDeleteClick(
           prevValue => !prevValue
        )
    }
    return(
        <>
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
               { checkClick?<s>Jag around park 3x</s>  : 'Jag around park 3x' }
            <picture 
            onClick={handleDelete}
            className='Delete-todo'>
            
                <img src="icon-cross.svg" 
            alt="" />
            </picture>
            </li>}
            {/*If i will redender something i have to output a component*/}
            </>
    )
  
}

ListTodo.propTypes = {
    inputText: PropTypes.any,
}

const ShowList = ({showInputText:inputText}) => {

    return (
        <article className='Accordion-todo'>
            <ul className='TODO-list-container'>    
               <ListTodo inputText={inputText}/>
            </ul>
            <FilterList />
        </article>
    )

}


ShowList.propTypes = {
    showInputText: PropTypes.any,
  };  

export default ShowList