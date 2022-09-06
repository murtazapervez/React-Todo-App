import PropTypes from 'prop-types'

export default function Header({title, onClick}) {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn' onClick={onClick} >Add Task</button>
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Manager'
}

Header.propTypes = {
    title : PropTypes.string
}