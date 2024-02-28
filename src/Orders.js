import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Channel', headerName: 'Channel', width: 130 },
  { field: 'OrderNumber', headerName: 'Order Number', width: 130 },
  { field: 'OrderDate', headerName: 'Order Date', width: 130 },
  { field: 'City', headerName: 'City', width: 130 },
  { field: 'CustomerName', headerName: 'Customer Name', width: 130 },
  { field: 'OrderValue', headerName: 'Order Value', width: 130 },
  { field: 'Status', headerName: 'Status', width: 130 },
  { field: 'Operation', headerName: 'Operation', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
 ];

const rows = [
  { id: 1, Channel: "",OrderNumber :'#TKN20203754', OrderDate: "2022-05-04",  City: 'Lucknow', CustomerName:'Abhishek dixit', OrderValue:'0.00', Status:'pending', Operation: 'Action' },
  { id: 2, Channel: "",OrderNumber :'#TKN20203753', OrderDate: "2022-05-04",  City: 'Lucknow', CustomerName:'Abhishek dixit', OrderValue:'0.00', Status:'pending', Operation: 'Action' },
  { id: 3, Channel: "",OrderNumber :'#TKN20203752', OrderDate: "2022-05-04",  City: 'Lucknow', CustomerName:'Abhishek dixit', OrderValue:'0.00', Status:'pending', Operation: 'Action' },
];

export default function Orders() {
  return (
    <div style={{ height: 400, width: '100%' }}>
          <Typography variant="h1" component="div">
              Orders
            </Typography>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Pending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"aria-current="page" href="#">Accepted</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"aria-current="page" href="#">AWS Created</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Ready to Ship</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Shipped</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Completed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cancelled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}