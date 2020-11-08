import React from 'react';
import { createBrowserApp, Link } from "@react-navigation/web";
import * as firebase from 'firebase';



class DataTesting extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        
      }
      this.ref = firebase.firestore().collection('users');
    }
  
    async componentDidMount() {
  
        this.unsubscribe = this.ref.onSnapshot(async (querySnapshot) => {
            var userArray = [];
            querySnapshot.forEach((doc) => {
                userArray.push({
                age: doc.data().age,
                email: doc.data().email,
                name: doc.data().name,
              })
            })
            console.log(userArray);
            this.setState({
              users: userArray,
              age: userArray[0].age,
              email: userArray[0].email,
              name: userArray[0].name

            })
      
            this.unsubscribe();
          })
    }
  
   
  
  
    render() {
        return (
            <div>
              <h2>Data Testing Screen</h2>
              <p>{this.state.age}</p>
              <p>{this.state.email}</p>
              <p>{this.state.name}</p>

            </div>
          );
    }
  
  }
  
  

  export default DataTesting;







//Leave this here. May need later
 {/* <Link routeName="Profile" params={{ name: "brent" }}>
                Go to Brent's Profile
              </Link> */}