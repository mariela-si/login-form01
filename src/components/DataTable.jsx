import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress  } from '@mui/material';



const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        setData(jsonData.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return ( 
    <>
    {loading ? (
        <CircularProgress style={{ display: "block", margin: "20px auto" }} />
      ) : (
    <TableContainer component={Paper} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Mass</TableCell>
          <TableCell>Height</TableCell>
          <TableCell>Hair Color</TableCell>
          <TableCell>Skin Color</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.mass}</TableCell>
            <TableCell>{row.height}</TableCell>
            <TableCell>{row.hair_color}</TableCell>
            <TableCell>{row.skin_color}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer> 
  )}
      
    
     
    </>
   );
}
 
export default DataTable;