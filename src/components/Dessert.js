import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

function GetDessert(props) {
  let listId = 'dessertitem' + props.Id;
  let Classes = 'dessertitem_' + props.ClassName;

  return (
    <li key={props.Id} id={listId} className={Classes}>
      <a href={props.Slug}>
        <img src={props.FeaturedImage}></img>
        <h3>{props.Title}</h3>
      </a>
      <a href={props.CatSlug} className="category_name">{props.CatName}</a>
    </li>
  )
}

function Post_Dessert() {
  const dessertQuery = gql`
    {
        gql_desserts {
            nodes {
              title
              featuredImage {
                  altText
                  sourceUrl
                  mediaDetails {
                    width
                    height
                  }
              }
              link
              slug
              gql_dessert_categories {
                  nodes {
                    name
                    slug
                  }
              }
              gql_dessert_tags {
                  nodes {
                    name
                    slug
                  }
              }
              contentType {
                  node {
                  name
                  }
              }
              gql_dessertId
              acf_dessert_gal {
                  pdGalImg {
                  altText
                  sourceUrl
                  mediaDetails {
                      width
                      height
                  }
                  }
              }
            }
        }
          
    }
  `

  return (
    <Query query={dessertQuery}>
      {({ loading, error, data }) => {
        if (loading) return <div>...</div>   // 수정
        if (error) return <div>Error</div>        // 수정

        const dessertRender = data.gql_desserts.nodes;
        
        console.log(dessertRender[0].gql_dessert_categories.nodes[0].name);

        return (
          <div>
            <ul>
              {dessertRender.map((PostMeta, i) => <GetDessert 

              key={PostMeta.gql_dessertId} 
              Id={PostMeta.gql_dessertId} 
              Slug={PostMeta.slug} 
              Title ={PostMeta.title}
              ClassName={PostMeta.gql_dessertId} 
              CatName={PostMeta.gql_dessert_categories.nodes[i].name}
              CatSlug={PostMeta.gql_dessert_categories.nodes[i].slug}
              FeaturedImage={PostMeta.featuredImage.sourceUrl} 

              />)}
            </ul>
          </div>

        )
      }}
    </Query>
  )
}

function Dessert() {
  return <Post_Dessert />
}

export default Dessert;
