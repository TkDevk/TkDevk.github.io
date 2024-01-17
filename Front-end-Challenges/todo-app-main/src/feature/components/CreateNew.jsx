import PropTypes from 'prop-types'


const CreateNew = ({createTextTodo:createTodo}) => {

    return (   
        
        <section className="Create-new-container">
            <figure 
            className="Check-TODO">
            </figure>
            <input 
            className="Input-check-box" 
            type="text" 
            id="cbox" 
            placeholder="Create a new todo..." 
            size="50" 
            onChange={createTodo}
            />
        </section>

        
    )

}

CreateNew.propTypes ={
  createTextTodo : PropTypes.any,
}

export default CreateNew
