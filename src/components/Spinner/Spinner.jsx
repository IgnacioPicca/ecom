import React from "react"
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import "./spinner.css";


// export default function Spinner() {
//     return (
//         // <div className="spinnerContainer">
//         // <Box sx={{ display: 'flex', position: 'center' }}>
//         //     <CircularProgress />
//         // </Box>
//         // </div>

//         <Box sx={{ width: '100%' }}>
//             <LinearProgress />
//         </Box>
//     );
// }


export default function Spinner() {
    return (
        <Box sx={{
            width: '80%', margin: '100px auto'
        }}>
            <LinearProgress />
        </Box>
    );
}
