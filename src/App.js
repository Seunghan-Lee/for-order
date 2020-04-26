import React from 'react';
import { request } from 'graphql-request'
import './App.css';

const endpoint = 'http://fororder.local/graphql'
fetch(
    endpoint,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `{
                menuItems(where: {location: PRIMARY}) {
                    nodes {
                    menuItemId
                    url
                    cssClasses
                    label
                    target
                    }
                }
            }`
        }),
    }
)
.then(res => res.json())
.then(function(response) {
  const menuAll = response;
  console.log(menuAll);
})
.catch(error => console.error('Error:', error));

function menus(menuAll){
  console.log(menuAll);
  var innerHtml = '';
  var menuData = menuAll.data['menuItems'].nodes;

  for (var i = 0; i < menuData.length; i++) {
      var menuItemId = menuData[i].menuItemId;
      var menuUrl = menuData[i].url;
      var menuClass = menuData[i].cssClasses;
      var menuLabel = menuData[i].label;
      var menuTarget = menuData[i].target;
      
      if(!menuTarget) {
          var menuTarget = '_self';
      }

      innerHtml = innerHtml+`
          <li id="menuid_${menuItemId}" class="menuitem ${menuClass}">
              <a href="${menuUrl}" target="${menuTarget}">
                  <span>${menuLabel}</span>
              </a>
          </li>
      `
  }
  return '<ul>'+innerHtml+'</ul>';
}

function App() {
  return (
    <div className="App">
      {menus}
    </div>
  );
}

export default App;
