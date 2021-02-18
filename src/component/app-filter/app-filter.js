import React,{Component} from 'react';

import { Button, ButtonGroup } from 'reactstrap';

import styled from 'styled-components';

const Div = styled(ButtonGroup)`
    margin-left: 5px;
`


export default class AppFilter extends Component {

  constructor(props) {
    super(props)

    this.button = [
      {label : 'Все' , name : 'all'},
      {label : 'Понравилось' , name : 'like'}
    ]
  }

  render() {

    const element = this.button.map (value => {
      const {name,label} = value;

      const active = this.props.filter === name

      const classNameColor = active ?  "info" : "secondary",
            classNameOutline = active ?  false : true;
      

     return <Button 
            color = {classNameColor} 
            outline = {classNameOutline} 
            onClick = {() => this.props.onChangeTerm(name)}
            type = "button" 
            key = {value.filter}>
                {label}
            </Button>
    })

    return (
      <Div>
        {element}
      </Div>
    )
  }
}