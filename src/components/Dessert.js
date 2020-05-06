import React from 'react';
import { Link } from 'react-router-dom';

function Dessert(props) {
    let listId = 'dessertitem' + props.Id;
    let Classes = 'module_listitem dessertitem_' + props.ClassName;
    var _altText = props.FeaturedImage.altText;
    if (!_altText) {
        var _altText = props.Title + ' 이미지';
    }

    return (
        <li key={props.Id} id={listId} className={Classes}>
            <Link to={{
                pathname: `/single/dessert/${props.Id}`
            }}>
                <img src={props.FeaturedImage.sourceUrl} alt={_altText}></img>
                <h3>{props.Title}</h3>
            </Link>
            <Link to={{
                pathname: `/single/dessert/${props.Id}`
            }} className="category_name"
            >{props.CatName}</Link>
        </li>
    )
}

export default Dessert;
