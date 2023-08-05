import Logo from "@/assets/logo.png";
import { RouterProvider } from "react-router-dom";
import { applicationRouter } from "./router";
import { Provider } from "react-redux";
import store from "./store";



export default function App() {
  return <Provider store={store}>
    <RouterProvider router={applicationRouter} />
  </Provider>;
}
