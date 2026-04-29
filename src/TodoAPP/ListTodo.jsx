import React from 'react'
import AddTodo from './AddTodo'

class ListTodo extends React.Component {

    state = {
        ArrList: [],
        ShowList: false,
        EditList: {}
    }

    handleShowList = (event) => {
        this.setState({
            ShowList: !this.state.ShowList
        })
    }

    AddList = (todo) => {
        this.setState({
            ArrList: [...this.state.ArrList, todo]
        })
    }

    DeleteList = (todo) => {
        let currentDelete = this.state.ArrList
        currentDelete = currentDelete.filter(item => item.id !== todo.id)
        this.setState({
            ArrList: currentDelete
        })
    }

    EditTodo = (todo) => {
        let { EditList, ArrList } = this.state;
        let isEmptyObj = Object.keys(EditList).length === 0;

        if (isEmptyObj === false && EditList.id === todo.id) {
            let ArrListCopy = [...ArrList];
            let objIndex = ArrListCopy.findIndex((item => item.id === todo.id));

            ArrListCopy[objIndex].title = EditList.title;

            this.setState({
                ArrList: ArrListCopy,
                EditList: {}
            })
            return;
        }

        this.setState({
            EditList: todo
        })
    }

    handleEditTodo = (event) => {
        let EditCopy = { ...this.state.EditList }
        EditCopy.title = event.target.value
        this.setState({
            EditList: EditCopy
        })
    }


    render() {

        let { ArrList, ShowList, EditList } = this.state
        let isEmptyObj = Object.keys(EditList).length === 0

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
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.id} - {item.title} </span>
                                            :
                                            <>
                                                {
                                                    EditList.id === item.id ?
                                                        <span> {index + 1} - {item.id} - <input
                                                            onChange={(event) => this.handleEditTodo(event)}
                                                            value={EditList.title} /></span>
                                                        :
                                                        <span> {index + 1} - {item.id} - {item.title} </span>
                                                }
                                            </>
                                        }
                                        <span>
                                            <button
                                                onClick={() => this.DeleteList(item)}
                                            > Delete </button>

                                            <button
                                                onClick={() => this.EditTodo(item)}
                                            >
                                                {isEmptyObj === false && EditList.id === item.id ? 'Save' : 'Edit'}
                                            </button>
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