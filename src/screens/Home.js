import React from 'react';
import { Link } from "@react-navigation/web";
import { Button } from 'react-bootstrap';
import App from '../App';
import googleSignIn from '../googleSignIn';
import * as firebase from 'firebase';



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




  render() {
    console.log(this.state.signedIn)
    return (
      <div>

        <div>
          <h2>Home Screen</h2>
          {this.state.signedIn == true && <Link routeName="SinglePlayer" params={{ name: "jamie" }}>Play Game</Link>}
        </div>

        {this.state.signedIn == false && <div>
          <Button variant="contained" color="primary" onClick={() => {
            this.signInLogic().then((value) => { console.log(value) })
          }}> Sign-in with Google </Button>
        </div>}

        {this.state.signedIn == true && <div>
          <p>You have successfully signed in with a Google account</p>
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