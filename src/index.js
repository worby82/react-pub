import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from './App';
import store from "./store";
// import './css/fonts.css'
import './css/style.css'
// import './css/btn.css'
// import './css/container.css'
// import './css/main.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);