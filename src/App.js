// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Timer from './StateExample';
// import Header from './Header';
// import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    let name = {
      firstName: 'Test',
      lastName: 'Name'
    }

    let hightlight ={
      color: 'green',
      backgroundColor:'grey'
    }

    let element = null;
    let isLoggedIn = false;
    if(isLoggedIn){
      element = <h1>Welcome Admin</h1>
    }else{
      element = <h1>Please Login</h1>
    }

    var employees = [{empId: 1234, name:'Ronaldo', designation: 'SE'},{empId: 5678, name:'Mesi', designation: 'SSE'},{empId: 9876, name:'Ronaldo', designation: 'TA'}]

    var rowData = [];
    for(let i = 0; i < employees.length; i++){
      var row = (
        <tr>
          <td>{employees[i].empId}</td>
          <td>{employees[i].name}</td>
          <td>{employees[i].designation}</td>
        </tr>
      )
      rowData.push(row);
    }
    return (<React.Fragment>
      <h3>ReactJS;</h3>
      <p>React is a JavaScript Library for creating user interfaces, oper souces to the world by Facebook and Instagram team in 2003. <br/> React's main foal is to make developement of UI components easy and modular. It is intended to ease the process of building <br/>large applications using data that changes over time.</p>
        <React.Fragment>
        <h1 style={hightlight}>{name.firstName} {name.lastName}</h1>
      </React.Fragment>
      <React.Fragment>
        {element}
      </React.Fragment>

      <React.Fragment>
        <table style={{width:'60%'}} className='table'>
          <thead className='thead-light'>
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {rowData}
          </tbody>
        </table>
      </React.Fragment>
      <br></br>
      <React.Fragment>
        <Timer></Timer>
      </React.Fragment>
    </React.Fragment>
    
    )

    
    // (
    //   <div className="App">
    //     <Header/>
    //   </div>
    // );
  }  
}

export default App;
