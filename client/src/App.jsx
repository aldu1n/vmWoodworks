import "bootstrap/dist/css/bootstrap.min.css";
import "./css/reset.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <main>
        <Outlet />
        </main>
        <Footer />
      </ApolloProvider>
    </>
  );
};
