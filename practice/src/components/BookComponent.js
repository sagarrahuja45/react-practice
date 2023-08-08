import React from "react";
import { useLazyLoadQuery } from "react-relay";
import {graphql} from 'babel-plugin-relay/macro';

const BookComponent = () => {
    console.log(">>>>>")
  const data = useLazyLoadQuery(
    graphql`
    query BookComponentQuery {
        info
        feed {
          id
          description
        }
      }
    `,
  );

  return (
    <div>
      <h2>Hello</h2>
      {console.log(data,"datata>>>>")}
    </div>
  );
};
export default BookComponent;
