import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    // Fetch data from an API or any other source
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/detect-time/');
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'id', width: 200 },
    { field: 'description', headerName: 'description', width: 300 },
    { field: 'timestamp', headerName: 'timestamp', width: 300 },
    
    // { field: 'file_path',headerName: 'FilePath', width: 1000}

    // Add more columns as needed
  ];
  const filteredChatHistory = tableData.filter((row) =>
    row.timestamp.toLowerCase()
  );

  return (
    <Container fixed sx={{ paddingTop: 5 }}>
      <div style={{ height: 500, width: '100%' }}>
        {/* <DataGrid rows={filteredChatHistory} columns={columns} /> */}
        <DataGrid rows={filteredChatHistory} columns={columns} pageSize={5} getRowId={(row) => row.timestamp} />
      </div>
    </Container>
  );
};
