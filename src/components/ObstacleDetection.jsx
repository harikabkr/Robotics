// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { MyContext } from '../context/MyContext';

// export const ObstacleDetection = () => {
//   const navigate = useNavigate();
//   const { notificationcount, setNotificationCount, notificationId, setNotificationId, setDescription, setTimestamp } =
//     useContext(MyContext);
//   const [recieved, setRecieved] = useState(false);
//   const [notifications, setNotifications] = useState([]);

//   const notificationIdRef = useRef(notificationId);
//   useEffect(() => {
//     // Keep ref in sync with state
//     notificationIdRef.current = notificationId;
//   }, [notificationId]);

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:8000/ws/notifications/');
//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       toast.info(`Alert: ${data.description}, id: ${data.id}, timestamp: ${data.timestamp}`, {
//         pauseOnHover: true,
//         draggable: true,
//         progressStyle: { background: '#d3d3d3' },
//       });
//       console.log('> Notified user: ', data.id);
//       setNotificationId(data.id);
//       setNotificationCount((prevCount) => prevCount + 1);
//       setDescription(data.description);
//       setTimestamp(data.timestamp);
//       setRecieved(true);
//     };
//     return () => {
//       socket.close();
//       setRecieved(false);
//     };
//   }, [notificationcount]); // Include notificationcount in the dependency array

//   const handleNotificationClick = useCallback(() => {
//     console.log('the id is', notificationId, notificationIdRef.current);
//     navigate(`/obstacle_details/${notificationIdRef.current}`);
//   }, [recieved, notificationId]);

//   // Fetch notifications data from the server
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/detect-time/'); // Replace with your actual API endpoint
//         const data = await response.json();
//         setNotifications(data);
//       } catch (error) {
//         console.error('Error fetching notifications:', error);
//       }
//     };

//     fetchNotifications();
//   }, [notificationcount]); // Include notificationcount in the dependency array

//   return (
//     <div>
//       <ToastContainer position="bottom-right" onClick={() => handleNotificationClick()} />
//       {/* Display notifications matching the count under the notification icon */}
//       {notifications.length > 0 && (
//         <div>
//           <h3>Notifications:</h3>
//           <ul>
//             {notifications.map((notification) => (
//               <li key={notification.id}>{notification.description}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ObstacleDetection;


import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';


export const ObstacleDetection = () => {
  const navigate = useNavigate();
  const { notificationcount, setNotificationCount, notificationId, setNotificationId, setDescription, setTimestamp } = useContext(MyContext);
  const [ recieved, setRecieved ] = useState(false);

  const notificationIdRef = useRef(notificationId);
  useEffect(() => {
    // Keep ref in sync with state    
    notificationIdRef.current = notificationId;
  }, [notificationId]);


  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/notifications/');
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      toast.info(`Alert: ${data.description}, id: ${data.id}, timestamp: ${data.timestamp}`,{pauseOnHover: true,draggable: true,progressStyle: { background: '#d3d3d3' }});
      console.log('> Notified user: ', data.id);
      setNotificationId(data.id);
      setNotificationCount((prevCount) => prevCount + 1);
      setDescription(data.description);
      setTimestamp(data.timestamp);
      setRecieved(true);
    };
    return () => {
      socket.close();
      setRecieved(false)
    };
  }, []); 

  const handleNotificationClick = useCallback(() => {
    console.log("the id is", notificationId,  notificationIdRef.current)
    navigate(`/obstacle_details/${notificationIdRef.current}`);
  }, [recieved, notificationId])

  return (
    <div>
      <ToastContainer position="bottom-right" onClick={() => handleNotificationClick()}/>
    </div>
  );
};
export default ObstacleDetection;
