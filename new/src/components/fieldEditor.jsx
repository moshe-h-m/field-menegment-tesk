import {Box, TextField} from "@mui/material";
import {useSelector} from "react-redux";


export default function FieldEditor() {

    const fieldList = useSelector(state => state.allReducers.FieldList)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 4,
            minWidth: 500,

        }}>
            <h1>
                Field Editor
            </h1>

            <Box
                sx={{
                    m: 2,
                    width: 400,
                    height: 600,
                    overflow: 'scroll',
                    border: '1px solid black',
                    borderRadius: 2,
                    padding: 2,
                }}
            >
                {JSON.stringify(fieldList, null, '\n')}
            </Box>


        </Box>
    )
}