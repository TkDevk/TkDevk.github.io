import FilterList from './FilterList'
import { useState } from 'react'
import PropTypes from "prop-types"
const ListTodo = ({textTodo}) =>{
    const [checkClick, setCheckClick] = useState(false)
    const [deleteClick, setDeleteClick] = useState(false)
    function handleClick(){
           setCheckClick(
            prevValue => !prevValue
           )
           
    }
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

const ShowList = ({textTodo}) => {

    return (
        <article className='Accordion-todo'>
            <ul className='TODO-list-container'>    
               <ListTodo textTodo={textTodo}/>
            </ul>
            <FilterList />
        </article>
    )

}

ShowList.propTypes = {
    textTodo: PropTypes.any,
  };


export default ShowList