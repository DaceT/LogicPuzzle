import React from 'react';
import { createBrowserApp, Link } from "@react-navigation/web";
import Game from './GameComponents';
<<<<<<< HEAD
// import Hints from './HintComponents';
=======
import Hints from './HintComponents';
>>>>>>> added basic structure for grid.



class SinglePlayerGame extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        grid:[["val","val","val","val","val","val","val"],["Name",2,3,4,5,6,7],["Name",2,3,4,5,6,7],["Name",2,3,4,5,6,7],["Name",2,3,4,5,6,7],["Name",2,3,4,5,6,7],["Name",2,3,4,5,6,7],["Name",2,3,4,5,6,7]]
      }
    }
  
    async componentDidMount() {
  
    }
  
   
  
  
    render() {
        return (
            <div>
              <h2>Single Player Game Screen</h2>
              <Game grids={this.state.grid}/>
            </div>
          );
    }
  
  }
  
  

  export default SinglePlayerGame;







//Leave this here. May need later
 {/* <Link routeName="Profile" params={{ name: "brent" }}>
                Go to Brent's Profile
              </Link> */}