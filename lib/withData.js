import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
const endpoint = `http://localhost:4444/`;

console.log(i);
function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://kookreviews.com",
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
