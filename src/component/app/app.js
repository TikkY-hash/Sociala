import React, {Component} from 'react';
import nextId from "react-id-generator";
import styled from 'styled-components';
import AppHeader from '../app-header/';
import AppSearch from '../app-search/';
import AppFilter from '../app-filter/';
import AppForm from '../app-form/';
import AppAdd from '../app-add/'


const AppStyle = styled.div`
      margin: 0 auto;
      max-width: 800px;
`

const DivSearch = styled.div`
    display: flex;
`;

export default class App extends Component {
    
   
   
    state = {
        data : [
            {text : "Учить реакт",important : false, like: false, id : nextId()},
            {text : "Отдыхать",important : false,  like: false, id : nextId()},
            {text : "Прыгать",important : false, like: false, id : nextId()}
        ],
        term : '',
        filter : 'all'
    }


    deleteMessage = (id) => {
       this.setState(({data}) => {
           const index = data.findIndex(value => value.id === id)

           const newArr = [...data.slice(0,index),...data.slice(index + 1)]
          
           return {
               data : newArr
           }
       })
    }

    addMessage = (body) => {

        const newMessage = {
            text : body,
            important : false,
            like: false,
            id : nextId()
        }

        this.setState(({data}) => {
            const newArr = [...data,newMessage]

            return {
                data : newArr
            }
        })
    }

    onToggleChange(element,id) {
        this.setState(({data}) => {
            const index = data.findIndex(value => value.id === id)
            
            const old = data[index];
            const newItem = {...old, [element]: !old[element]};

            const newArr = [...data.slice(0,index), newItem ,...data.slice(index + 1)]

            return {
                data : newArr
            }
        })
    }

    onToggleLike = (id) => {
        this.onToggleChange("like",id)
    }

    onToggleImportant = (id) => {
        this.onToggleChange("important",id)
    }

    search = (term) => {
        this.setState({
            term
        })
    }

    searchPost(data,term) {
        if(term.length === 0) {
            return data
        }

        return data.filter(value => {
            return value.text.indexOf(term) > - 1
        })
    }

    filter(data,filter) {
        if(filter === "like") {
           return data.filter(value => value.like)
        }

        return data
    }

    onChangeTerm = (name) => {
        
        this.setState({
            filter : name
        })
    }

    render () {
        const {data,term,filter} = this.state;

        const newData = this.filter(this.searchPost(data,term),filter)

        const countLike = data.filter(value => value.like).length

        const count = data.length;

        return (
            <AppStyle>
                  <AppHeader countLike = {countLike} count = {count}/>
                  <DivSearch>
                      <AppSearch search = {this.search}/>
                      <AppFilter 
                      filter = {filter}
                      onChangeTerm = {this.onChangeTerm}/>
                  </DivSearch>
                  <AppForm 
                  content = {newData} 
                  deleteMessage = {this.deleteMessage}
                  onToggleImportant ={this.onToggleImportant}
                  onToggleLike ={this.onToggleLike}/>
                  <AppAdd addMessage = {this.addMessage}/>
            </AppStyle>
          )

    }
}

