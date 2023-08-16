import graphql from 'babel-plugin-relay/macro'

const BookComponentQuery = graphql`
  query BookComponentQuery {
    info
    feed {
      ...BookComponenturlFragment
    }
  }
`;

 export default BookComponentQuery;