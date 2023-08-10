import React, { useState, useEffect } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

const BookComponent = () => {
  const [list, setList] = useState([]);
  const [commitDelete] = useMutation(
    graphql`
      mutation BookComponentMutation($id: ID!) {
        deleteLink(id: $id) {
          id
        }
      }
    `
  );

  const data = useLazyLoadQuery(
    graphql`
      query BookComponentQuery {
        info
        feed {
          id
          url
          description
        }
      }
    `
  );
  useEffect(() => {
    setList(data.feed);
  }, [data.feed]);

  const handleDelete = (id) =>{
    commitDelete({
        variables: {
            id: id
        }
    })


  }

  return (
    <div>
      <h2>Hello</h2>
      {list.map((link) => (
        <div key={link.id}>
          <p>{link.id}</p>
          <p>{link.url}</p>
          <p>{link.description}</p>
          <button onClick={()=> handleDelete(link.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default BookComponent;
