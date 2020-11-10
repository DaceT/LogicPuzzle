import React from 'react';
import './GameComponents.css';
<<<<<<< HEAD
import '../App.css';

import * as firebase from 'firebase';

=======
>>>>>>> added basic structure for grid.

class Square extends React.Component {

    state = {
        value:" ",
        no_clicks:0
    }

    changeSquare = () => {
        if (this.state.no_clicks == 0){
            this.setState({no_clicks:1});
            this.setState({value:"X"});
        }else if (this.state.no_clicks == 1 ){
            this.setState({no_clicks:2});
            this.setState({value:"V"});
        }else{
            this.setState({no_clicks:0});
            this.setState({value:" "});
        }
    }

    render() {
        return (
            <button className="cell-control" onClick={this.changeSquare}>
            {this.state.value}
            {"  "}
            </button>
        );
    }
}

class Board6x6 extends React.Component {
<<<<<<< HEAD

  

=======
>>>>>>> added basic structure for grid.
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        
=======
>>>>>>> added basic structure for grid.
        <div className="board-row">
          {this.renderSquare(this.props.rows[0][0])}
          {this.renderSquare(this.props.rows[0][1])}
          {this.renderSquare(this.props.rows[0][2])}
          {this.renderSquare(this.props.rows[0][3])}
          {this.renderSquare(this.props.rows[0][4])}
          {this.renderSquare(this.props.rows[0][5])}
<<<<<<< HEAD
          {/* {this.renderSquare(this.props.rows[0][6])} */}
=======
          {this.renderSquare(this.props.rows[0][6])}
>>>>>>> added basic structure for grid.
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[1][0])}
          {this.renderSquare(this.props.rows[1][1])}
          {this.renderSquare(this.props.rows[1][2])}
          {this.renderSquare(this.props.rows[1][3])}
          {this.renderSquare(this.props.rows[1][4])}
          {this.renderSquare(this.props.rows[1][5])}
<<<<<<< HEAD
          {/* {this.renderSquare(this.props.rows[1][6])} */}
=======
          {this.renderSquare(this.props.rows[1][6])}
>>>>>>> added basic structure for grid.
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[2][0])}
          {this.renderSquare(this.props.rows[2][1])}
          {this.renderSquare(this.props.rows[2][2])}
          {this.renderSquare(this.props.rows[2][3])}
          {this.renderSquare(this.props.rows[2][4])}
          {this.renderSquare(this.props.rows[2][5])}
<<<<<<< HEAD
          {/* {this.renderSquare(this.props.rows[2][6])} */}
=======
          {this.renderSquare(this.props.rows[2][6])}
>>>>>>> added basic structure for grid.
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[3][0])}
          {this.renderSquare(this.props.rows[3][1])}
          {this.renderSquare(this.props.rows[3][2])}
<<<<<<< HEAD
          {/* {this.renderSquare(this.props.rows[3][3])}
          {this.renderSquare(this.props.rows[3][4])}
          {this.renderSquare(this.props.rows[3][5])} */}
          {/* {this.renderSquare(this.props.rows[3][6])} */}
=======
          {this.renderSquare(this.props.rows[3][3])}
          {this.renderSquare(this.props.rows[3][4])}
          {this.renderSquare(this.props.rows[3][5])}
          {this.renderSquare(this.props.rows[3][6])}
>>>>>>> added basic structure for grid.
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[4][0])}
          {this.renderSquare(this.props.rows[4][1])}
          {this.renderSquare(this.props.rows[4][2])}
<<<<<<< HEAD
          {/* {this.renderSquare(this.props.rows[4][3])} */}
=======
          {this.renderSquare(this.props.rows[4][3])}
>>>>>>> added basic structure for grid.
          {/* {this.renderSquare(this.props.rows[4][4])}
          {this.renderSquare(this.props.rows[4][5])}
          {this.renderSquare(this.props.rows[4][6])} */}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[5][0])}
          {this.renderSquare(this.props.rows[5][1])}
          {this.renderSquare(this.props.rows[5][2])}
<<<<<<< HEAD
          {/* {this.renderSquare(this.props.rows[5][3])} */}
=======
          {this.renderSquare(this.props.rows[5][3])}
>>>>>>> added basic structure for grid.
          {/* {this.renderSquare(this.props.rows[5][4])}
          {this.renderSquare(this.props.rows[5][5])}
          {this.renderSquare(this.props.rows[5][6])} */}
        </div>
        <div className="board-row">
