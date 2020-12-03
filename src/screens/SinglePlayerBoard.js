import React from 'react';
import { createBrowserApp, Link } from "@react-navigation/web";
import { InputLabel, NativeSelect } from '@material-ui/core';
import * as firebase from 'firebase';
import Game from './GameComponents';
import Board6x6 from './GameComponents';
import '../App.css';
import { Button } from 'react-bootstrap';
import App from '../App';

var titles = ['names-ages-birthdays', 'ages-names-superheroes']


class SinglePlayerGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: [[[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]],
      [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5]],
      [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]],
      [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]],
      [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5]],
      [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]]],
      isPuzzleCorrect: false,
      size: '3x3',
      selector: 0,
      title: 'names-ages-birthdays',
    }
    this.ref = firebase.firestore().collection('eliminationgrids');
    this.ref2 = firebase.firestore().collection('users').where('id', '==', firebase.auth().currentUser.uid);
  }

  async componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(async (querySnapshot) => {
      var puzzleArray = [];
      var mapSolLocal = {};
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
          hints: doc.data().hints,
          mapSol: doc.data().mapSol,
          size: doc.data().size,
        })
      })
      console.log(puzzleArray[this.state.selector].mapSol);
      console.log(puzzleArray);
      var tempSolution = [[0, 0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0, 0]
                          ];

      for (var arr in puzzleArray[this.state.selector].mapSol) {
        console.log(puzzleArray[this.state.selector].mapSol[arr][0], puzzleArray[this.state.selector].mapSol[arr][1]);
        console.log(puzzleArray[1].mapSol[arr][0], puzzleArray[1].mapSol[arr][1]);
        tempSolution[puzzleArray[this.state.selector].mapSol[arr][0]][puzzleArray[this.state.selector].mapSol[arr][1]] = 2;
      }

      // set the new solution in state
      this.setState({
        puzzle: puzzleArray,
        solution: tempSolution,
        userSolution:[[0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0]
                      ]

      })

      this.unsubscribe();
    })

    this.unsubscribe2 = this.ref2.onSnapshot(async (querySnapshot) => {
      var userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({
          name: doc.data().name,
          email: doc.data().email,
        })
      })
      console.log(userArray);
      this.setState({user: userArray})
    } )
  }


resetUserSolution = (async) => {
  
  this.componentDidMount();

}



// loops through current user solution, and compares with the actual solution
// currently console.logs whether it is correct or wrong. Should show a dialog box 
// of the users status (correct or wrong)
// TODO : Nabil
checkPuzzle = () => {
  let score = 0;
  console.log(this.state.userSolution)
  console.log(this.state.solution)
  for (let x = 0; x < this.state.userSolution.length; x++) {
    for (let y = 0; y < this.state.userSolution[0].length; y++) {
      if (this.state.userSolution[x][y] != this.state.solution[x][y]) {
        this.setState({ isPuzzleCorrect: false });
        console.log("Your puzzle is wrong");
        // alert("Part of your puzzle is incorrect.")
        score--;
      }
      score++;
    }
  }
  //Add score to user document and leaderboard collection


  firebase.firestore().collection('leaderboard').doc(this.state.size).collection(this.state.title).doc(firebase.auth().currentUser.uid).set({
    profile: [
      {
        name: this.state.user[0].name,
        email: this.state.user[0].email,
        score: score,
        id: firebase.auth().currentUser.uid
      }]
  })









  this.setState({ isPuzzleCorrect: true });
  if(score == 36) {
    alert("Your puzzle is correct.")
  } else {
    alert("Part of your puzzle is incorrect.")
  }
  // window.location.href = "src/screens/Home.js" //navigate home after select puzzle is submitted
  return;
}

// updates the userSolution onClick of each square
updateGrid = (arr, val) => {
  const tempGrid = this.state.userSolution;
  tempGrid[arr[0]][arr[1]] = val;
  this.setState({ userSolution: tempGrid });
}


