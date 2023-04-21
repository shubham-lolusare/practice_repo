import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import "./index.css";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
      action={rootAction}
    >
      <Route
        path="/contacts/:contactId"
        element={<Contact />}
        loader={contactLoader}
      />
      <Route
        path="contacts/:contactId/edit"
        element={<EditContact />}
        loader={contactLoader}
        action={editAction}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
