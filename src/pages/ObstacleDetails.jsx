import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Box, Card, CardContent, Paper, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export const ObstacleDetails = ()=>{
    const [tableData, setTableData] = useState(null);
    const { notificationcount, setNotificationCount, notificationId, description, timestamp, setDescription, setTimestamp } = useContext(MyContext);

    useEffect(() => {
        // Fetch data from an API or any other source
        const fetchData = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:8000/api/detect-time/${notificationId}`);
            const data = await response.json();
            setDescription(data.description);
            setTimestamp(data.timestamp);
          } catch (error) {
            console.error('Error fetching table data:', error);
          }
        };
    
        fetchData();
      }, []);
      return (
        <div>
            {/* <Paper style={{display: 'flex', height: 500, width: '30%' }} sx={{ margin: '30px' }}> */}
            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1,
                                    // backgroundColor: '#f1f1f1',
                                    padding: '1rem',
                                    marginLeft: 'auto', // Move chat history pane to the right
                                    width: '30%'
                                }}
                            ></div>
            <Box sx={{ paddingTop: 2, paddingLeft:40 }}>
            <Typography variant="h5" gutterBottom>
               Notification Details
            </Typography>
           <Box sx={{ minWidth: 275, paddingTop: 1}}>
           <Card variant="outlined" style={{ height: 210, width:700, backgroundColor: '#d3d3d3' }}>
           <CardContent>
                     <div style={{ whiteSpace: 'pre-wrap' }}>id: {notificationId}</div>
                     <div style={{ whiteSpace: 'pre-wrap' }}>Description: {description}</div>
                     <div style={{ whiteSpace: 'pre-wrap' }}>Timestamp: {timestamp}</div>
                 </CardContent>
            </Card>
            </Box>
            </Box>
            {/* </Paper> */}
        </div>
      );
    };
    
    export default ObstacleDetails;
 
    {/* Display chat history here */}
    // <Box sx={{ paddingTop: 2 }}>
    //     <Typography variant="h5" gutterBottom>
    //         Client Conversation Transcript
    //     </Typography>
    //     <Box sx={{ minWidth: 275, paddingTop: 1 }}>
    //         <Card variant="outlined">
    //             <CardHeader title={companyName} subheader={chatDate} />
    //             <CardContent>
    //                 <div style={{ whiteSpace: 'pre-wrap' }}>{chatTranscript}</div>
    //             </CardContent>
    //         </Card>
    //     </Box>
    // </Box>
    {/* Add your chat history component or content here */}


<div
style={{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: '#f1f1f1',
    padding: '1rem',
    marginLeft: 'auto', // Move chat history pane to the right
    width: '30%'
}}
>
    </div>