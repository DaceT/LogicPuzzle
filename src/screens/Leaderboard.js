import React from 'react';
import { DataGrid } from '@material-ui/data-grid'
import { Link } from "@react-navigation/web";
import '../App.css';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase'
import App from '../App';

const columns = [
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'email', headerName: 'email', width: 200 },
  { field: 'score', headerName: 'score', width: 130 },
];

//include firebase ID, users name/email, user score
// var rows = [
//   { id: 1, lastName: 'Null Example', firstName: null, age: null },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 43 },
//   { id: 6, lastName: 'Melisandre', firstName: "last name", age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

class Leaderboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.ref = firebase.firestore().collection('leaderboard').doc('3x3').collection('names-ages-birthdays');

  }

  async componentDidMount() {

    this.unsubscribe = this.ref.onSnapshot(async (querySnapshot) => {
      var leaderboardArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data().fireID.name)
        leaderboardArray.push({
          name: doc.data().fireID.name,
          email: doc.data().fireID.email,
          score: doc.data().fireID.score,
          id: '1sef3' //swap with firebase ID         
        })
      })
      console.log(leaderboardArray)
      // var mapToArray = [];
      // for (let i = 1; i < puzzleArray[0].size; i++) {
      //   mapToArray.push(puzzleArray[0].solution[i] + " ");
      // }
      // console.log(mapToArray);

      this.setState({
        leaderboard: leaderboardArray,

      })


      this.unsubscribe();
    })
  }




  render() {
    console.log(this.state.leaderboard);
    var rows = this.state.leaderboard;
    return (
      <div>
        <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
          <Button variant="outline-secondary">
            <Link routeName="Home" params={{ name: "jamie" }}>Home</Link>
          </Button>
        </div>
<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Leaderboards</h1>
        

        {this.state.leaderboard != undefined && <div className={"Leaderboard"}>
          <DataGrid rows={rows} columns={columns} pageSize={5} key='name' />
        </div>}
      </div>
      </div>
      


    );
  }

}



export default Leaderboard;


