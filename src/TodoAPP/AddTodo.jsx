import React from 'react'

class AddTodo extends React.Component {

    state = {
        title: '',
    }

    handleAddTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddList = (event) => {
        this.props.AddNewList({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        })
    }


    render() {
        let { title } = this.state
        return (
            <div className='list-todo-add'>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleAddTitle(event)}
                />
                <button
                    onClick={(event) => this.handleAddList(event)}
                >Add</button>
            </div>
        )
    }

}

export default AddTodo