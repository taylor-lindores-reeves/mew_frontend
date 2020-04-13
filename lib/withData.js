import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
const endpoint = `http://localhost:4444/`;

function createClient({ headers }) {
  return new ApolloClient({
    uri: "http://167.172.48.167/",
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
