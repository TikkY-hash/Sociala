import React,{Component} from 'react';

import { Button, Form, Input} from 'reactstrap';

import styled from 'styled-components';

const FormStyle = styled(Form)`
    display : flex;
    margin-top: 20px;

    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`
export default class AppAdd extends Component {

    state = {
        text : ''
    }

    onChange = (e) => {
        this.setState({
            text : e.target.value
        })

    }

    addMessage = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.text)
        this.setState({
            text : ''
        })
    }
   
    render () {

        return (
            <FormStyle className = "d-flex" onSubmit = {this.addMessage}>
               <Input 
               placeholder = "О чем вы думаете сейчас?" 
               type = "text" 
               className = "new-post-label" 
               onChange = {this.onChange}
               value = {this.state.text}/>
               <Button type = "submit" outline color="secondary" >
                   Добавить
               </Button>
            </FormStyle>
           )
    }
}

