// alert("browser is here");

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import {createRoot} from 'react-dom/client'
import App from './App.jsx';
console.log("app:", App);
const root = createRoot(document.getElementById("root")).render(
  <App/>
)