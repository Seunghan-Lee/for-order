import React from 'react';
import Dessert from '../components/Dessert';
import Single_Dessert from './Single_Dessert';
import { Route, BrowserRouter } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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

function List_Md_Dessert() {
    return (
        <Query query={dessertQuery}>
            {({ loading, error, data }) => {
                if (loading) return <div>...</div>   // 수정
                if (error) return <div>Error</div>        // 수정

                const dessertRender = data.gql_desserts.nodes;

                return (
                    <BrowserRouter>
                        <ul>
                            {dessertRender.map((PostMeta, i) => <Dessert

                                key={PostMeta.gql_dessertId}
                                Id={PostMeta.gql_dessertId}
                                Slug={PostMeta.slug}
                                Title={PostMeta.title}
                                ClassName={PostMeta.gql_dessertId}
                                CatName={PostMeta.gql_dessert_categories.nodes[i].name}
                                CatSlug={PostMeta.gql_dessert_categories.nodes[i].slug}
                                FeaturedImage={PostMeta.featuredImage}

                            />)}
                        </ul>
                        <Route path="/single/dessert/:props.Id" exact={true} component={Single_Dessert} />
                    </BrowserRouter>

                )
            }}
        </Query>
    )
}

class Page_Desserts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          dessertQuery
         };
      }

    render(){
        return (
            <div className="list_wrap dessert_list">
                <List_Md_Dessert />
            </div>
        )

    }
}

// function Page_Desserts() {
//     return (
//         <div className="list_wrap dessert_list">
//             <List_Md_Dessert />
//         </div>
//     )
// }

export default Page_Desserts;