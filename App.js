import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Table, Checkbox} from 'reactstrap';
//import logo from './logo.svg';
import './App.css';

 class Example extends React.Component{
   
render(){
  
  return(
    <div>
      <h1>Offer Details</h1>
   <Table bordered dark hover responsive>

     <tbody id="tablebody">
       <tr className="tablerow">
         
        
         <td> <input type="Checkbox" /> mark</td>
         <td> <input type="Checkbox" /> Otto</td>
         <td><input type="Checkbox" /> @mdo</td>
         <td><input type="Checkbox" /> Thornton</td>
       </tr>
       <tr className="tablerow">
        
         <td><input type="Checkbox" />  Jacob</td>
         <td><input type="Checkbox" /> Thornton</td>
         <td><input type="Checkbox" /> Thornton</td>
         <td><input type="Checkbox" /> @Fat</td>
       </tr>
       <tr className="tablerow">
       
       <td><input type="Checkbox" /> Larry</td>
       <td><input type="Checkbox" /> the Bird</td>
       <td><input type="Checkbox" /> @twitter</td>
       <td><input type="Checkbox" /> Thornton</td>
       

       </tr>
       
     </tbody>

     
   </Table>
   </div>
  );
}
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello  <code>World</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
export default Example;