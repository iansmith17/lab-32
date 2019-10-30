import React from 'react';
import ListItem from '../listItem';

export default props => {
  return (
    <div>
      <ul>
        {props.todoList.map(item => (
          <ListItem item={item} functions={props.functions}></ListItem>
        ))}
      </ul>
    </div>
  )
}