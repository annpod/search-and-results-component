import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Search } from 'search-and-results-component'

ReactDOM.render(
  <>
    <StrictMode>
      Hello
      <Search />
    </StrictMode>
  </>,

  document.getElementById('root')
)
