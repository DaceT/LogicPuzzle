import React from 'react';
import { DataGrid } from '@material-ui/data-grid'
import '../App.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${
      params.getValue('lastName') || ''
      }`,
  },
];

//include firebase ID, users name/email, user score
const rows = [
  { id: 1, lastName: 'Null Example', firstName: null, age: null },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 43 },
  { id: 6, lastName: 'Melisandre', firstName: "last name", age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

class Leaderboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  async componentDidMount() {

  }




  render() {
    return (
      <div className={"Leaderboard"}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>

    );
  }

}



export default Leaderboard;


