import React from 'react';
import { createBrowserApp, Link } from "@react-navigation/web";
import * as firebase from 'firebase';



class DataTesting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.ref = firebase.firestore().collection('eliminationgrids');
  }

  async componentDidMount() {

    this.unsubscribe = this.ref.onSnapshot(async (querySnapshot) => {
      var puzzleArray = [];
      querySnapshot.forEach((doc) => {
        puzzleArray.push({
          cat1: doc.data().cat1,
          cat1op: doc.data().cat1options,
          cat2: doc.data().cat2,
          cat2op: doc.data().cat2options,
          cat3: doc.data().cat3,
          cat3op: doc.data().cat3options,
          cat4: doc.data().cat4,
          cat4op: doc.data().cat4options,
          solution: doc.data().solution,
          size: doc.data().size,
        })
      })
      console.log(puzzleArray);

      var mapToArray = [];
      for (let i = 1; i < puzzleArray[0].size; i++) {
        mapToArray.push(puzzleArray[0].solution[i] + " ");
      }
      console.log(mapToArray);

      this.setState({
        puzzle: puzzleArray,
        solution: mapToArray,

      })

      this.unsubscribe();
    })
  }




  render() {
    return (
      <div>
        <h2>Data Testing Screen</h2>
        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat1}</p>}
        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat1op}</p>}

        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat2}</p>}
        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat2op}</p>}

        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat3}</p>}
        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat3op}</p>}

        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat4}</p>}
        {this.state.puzzle != undefined && <p>{this.state.puzzle[0].cat4op}</p>}

        {this.state.puzzle != undefined && <p>{this.state.solution}</p>}

      </div>
    );
  }

}



export default DataTesting;







//Leave this here. May need later
{/* <Link routeName="Profile" params={{ name: "brent" }}>
                Go to Brent's Profile
              </Link> */}