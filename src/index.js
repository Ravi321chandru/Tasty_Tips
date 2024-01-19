import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Now in latest version of react-router-dom, we have to use use Routes instead of Switch
import Home from './Home';
import TamilNadu from './TamilNadu';
import Kerala from './Kerala'; // Import other state components
import Rajasthan from './Rajasthan';
import Karnataka from './Karnataka';
import Punjab from './Punjab';
import Maharashtra from './Maharashtra';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* We have to use Routes instead of Switch in latest version */}
      <Routes>  
        <Route exact path="/" element={<Home />} />
        <Route path="/TamilNadu" element={<TamilNadu />} />
        <Route path="/Kerala" element={<Kerala />} />
        <Route path="/Karnataka" element={<Karnataka />} />
        <Route path="/Punjab" element={<Punjab />} />
        <Route path="/Maharashtra" element={<Maharashtra />} />
        <Route path="/Rajasthan" element={<Rajasthan />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

//You can also do the same above thing in below format:

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/TamilNadu" component={TamilNadu} />
//         <Route path="/Kerala" component={Kerala} />
//         <Route path="/Karnataka" component={Karnataka} />
//         <Route path="/Punjab" component={Punjab} />
//         <Route path="/Maharashtra" component={Maharashtra} />
//         <Route path="/Rajasthan" component={Rajasthan} />
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
