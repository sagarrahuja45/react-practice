import graphql from 'babel-plugin-relay/macro'

const BookComponentQuery = graphql`
  query BookComponentQuery {
    info
    feed {
      id
      url
      description
    }
  }
`;

 export default BookComponentQuery;