render() {
  return (
    <div>

      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
        <Button variant="outline-primary">
          <Link routeName="Leaderboard" params={{ name: "jamie" }}>Leaderboard</Link>
        </Button>
      </div>
      <div className="announce">
        Use the hints provided below to answer the puzzle!
      </div>

      {firebase.auth().currentUser.uid == 'JKzw4RU0uOY8KwmeTMVtjsie1JK2' || firebase.auth().currentUser.uid == 'NK6ud6z61vSBxiwKhnk824I9PVE2' || firebase.auth().currentUser.uid == 'T8ZRJBWncpWDehryLgFwDUMu0bx1' && <div style={{ justifyContent: 'flex-start', display: 'flex' }}>
          <InputLabel htmlFor="select">Load Puzzle</InputLabel>
              <NativeSelect id="select" onChange={async(value) => { console.log(value.target.value); this.setState({selector: value.target.value, title: titles[value.target.value]}); 
              alert(this.state.selector); alert(this.state.title); await this.resetUserSolution() }}>
                <option value="0">1 </option>
                <option value="1">2 </option>
              </NativeSelect>
            </div>}

      <div className={"column"}>

        {/* <div style={{ padding: 40 }} /> */}
        {this.state.puzzle != undefined && <div>
          <p className={"h-text2"}>{this.state.puzzle[this.state.selector].cat3}</p>


          {/* <div style={{ marginTop: 20 }} /> */}

          <div className={"right2"}>
            <div className={"Board-Options-Ages"}> {this.state.puzzle[this.state.selector].cat3op[0]}</div>
            <div className={"Board-Options-Ages"}> {this.state.puzzle[this.state.selector].cat3op[1]}</div>
            <div className={"Board-Options-Ages"}> {this.state.puzzle[this.state.selector].cat3op[2]}</div>
          </div>

        </div>}

        <div style={{ paddingLeft: 80 }} />

        {this.state.puzzle != undefined && <div>
          <p className={"h-text2"}>{this.state.puzzle[this.state.selector].cat4}</p>
          <div style={{ marginBottom: 15 }} />

          <div className={"right2"}>
            <div className={"Board-Options-Birthdays2"}> {this.state.puzzle[this.state.selector].cat4op[0]}</div>
            <div className={"Board-Options-Birthdays2"}> {this.state.puzzle[this.state.selector].cat4op[1]}</div>
            <div className={"Board-Options-Birthdays2"}> {this.state.puzzle[this.state.selector].cat4op[2]}</div>
          </div>

        </div>}

      </div>

      <div style={{ paddingTop: 10 }} />

      <div className={"row2"}>
        <div>
          <div style={{ paddingTop: 51 }} />

          {this.state.puzzle != undefined && <div className={"row"}>
            <div class="left">
              <p className={"h-text"}>{this.state.puzzle[this.state.selector].cat2}</p>
            </div>

            <div className={"right"}>
              <div className={"Board-Options-Names"}> {this.state.puzzle[this.state.selector].cat2op[0]}</div>
              <div className={"Board-Options-Names"}> {this.state.puzzle[this.state.selector].cat2op[1]}</div>
              <div className={"Board-Options-Names"}> {this.state.puzzle[this.state.selector].cat2op[2]}</div>
            </div>

          </div>}

          <div style={{ paddingTop: 53 }} />

          {this.state.puzzle != undefined && <div className={"row"}>
            <div className="left">
              <p className={"h-text"}>{this.state.puzzle[this.state.selector].cat1}</p>
            </div>

            <div className={"right"}>
              <div className={"Board-Options-Birthdays1"}> {this.state.puzzle[this.state.selector].cat1op[0]}</div>
              <div className={"Board-Options-Birthdays1"}> {this.state.puzzle[this.state.selector].cat1op[1]}</div>
              <div className={"Board-Options-Birthdays1"}> {this.state.puzzle[this.state.selector].cat1op[2]}</div>
            </div>

          </div>}

        </div>


        <div style={{ paddingLeft: 25 }} />
        <div style={{ paddingTop: 50 }}>
          <Board6x6 rows={this.state.grid} updateGrid={this.updateGrid} />

        </div>











      </div>


      {this.state.puzzle != undefined && <div>

        <div class="left">
          <p className={"h-hints"}>Hints</p>
        </div>

        <div style={{ paddingTop: 20 }} />

        <div className={"Hints"}> 1.) {this.state.puzzle[this.state.selector].hints[0]}</div>
        <div className={"Hints"}> 2.) {this.state.puzzle[this.state.selector].hints[1]}</div>
        <div className={"Hints"}> 3.) {this.state.puzzle[this.state.selector].hints[2]}</div>
        <div className={"Hints"}> 4.) {this.state.puzzle[this.state.selector].hints[3]}</div>
      </div>}



      <Button variant="outline-secondary" onClick={this.checkPuzzle}>Submit Puzzle</Button>
    </div>


  );
}

}



export default SinglePlayerGame;







//Leave this here. May need later
{/* <Link routeName="Profile" params={{ name: "brent" }}>
                Go to Brent's Profile
              </Link> */}