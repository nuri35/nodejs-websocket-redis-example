import React,{useState} from "react";
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function PositionedSnackbar({message}) {
 
  
  const [open, setOpen] = useState(true);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (
    <div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
      This is a success message!
    </Alert>
  </Snackbar>
  </div>
  );
}