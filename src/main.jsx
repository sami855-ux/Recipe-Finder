import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { ItemContextProvider } from "./context/ItemContext.jsx"
import "./index.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </StrictMode>
)
