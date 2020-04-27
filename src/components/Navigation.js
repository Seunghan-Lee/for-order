import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo'

function GetMenus(props) {
  let listId = 'menuitem'+props.Id;
  let Classes = 'menuitem '+props.ClassName;

  return (
    <li key={props.Id} id={listId} className={Classes}>
      <a href={props.Link} target={props.Target}>
        <span>{props.Label}</span>
      </a>
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
            <nav>
              <ul>
                {menuRender.map(link => <GetMenus key={link.menuItemId} Id={link.menuItemId} Link={link.url} ClassName={link.cssClasses} Label={link.label} Target={link.target} />)}
              </ul>
            </nav>
           
          )
        }}
      </Query>
  )
}

function Navigation() {
  return <MenuList />
}

export default Navigation;
