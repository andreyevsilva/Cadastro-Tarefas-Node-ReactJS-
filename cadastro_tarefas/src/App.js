import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../src/template/custom.css'

import React from 'react';

import Menu from './template/menu'
import Routes from './routes/routes'

function App() {
    return (
      <div className='container'>
        <Menu />
        <Routes/>
      </div>
    );

}

export default App;
