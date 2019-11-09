import React, { Component } from 'react'

import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm' 
import TodoList from '../todo/todoList' 

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = {description:'',list:[]}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    //adicionando o refresh
    refresh(description=''){
        const search = description ? `?description_regex=/${description}` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({...this.state,description:'',list:resp.data}))
        console.log(this.state.list)

    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    //mudança
    handleChange(event){
        this.setState({...this.state,description:event.target.value})
        
        //console.log(this.state.description)
    }

    //adicionar
    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description}).then(resp => this.refresh(this.state.description))
    }

    //Remover
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    //marcado como realizado
    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:true}).then(resp => this.refresh(this.state.description))
    }

    //marcado como pendente
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:false}).then(resp => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh()
    }


    render() {
        return (
            <div>
                <PageHeader name='Cadastro de Tarefas'/>
                
                <TodoForm description={this.state.description} 
                handleChange={this.handleChange} 
                handleAdd={this.handleAdd}  
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}/>
                
                <TodoList list={this.state.list} 
                          handleRemove={this.handleRemove}
                          handleMarkAsDone={this.handleMarkAsDone}
                          handleMarkAsPending={this.handleMarkAsPending}/>
            
            </div>
        )
    }
}