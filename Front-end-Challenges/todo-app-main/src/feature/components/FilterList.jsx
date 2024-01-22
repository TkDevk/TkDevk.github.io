import PropTypes from "prop-types"
const FilterList = ({todoCompleted}) => {
  console.log(todoCompleted);
  return (
    <footer className="Footer-filter">
      <span className="Todos-remain">5 items left</span>
      <section className="Justify-h6">
        <h6 >All</h6>
        <h6 >Active </h6>
        <h6 onClick={()=>todoCompleted()}>Completed</h6>
      </section> <span className="Clear-todos">Clear Completed</span>
    </footer>
  )

}
FilterList.propTypes = {
  todoCompleted: PropTypes.any,
}
export default FilterList