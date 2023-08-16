// import React from "react";
// import { useForm } from "react-hook-form";
// import { useMutation } from "react-relay";
// import { graphql } from "babel-plugin-relay/macro";

// const LinkForm = () => {
//   const { register, handleSubmit } = useForm();
  
//   const [commit, isInFlight] = useMutation(
//     graphql`
//       mutation addLinkMutation($url: String!, $description: String!) {
//         post(url: $url, description: $description) {
//           id
//           ...BookComponent_url
//         }
//       }
//     `
//   );

//   const linkSubmit = (data) => {
//     commit({
//       variables: {
//         url: data.url,
//         description: data.description,
//       },
//     });
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit(linkSubmit)} disabled={isInFlight}>
//           <input
//             type="text"
//             placeholder="url"
//             name="url"
//             {...register("url", {
//               required: "url is required",
//             })}
//           />
//           <input
//             type="text"
//             placeholder="description"
//             name="description"
//             {...register("description", {
//               required: "description is required",
//             })}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LinkForm;
