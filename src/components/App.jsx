import React from 'react'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

export default App