<<<<<<< HEAD
          {/* {this.renderSquare(this.props.rows[6][0])}
          {this.renderSquare(this.props.rows[6][1])}
          {this.renderSquare(this.props.rows[6][2])} */}
          {/* {this.renderSquare(this.props.rows[6][3])} */}
=======
          {this.renderSquare(this.props.rows[6][0])}
          {this.renderSquare(this.props.rows[6][1])}
          {this.renderSquare(this.props.rows[6][2])}
          {this.renderSquare(this.props.rows[6][3])}
>>>>>>> added basic structure for grid.
          {/* {this.renderSquare(this.props.rows[6][4])}
          {this.renderSquare(this.props.rows[6][5])}
          {this.renderSquare(this.props.rows[6][6])} */}
        </div>
      </div>
    );
  }
}

class Board9x9 extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(this.props.rows[0][0])}
            {this.renderSquare(this.props.rows[0][1])}
            {this.renderSquare(this.props.rows[0][2])}
            {this.renderSquare(this.props.rows[0][3])}
            {this.renderSquare(this.props.rows[0][4])}
            {this.renderSquare(this.props.rows[0][5])}
            {this.renderSquare(this.props.rows[0][6])}
            {this.renderSquare(this.props.rows[0][7])}
            {this.renderSquare(this.props.rows[0][8])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.rows[1][0])}
            {this.renderSquare(this.props.rows[1][1])}
            {this.renderSquare(this.props.rows[1][2])}
            {this.renderSquare(this.props.rows[1][3])}
            {this.renderSquare(this.props.rows[1][4])}
            {this.renderSquare(this.props.rows[1][5])}
            {this.renderSquare(this.props.rows[1][6])}
            {this.renderSquare(this.props.rows[1][7])}
            {this.renderSquare(this.props.rows[1][8])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.rows[2][0])}
            {this.renderSquare(this.props.rows[2][1])}
            {this.renderSquare(this.props.rows[2][2])}
            {this.renderSquare(this.props.rows[2][3])}
            {this.renderSquare(this.props.rows[2][4])}
            {this.renderSquare(this.props.rows[2][5])}
            {this.renderSquare(this.props.rows[2][6])}
            {this.renderSquare(this.props.rows[2][7])}
            {this.renderSquare(this.props.rows[2][8])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.rows[3][0])}
            {this.renderSquare(this.props.rows[3][1])}
            {this.renderSquare(this.props.rows[3][2])}
            {this.renderSquare(this.props.rows[3][3])}
            {this.renderSquare(this.props.rows[3][4])}
            {this.renderSquare(this.props.rows[3][5])}
            {this.renderSquare(this.props.rows[3][6])}
            {this.renderSquare(this.props.rows[3][7])}
            {this.renderSquare(this.props.rows[3][8])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.rows[4][0])}
            {this.renderSquare(this.props.rows[4][1])}
            {this.renderSquare(this.props.rows[4][2])}
            {this.renderSquare(this.props.rows[4][3])}
            {this.renderSquare(this.props.rows[4][4])}
            {this.renderSquare(this.props.rows[4][5])}
            {this.renderSquare(this.props.rows[4][6])}
            {this.renderSquare(this.props.rows[4][7])}
            {this.renderSquare(this.props.rows[4][8])}
          </div>
          <div className="board-row">
            {this.renderSquare(this.props.rows[5][0])}
            {this.renderSquare(this.props.rows[5][1])}
            {this.renderSquare(this.props.rows[5][2])}
            {this.renderSquare(this.props.rows[5][3])}
            {this.renderSquare(this.props.rows[5][4])}
            {this.renderSquare(this.props.rows[5][5])}
            {this.renderSquare(this.props.rows[5][6])}
            {this.renderSquare(this.props.rows[5][7])}
            {this.renderSquare(this.props.rows[5][8])}
          </div>
        </div>
      );
    }
  }

class Game extends React.Component {

    selectBoard = (gridType) => {
        if (gridType == "Easy"){
            return <Board6x6 rows={this.props.grids}/>;
        }
        return <Board9x9 rows = {this.props.grids} />;

    }

    render() {
      return (
        <div>
          <div>
            <Board6x6
              rows={this.props.grids}
              />
          </div>
        </div>
      );
    }
  }
  
  export default Game;