import React,{Component} from 'react';
import  {Input} from 'reactstrap';
 


export default class AppSearch extends Component {

  state = {
    term : ''
  }

  onChange = (e) => {
   
      this.setState({
        term : e.target.value
      })
      this.props.search(e.target.value)
  }


  render() {
    return (
      <Input type = "text" placeholder = "Поиск по записям" onChange = {this.onChange}></Input>
    )
  }
}



