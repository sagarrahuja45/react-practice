import React from "react";
import { usePreloadedQuery } from "react-relay";
import BookComponentQuery from "./BookComponentQuery.js";


const ListCompo = ({ queryRef }) => {
  if (queryRef) {
    const link = usePreloadedQuery(BookComponentQuery, queryRef);
    console.log("link", link.feed);

    return (
      <div>
        <h2>Hello</h2>
        {link.feed.map((linkItem) => (
          <div key={linkItem.id}>
            <p>{linkItem.id}</p>
            <p>{linkItem.url}</p>
            <p>{linkItem.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default ListCompo;
