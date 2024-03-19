// export const getObstacleDetails = async () => {
//     try {
//       console.log("the search text is", searchText, clientName)
//       // const response = await fetch(API_URL + '/getChatResponse/'+searchText+'/'+clientName+'/', {
//         const response = await fetch(API_URL + '/getChatResponse/', {
//         method: 'POST',
//         body: JSON.stringify({ searchText, clientName }),
//         // body: {searchText, clientName},
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//       throw error;
//     }
//   };