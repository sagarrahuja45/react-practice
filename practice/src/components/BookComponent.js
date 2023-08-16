  import React, { useEffect } from "react";
  import { useQueryLoader } from "react-relay";
  import { graphql } from "babel-plugin-relay/macro";
  import { useMutation } from "react-relay";
  import { useForm } from "react-hook-form";
  import ListCompo from "./listComponent.js";
  import BookComponentQuery from "./BookComponentQuery.js";

  const BookComponent = () => {

    const [commitDelete] = useMutation(
      graphql`
        mutation BookComponentMutation($id: ID!) {
          deleteLink(id: $id) {
            id
          }
        }
      `
    );
    const { register, handleSubmit, reset } = useForm();
  
  const [commit, isInFlight] = useMutation(
    graphql`
      mutation BookComponentaddLinkMutation($url: String!, $description: String!) {
        post(url: $url, description: $description) {
          id
          ...BookComponenturlFragment
        }
      }
    `
  );

  const linkSubmit = async(data) => {
    await commit({
      variables: {
        url: data.url,
        description: data.description,
      },
      onCompleted: ()=>{
        loadQuery({},{fetchPolicy: "network-only"});
        reset();
      }
    },
    );
  };

    const [queryRef, loadQuery] = useQueryLoader(BookComponentQuery);

  const BookComponenturlFragment = graphql`
  fragment BookComponenturlFragment on Link {
    url
    description
  }`



    useEffect(() => {
        loadQuery({});
    }, []);


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
        <ListCompo queryRef={queryRef} urlFragment={BookComponenturlFragment} />
        <div>
        <form onSubmit={handleSubmit(linkSubmit)} disabled={isInFlight}>
          <input
            type="text"
            placeholder="url"
            name="url"
            {...register("url", {
              required: "url is required",
            })}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            {...register("description", {
              required: "description is required",
            })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  };
  export default BookComponent;
