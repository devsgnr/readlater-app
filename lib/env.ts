import "dotenv/config";

const env = {
  app_name: process.env.NEXT_PUBLIC_APP_NAME,
  graphqlApiUrl: {
    url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  },
  paystack: {
    baseURL: "https://api.paystack.co/transaction/initialize",
  },
  hygraph: {
    baseURL: process.env.NEXT_PUBLIC_HYGRAPH_URL,
  },
};

export { env };
