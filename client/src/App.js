import React from "react";
import Home from "./components/onePirate/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppFooter from "./components/onePirate/modules/views/AppFooter";
import AppAppBar from "./components/onePirate/modules/views/AppAppBar";
import RoomPage from "./components/RoomPage/RoomPage";
import SignInSide from "./components/onePirate/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import BookPage from "./components/BookPage/BookPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ApolloProvider client={client}>
        <AppAppBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<RoomPage />} />
            <Route path="/login" element={<SignInSide />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:setting" element={<Dashboard />} />
            <Route path="/book" element={<BookPage />} />
          </Routes>
        </BrowserRouter>
        <AppFooter />
      </ApolloProvider>
    </LocalizationProvider>
  );
}

export default App;
