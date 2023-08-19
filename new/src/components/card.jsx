import {IconButton, TableCell, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function CardField() {
    return (
        <div>
            <TableRow sx={{justifyContent: 'space-between', minWidth: 650}}>
                <TableCell>Status</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>
                    <IconButton aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                </TableCell>
            </TableRow>
        </div>
    )
}