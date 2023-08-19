import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import CardField from "./card";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch, useSelector} from "react-redux";
import Filter1Icon from '@mui/icons-material/Filter1';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import {removeField} from "../actions";


export default function CanvasField() {

    const fieldList = useSelector(state => state.allReducers.FieldList)

    const dispatch = useDispatch();

    return (
        <Box sx={{marginTop: 6}}>
            <h1>Canvas Field</h1>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{justifyContent: 'space-between'}}>
                            <TableCell>Type</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fieldList.map((field) => {
                            return (
                                <TableRow
                                    key={field.id}
                                    sx={{
                                        justifyContent: 'space-between',
                                        minWidth: 650,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            cursor: 'pointer',
                                        },
                                        borderRadius: 2,
                                        m: 1,
                                    }}>
                                    <TableCell>{field.field.type === 'number' ?
                                        <Filter1Icon/> : field.field.type === 'string' ? <TextFieldsIcon/> : null
                                    }</TableCell>
                                    <TableCell>{field.field.name}</TableCell>
                                    <TableCell>{`${field.field.from}:${field.field.to}`}</TableCell>
                                    <TableCell>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon
                                                onClick={() => dispatch(removeField(field.id))}
                                            />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}