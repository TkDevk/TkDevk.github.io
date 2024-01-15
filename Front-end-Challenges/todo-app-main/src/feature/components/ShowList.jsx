import FilterList from './FilterList'

const ShowList = ()=>{
    return (
    <article className='Accordion-todo'>
      <ul className='TODO-list-container'>
      <li className='New-todo'> <figure className="Check-TODO"> </figure>Jag around park 3x</li>
      <li className='New-todo'><figure className="Check-TODO"> </figure>10 minutes to meditation</li>
      <li className='New-todo'><figure className="Check-TODO"> </figure>read for 1 hour</li>
      <li className='New-todo'><figure className="Check-TODO"> </figure>Pick up groceries</li>
      <li className='New-todo'><figure className="Check-TODO"> </figure>Complete TOdo app on front mentor</li>
      </ul>  
      <FilterList />
    </article>
    )

}
export default ShowList