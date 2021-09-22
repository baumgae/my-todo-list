import PropTypes from 'prop-types'
import checklist from '../img/check.png'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className='header'>
            <img src={checklist} alt="ToDoImage" width='40'/>
            <h1> {title} </h1>
            <Button color={showAdd ? '#22BCF1' : '#126784'} text={ showAdd ? 'Close' : 'Add'}onClick = {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header


