import React from 'react';
import { Link } from "@react-navigation/web";
import { Button } from 'react-bootstrap';
import App from '../App';
import googleSignIn from '../googleSignIn';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextLoop from "react-text-loop"; 

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    }
  }

  async signInLogic() {
    if (googleSignIn() == true) {
      this.setState({ signedIn: true })
      return true
    } else {
      this.setState({ signedIn: false })
      return false
    }
  }


  getUserName = () => {
    if (firebase.auth().currentUser){
      return firebase.auth().currentUser.displayName;
    }
  }

  render() {
    console.log(this.state.signedIn)
    return (
      <div className= "announce">

        <div >
            <h1 className="announce">
              Play {' '}
              <TextLoop>
                <span>Logic</span>
                <span>Smart</span>
                <span>Intelligent</span>
              </TextLoop>{" "}
            </h1>
          {this.state.signedIn == true && <Link routeName="SinglePlayer" params={{ name: "jamie" }}><Button variant="outline-secondary">Play Game</Button></Link>}
        </div>

        {this.state.signedIn == true && <div>
          <p>Welcome {this.getUserName}</p>
        </div>}

        {this.state.signedIn == false && <div>
          <Button variant="outline-secondary" textAlign="center" onClick={() => {
            this.signInLogic().then((value) => { console.log(value) })
          }}> Sign-in with Google </Button>
        </div>}

        
      </div>

    );
  }

}



export default Home;







//Leave this here. May need later
{/* <Link routeName="Profile" params={{ name: "brent" }}>
                Go to Brent's Profile
              </Link> */}