import { useState } from "react"
import PropTypes from "prop-types"
const ShowList = ({task}) =>{

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
               { checkClick?<s>{task.task}</s>  : `${task.task}` }
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
ShowList.propTypes = {
    showInputText: PropTypes.any,
    task: PropTypes.any,
  };  

export default ShowList

/**
 * Things to fix:
 * 1 - any input value should receive and index so any decision i make it will be only for the one choosen
 * 2 - as soon as i press enter my input value should be empty and create indivual li tag
 */
