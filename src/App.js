import React from 'react';
import { request } from 'graphql-request';
import './App.css';

// const menuAll = gql`
//   {
//     menuItems(where: {location: PRIMARY}) {
//         nodes {
//         menuItemId
//         url
//         cssClasses
//         label
//         target
//         }
//     }
//   }
//     `;

// const endpoint = 'http://fororder.local/graphql'
// fetch(
//   endpoint,
//   {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
// query: `{
//           menuItems(where: {location: PRIMARY}) {
//               nodes {
//               menuItemId
//               url
//               cssClasses
//               label
//               target
//               }
//           }
//       }`
//     }),
//   }
// )
//   .then(res => res.json())
//   .then(function(response) {
//     const menuAll = response;
//     return getMenus(menuAll);
//     console.log(menuAll);
//   })
//   .catch(error => console.error('Error:', error));


// request(endpoint, query).then((data) =>
//   const menuItems = data;
//   console.log(menuItems);
// )


function getMenus(menuAll) {
  var innerHtml = '';
  var menuData = menuAll.data['menuItems'].nodes;

  for (var i = 0; i < menuData.length; i++) {
    var menuItemId = menuData[i].menuItemId;
    var menuUrl = menuData[i].url;
    var menuClass = menuData[i].cssClasses;
    var menuLabel = menuData[i].label;
    var menuTarget = menuData[i].target;

    if (!menuTarget) {
      var menuTarget = '_self';
    }

    innerHtml = innerHtml + `
          <li id="menuid_${menuItemId}" class="menuitem ${menuClass}">
              <a href="${menuUrl}" target="${menuTarget}">
                  <span>${menuLabel}</span>
              </a>
          </li>
      `
  }
  return '<ul>' + innerHtml + '</ul>';
}

// function Navigate({Id, Url, Class, Label, Target }) {
//   let _menuItemID = 'menuid_'+ Id;
//   let _menuUrl = Url;
//   let _menuClass = Class;
//   let _menuLabel = Label;
//   let _menuTarget = Target;

//   return (
//     <li id={_menuItemID} className={_menuClass}>
//       <a href={_menuUrl} target={_menuTarget}>
//         <span>{_menuLabel}</span>
//       </a>
//     </li>
//   )
// }

function App() {
  return (
    <div >
      {/* {menuAll.map(function menu(){
      var menuData = menuAll.data['menuItems'].nodes;
      <Navigate Id={menuData.menuItemId} Url={menuData.menuItemUrl} Class={menuData.cssClasses} Label={menuData.label} Target={menuData.target}/>
      })
    } */}
      {/* {getMenus(menuAll)} */}
    </div>
  );
}

export default App;
