import React from 'react';

const List = props => (
    <ul>
        {
            props.items.map((item, index)=><li key={index}>{item} <a href="#" onClick={props.handleDelete.bind(null, item)}>  &#x2717; </a></li>)
        }
    </ul>
);

export default List;