import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

function GetMenus(props) {
  let listId = 'menuitem'+props.Id;
  let Classes = 'menuitem '+props.ClassName+' menu_'+props.Slug;

  return (
    <li key={props.Id} id={listId} className={Classes}>
      <Link target={props.Target} to={{
        pathname: `/pages/${props.Slug}`
      }}><span>{props.Label}</span></Link>
    </li>
  )
}

function MenuList() {
  const menuQuery = gql`
    {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          menuItemId
          url
          cssClasses
          label
          target
          title
        }
      }
    }
  ` 

  return (
    <Query query={menuQuery}>
        {({ loading, error, data }) => {  
          if (loading) return <div>...</div>
          if (error) return <div>Error</div>
    
          const menuRender = data.menuItems.nodes
    
          return (
              <ul>
                {menuRender.map(link => <GetMenus key={link.menuItemId} Id={link.menuItemId} Link={link.url} ClassName={link.cssClasses} Label={link.label} Target={link.target} Slug={link.title}/>)}
              </ul>
          )
        }}
      </Query>
  )
}

function Navigation() {
  return (
    <nav>
      <MenuList />
    </nav>
  )
}

GetMenus.propTypes = {
  Id: PropTypes.number.isRequired,
  Link: PropTypes.string.isRequired,
  Label: PropTypes.string.isRequired,
  Slug: PropTypes.string.isRequired
}

export default Navigation;
