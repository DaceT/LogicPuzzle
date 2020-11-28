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

const sortModel = [
  {
    field: 'score',
    sort: 'desc',
  },
];

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
        leaderboardArray.push({
          name: doc.data().profile[0].name,
          email: doc.data().profile[0].email,
          score: doc.data().profile[0].score,
          id: doc.data().profile[0].id,         
        })
      })
      console.log(leaderboardArray)

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
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <h1>Leaderboards</h1>


          {this.state.leaderboard != undefined && <div className={"Leaderboard"}>
            <DataGrid rows={rows} columns={columns} pageSize={5} sortingOrder={['desc', 'asc']} sortModel={sortModel} />
          </div>}
        </div>
      </div>



    );
  }

}



export default Leaderboard;



