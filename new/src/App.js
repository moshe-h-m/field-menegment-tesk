import logo from './logo.svg';
import './App.css';
import ModalForm from "./components/modalForm";
import {useState} from "react";
import {IconButton} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CanvasField from "./components/canvas";
import FieldEditor from "./components/fieldEditor";

function App() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <div className="App">
       <header className="App-header"  >
          <IconButton onClick={handleClickOpen} color="primary" variant="contained" sx={{marginTop: 8}}>
              <AddCircleOutlineIcon sx={{fontSize: "40px", m:2}}/>
          </IconButton>
          <CanvasField/>
           <FieldEditor/>
        <ModalForm open={open} handleClose={handleClose}/>
      </header>
    </div>
  );
}

export default App;
