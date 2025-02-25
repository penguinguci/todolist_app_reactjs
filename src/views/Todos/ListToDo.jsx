import React from "react";
import './ListToDo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    
    state = {
        ListToDo: [
            {id: 'todo1', title: 'Doing homeword'},
            {id: 'todo2', title: 'Making video'},
            {id: 'todo3', title: 'Fixing bugs'},
        ],
        editTodo: {

        }
    }

    addNewToDo = (todo) => {
        this.setState({
            ListToDo: [...this.state.ListToDo, todo]
        })

        toast.success("Wow so easy!")
    }

    handleDeleteToDo = (todo) => {
        let currentToDo = this.state.ListToDo
        currentToDo = currentToDo.filter(item => item.id !== todo.id)
        this.setState({
            ListToDo: currentToDo
        })

        toast.success('Delete todo succeed!')
    }

    handleEditTodo = (todo) => {
        let {editTodo, ListToDo} = this.state
        let isEmptObj = Object.keys(editTodo).length === 0
        // save
        if (isEmptObj === false && editTodo.id === todo.id) {
            let ListToDoCopy = [...ListToDo]

            let objIndex = ListToDoCopy.findIndex(item => item.id === todo.id)

            ListToDoCopy[objIndex].title = editTodo.title

            this.setState({
                ListToDo: ListToDoCopy,
                editTodo: {}
            })
            
            toast.success('Update todo succeed!')

            return;
        } 

         // edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditToDo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let listTodos = this.state.ListToDo
        // let {listTodos} = this.state

        let editTodo = this.state.editTodo
        let isEmptObj = Object.keys(editTodo).length === 0
        return (
            <>
                <p>Simple TODO Apps with React.js (Penguin)</p>
                <div className="list-todo-container">
                <AddTodo
                    addNewToDo={this.addNewToDo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 && 
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptObj === true ?
                                        <span> 
                                            {index + 1} - {item.title} 
                                        </span>
                                    :   
                                        <>
                                            {item.id === editTodo.id ?
                                                <span>
                                                    {index + 1} - 
                                                    <input value={editTodo.title} className="textEdit"
                                                            placeholder="Sửa công việc... " 
                                                            onChange={(event) => this.handleOnChangeEditToDo(event)}
                                                    />
                                                </span>
                                                :
                                                <span> 
                                                    {index + 1} - {item.title} 
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptObj === false && item.id === editTodo.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteToDo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </>
        )
    }
}

export default ListToDo;