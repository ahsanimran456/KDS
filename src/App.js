import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import KDSHeader from './KdsHeader';
import KDSBoard from './KDSBoard';
import KDSLane, { sampleOrders } from "./KDSBoard";
import KDSMenu from './KDSBoard';
import KDSCard from './KDSBoard';
import Dashboard from './KDSBoard';
import Header2 from './Header2';

function App() {



  return (
    <>
       <KDSHeader />
       {/* <Header2 /> */}
       <Dashboard />
    </>
  );
}

export default App;
