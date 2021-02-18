import React,{Component} from 'react';
import styled from 'styled-components';
import './post-list-item.css'

const Div = styled.div`
    font-size: 1.25rem;
    button {
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
    } ::focus {
        box-shadow: none;
        outline: none;
    }
    .btn-star {
        color: #FFD700;
    }
    .btn-trash {
        color: red;
    }
    .fa-heart {
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: red;
        transition: 0.3s all;
        transform: translateX(30px);
        opacity: 0;
    }  
`
 
let Span = styled.span`
        display: block;
        line-height: 35px;
        cursor: pointer;
        user-select: none;
        transition: 0.5s all;   
`

export default class AppFormItem extends Component {

   
    render() {
        const {text,deleteMessage,important,like, onToggleImportant, onToggleLike} = this.props
   


        let className = "d-flex justify-content-between app-list-item";

            if(important) {
                 className += " important"
            }

            if(like) {
                className += " like"
            }

        return (
            <Div className = {className}>
                <Span className = "app-list-item-label" onClick = {onToggleLike}>
                    {text}
                </Span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" onClick = {onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" onClick = {deleteMessage}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </Div>
        )
    }
}


