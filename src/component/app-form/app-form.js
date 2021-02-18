import React from 'react';
import { ListGroup, ListGroupItem  } from 'reactstrap';
import styled from 'styled-components'
import AppFormItem from '../app-form-item'


const List = styled(ListGroup)`
    margin-top: 50px;
    .list-group-item {
      padding: 20px 35px 10px 35px;
      margin-top: 10px;
    }
`



const AppForm = ({content,deleteMessage,onToggleLike,onToggleImportant}) => {

  const element = content.map(value => {
    const {id,...valueContent} = value; 
      return(
         <ListGroupItem key = {id}>
              <AppFormItem  {...valueContent} 
              deleteMessage = {() => deleteMessage(id)}
              onToggleImportant = {() => onToggleImportant(id)}
              onToggleLike = {() => onToggleLike(id)}/>
         </ListGroupItem>
      )
  });

    return (
      <List>
          {element}
      </List>
    )
}

export default AppForm