import React from 'react';
import { createBrowserApp, Link } from "@react-navigation/web";
import * as firebase from 'firebase';
import '../App.css';


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
        <div className={"row2"}>

          <div>
            {this.state.puzzle != undefined && <div className={"row"}>
              <div class="left">
                <p className={"h-text"}>{this.state.puzzle[0].cat2}</p>
              </div>

              <div className={"right"}>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat2op[0]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat2op[1]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat2op[2]}</div>
              </div>

            </div>}

            {this.state.puzzle != undefined && <div className={"row"}>
              <div class="left">
                <p className={"h-text"}>{this.state.puzzle[0].cat1}</p>
              </div>

              <div className={"right"}>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat1op[0]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat1op[1]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat1op[2]}</div>
              </div>

            </div>}
          </div>
          
          <div style={{ padding: 40 }} />

          {this.state.puzzle != undefined && <div>
                <p className={"h-text2"}>{this.state.puzzle[0].cat3}</p>
              <div style={{ marginBottom: 20 }} />

              <div className={"right2"}>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat3op[0]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat3op[1]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat3op[2]}</div>
              </div>

            </div>}

            <div style={{ padding: 20 }} />

            {this.state.puzzle != undefined && <div>
                <p className={"h-text2"}>{this.state.puzzle[0].cat4}</p>
              <div style={{ marginBottom: 30 }} />

              <div className={"right2"}>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat4op[0]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat4op[1]}</div>
                <div className={"Board-Options"}> {this.state.puzzle[0].cat4op[2]}</div>
              </div>

            </div>}
        </div>
      </div>

      //   <div className={"Full-Board"}>
      //     <h2>Data Testing Screen</h2>

      //     {this.state.puzzle != undefined &&
      //       <div className={"Group"}>
      //         <p className={"Board-Categories"}>{this.state.puzzle[0].cat1}</p>
      //         <div className={"Board-Options-Group"}>
      //           <p className={"Board-Options"}> {this.state.puzzle[0].cat1op[0]}</p>
      //           <p className={"Board-Options"}> {this.state.puzzle[0].cat1op[1]}</p>
      //           <p className={"Board-Options"}> {this.state.puzzle[0].cat1op[2]}</p>
      //         </div>

      //       </div>}

      //     {this.state.puzzle != undefined &&
      //       <div className={"Group"}>
      //         <p className={"Board-Categories"}>{this.state.puzzle[0].cat2}</p>
      //         <div className={"Board-Options-Group"}>
      //           <p className={"Board-Options"}> {this.state.puzzle[0].cat2op[0]}</p>
      //           <p className={"Board-Options"}> {this.state.puzzle[0].cat2op[1]}</p>
      //           <p className={"Board-Options"}> {this.state.puzzle[0].cat2op[2]}</p>
      //         </div>

      //       </div>}

      //     <div>
      //       {this.state.puzzle != undefined &&
      //         <div className={"Group"}>
      //           <p className={"Board-Categories"}>{this.state.puzzle[0].cat3}</p>
      //           <div className={"Board-Options-Group"}>
      //             <p className={"Board-Options"}> {this.state.puzzle[0].cat3op[0]}</p>
      //             <p className={"Board-Options"}> {this.state.puzzle[0].cat3op[1]}</p>
      //             <p className={"Board-Options"}> {this.state.puzzle[0].cat3op[2]}</p>
      //           </div>

      //         </div>}

      //       {this.state.puzzle != undefined &&
      //         <div className={"Group"}>
      //           <p className={"Board-Categories"}>{this.state.puzzle[0].cat4}</p>
      //           <div className={"Board-Options-Group"}>
      //             <p className={"Board-Options"}> {this.state.puzzle[0].cat4op[0]}</p>
      //             <p className={"Board-Options"}> {this.state.puzzle[0].cat4op[1]}</p>
      //             <p className={"Board-Options"}> {this.state.puzzle[0].cat4op[2]}</p>
      //           </div>

      //         </div>}
      //     </div>


      //     {this.state.puzzle != undefined && <p>{this.state.solution}</p>}

      //   </div>
      // </div> 
    );
  }

}



export default DataTesting;







//Leave this here. May need later
{/* <Link routeName="Profile" params={{ name: "brent" }}>
                Go to Brent's Profile
              </Link> */}