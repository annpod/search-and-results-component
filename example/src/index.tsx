import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Search } from "search-and-results-component";

ReactDOM.render(
  <>
    <StrictMode>
      <Search />
    </StrictMode>
  </>,

  document.getElementById("root")
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root") as HTMLElement;
// const root = createRoot(rootElement as HTMLElement);

// root.render(
//   <StrictMode>
//     <Search />
//   </StrictMode>
// );
