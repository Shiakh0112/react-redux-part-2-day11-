import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/styles.css";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
