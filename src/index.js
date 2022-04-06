import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import './css/fonts.css'
import './css/style.css'
import './css/btn.css'
import './css/tag.css'
import './css/logo.css'
import './css/container.css'
import './css/main.css'
import './css/footer.css'
import './css/header.css'
import './css/text.css'
import './css/title.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);