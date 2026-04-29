import React from 'react'
import AddTodo from './AddTodo'

class ListTodo extends React.Component {

    state = {
        ArrList: [],
        ShowList: false,
    }

    handleShowList = (event) => {
        this.setState({
            ShowList: !this.state.ShowList
        })
    }

    AddList = (todo) => {
        let currentList = this.state.ArrList
        currentList.push(todo)
        this.setState({
            ArrList: currentList
        })
    }

    DeleteList = (todo) => {
        let currentDelete = this.state.ArrList
        currentDelete = currentDelete.filter(item => item.id !== todo.id)
        this.setState({
            ArrList: currentDelete
        })
    }



    render() {

        let { ArrList, ShowList } = this.state

        return (
            <div className='list-todo-container'>
                <div className='list-todo-add'>
                    <AddTodo
                        AddNewList={this.AddList}
                    />
                </div>

                <div className='list-todo-content'>
                    {ShowList === false ?
                        <>
                            <div>
                                <button
                                    onClick={(event) => this.handleShowList(event)}
                                >Show</button>
                            </div>
                        </>
                        :
                        <>
                            {
                                ArrList && ArrList.length > 0 &&
                                ArrList.map((item, index) =>
                                    <div key={item.id}>
                                        <span> {index + 1} - {item.id} - {item.name} </span>
                                        <span>
                                            <button
                                                onClick={() => this.DeleteList(item)}
                                            > Delete </button>

                                            <button> Edit </button>
                                        </span>
                                    </div>
                                )
                            }
                            <div>
                                <button
                                    onClick={(event) => this.handleShowList(event)}
                                >Hide</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo