import React, { useState, useEffect } from "react";
import { useLazyLoadQuery, useQueryLoader } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import BookComponentQuery from "./BookComponentQuery.js";
import ListCompo from "./listComponent.js";

const BookComponent = () => {

    const [list, setList] = useState([])
  const [commitDelete] = useMutation(
    graphql`
      mutation BookComponentMutation($id: ID!) {
        deleteLink(id: $id) {
          id
        }
      }
    `
  );

  //   const data = useLazyLoadQuery(
  //     graphql`
  //       query BookComponentQuery {
  //         info
  //         feed {
  //           id
  //           url
  //           description
  //         }
  //       }
  //     `
  //   );

  const [queryRef, loadQuery] = useQueryLoader(graphql`
  query BookComponentQuery {
    info
    feed {
      id
      url
      description
    }
  }
`);



  useEffect(() => {
      loadQuery({});
  }, [loadQuery]);


  const handleDelete = (id) => {
    commitDelete({
      variables: {
        id: id,
      },
    });
  };

  return (
    <div>
      <h2>Hello</h2>
      <ListCompo queryRef={queryRef}/>
      {/* {list.map((link) => (
        <div key={link.id}>
          <p>{link.id}</p>
          <p>{link.url}</p>
          <p>{link.description}</p>
          <button onClick={() => handleDelete(link.id)}>delete</button>
        </div>
      ))} */}
    </div>
  );
};
export default BookComponent;
