import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
const endpoint = `http://localhost:4444/`;

function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://kookreviews.com/",

    // uri:
    //   process.env.NODE_ENV === "production"
    //     ? process.env.GRAPHQL_ENDPOINT
    //     : endpoint,
    // Apparently this doesn't work on Netlify!
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
