import React from "react";
import { useFragment } from "react-relay";

const ListingItem = ({item,urlFragment}) => {
   const data =  useFragment(urlFragment, item);

    return(
            <div key={data.url}>
              <p>URL :- {data.url}</p>
              <p>Description :- {data.description}</p>
            </div>
    )

}

export default ListingItem