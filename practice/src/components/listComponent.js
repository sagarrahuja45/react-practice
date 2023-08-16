import React from "react";
import { usePreloadedQuery } from "react-relay";
import BookComponentQuery from "./BookComponentQuery.js";
import ListingItem from "./listing.js";


const ListCompo = ({ queryRef, urlFragment }) => {
  if (queryRef) {
    const link = usePreloadedQuery(BookComponentQuery, queryRef);
   
    return (
      <div>
        <h2>list of urls</h2>
      {link.feed.map((item) => <ListingItem item={item} urlFragment={urlFragment}></ListingItem>)}
      </div>
    );
  }

  return null;
};

export default ListCompo;
