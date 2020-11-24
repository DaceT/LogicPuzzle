import React from 'react';
import './GameComponents.css';
import '../App.css';

import * as firebase from 'firebase';

// Each square in the grid. Has two states
class Square extends React.Component {

    state = {
        value:".",
        no_clicks:0
    }

    // On click changes each the state of each square. It also updates the userSolution
    // in singlePlayerBoard.js
    changeSquare = () => {
        if (this.state.no_clicks == 0){
            this.setState({no_clicks:1});
            this.setState({value:"✘"});
            // console.log(this.props.value, 1);
            this.props.updateBoard(this.props.value, 0);
        }else if (this.state.no_clicks == 1 ){
            this.setState({no_clicks:2});
            this.setState({value:"✔"});
            this.props.updateBoard(this.props.value, 2);
        }else{
            this.setState({no_clicks:0});
            this.setState({value:"."});
            this.props.updateBoard(this.props.value, 0);
        }
    }

    render() {
        return (
            <span><button className="cell-control" onClick={this.changeSquare}>
            {this.state.value}
            {"  "}
            </button>
            </span>
        );
    }
}

// The Board. Basically just contains all the squares rendered
class Board6x6 extends React.Component {

  // This function updates the userSolution in the super state. 
  // This way, we can easily compare solutions from singlePlayerBoard.js
  updateBoard = (arr, val) => {
    this.props.updateGrid(arr, val)
  }


  renderSquare(i) {
    return <Square value={i} updateBoard={this.updateBoard} />;
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
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[1][0])}
          {this.renderSquare(this.props.rows[1][1])}
          {this.renderSquare(this.props.rows[1][2])}
          {this.renderSquare(this.props.rows[1][3])}
          {this.renderSquare(this.props.rows[1][4])}
          {this.renderSquare(this.props.rows[1][5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[2][0])}
          {this.renderSquare(this.props.rows[2][1])}
          {this.renderSquare(this.props.rows[2][2])}
          {this.renderSquare(this.props.rows[2][3])}
          {this.renderSquare(this.props.rows[2][4])}
          {this.renderSquare(this.props.rows[2][5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[3][0])}
          {this.renderSquare(this.props.rows[3][1])}
          {this.renderSquare(this.props.rows[3][2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[4][0])}
          {this.renderSquare(this.props.rows[4][1])}
          {this.renderSquare(this.props.rows[4][2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.rows[5][0])}
          {this.renderSquare(this.props.rows[5][1])}
          {this.renderSquare(this.props.rows[5][2])}
        </div>
      </div>
    );
  }
}
  
  export default Board6x6;