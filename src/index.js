import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login/Login'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from 'material-ui/Button';

// function App() {
//   return (
    {/* <Button variant="raised" color="primary">
      Hello World
    </Button> */}
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));