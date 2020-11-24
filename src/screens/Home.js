import React from 'react';
import { Link } from "@react-navigation/web";
import { Button } from 'react-bootstrap';
import App from '../App';




class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
  
   
  
   
  
  
    render() {
        return (
            <div>
              <h2>Home Screen</h2>
              <Link routeName="SinglePlayer" params={{ name: "jamie" }}>Game </Link>
            </div>
          );
    }
  
  }
  
  

  export default Home;







//Leave this here. May need later
 {/* <Link routeName="Profile" params={{ name: "brent" }}>
                Go to Brent's Profile
              </Link> */}