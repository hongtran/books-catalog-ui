import React from 'react';
import '../styles/scss/App.scss';
import routes from '../router/index';

function App() {
  return (
    <div className="panel-bg">
      <div className="header">
        <div className="header-title">Book Catalog</div>
      </div>
      <main>
        {routes}
      </main>
    </div>
  );
}

export default App;
