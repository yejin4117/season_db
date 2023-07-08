import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import SimpleReactLightbox from 'simple-react-lightbox';

// ReactDOM.render(
//   <React.StrictMode>
//     <SimpleReactLightbox>
//       <App />
//     </SimpleReactLightbox>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// )
