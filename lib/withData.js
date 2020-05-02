import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
const endpoint = `http://localhost:4444/`;
const i = process.env.NODE_ENV;
function createClient({ headers }) {
  return new ApolloClient({
    uri: i == "production" ? process.env.GRAPHQL_ENDPOINT : endpoint,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
