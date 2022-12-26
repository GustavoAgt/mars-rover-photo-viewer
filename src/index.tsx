import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Routes } from "react-router";

import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { store } from "./redux/store/store";
import App from "./App";
import Bookmarks from "./pages/bookmarks";

import "./index.scss";

import NotFound from "./pages/404";
import { StableNavigateContextProvider } from "./hooks/stableNavigationContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <StableNavigateContextProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </StableNavigateContextProvider>
        </Router>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
