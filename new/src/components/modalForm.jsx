import {
    Button, Checkbox, createTheme,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, FormControlLabel,
    IconButton, MenuItem,
    Stack,
    TextField
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close"
import * as PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import {Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addField} from "../actions";

const types = [
    {
        value: 'string',
        label: 'string',
    },
    {
        value: 'number',
        label: 'number',
    }]


CloseIcon.propTypes = {color: PropTypes.string};

const theme = createTheme({
    dialog: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        minWidth: '300px',
    },
});

const ModalForm = ({open, handleClose}) => {

    const dispatch = useDispatch();

    return (
        <Formik initialValues={{
            name: '',
            type: '',
            from: '',
            to: '',
            description: '',
        }}
                validate={values => {
                    console.log(values);
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.type) {
                        errors.type = 'Please select a type';
                    }
                    if (!values.from) {
                        errors.from = 'Required';

                    } else if (!/^[0-9]+$/.test(values.from)) {
                        errors.from = 'Must be a number';
                    }
                    if (!values.to) {
                        errors.to = 'Required';
                    } else if (!/^[0-9]+$/.test(values.to)) {
                        errors.to = 'Must be a number';
                    }
                    return errors;
                }}
                onSubmit={
                    (values, {setSubmitting}) => {
                        console.log(values);
                        setTimeout(() => {
                            dispatch(addField(values));
                            alert(JSON.stringify(values, null, 2));
                            alert("Field added successfully");
                            setSubmitting(false);
                            handleClose();

                        }, 400);
                    }
                }>
            {({values, handleChange, handleBlur, submitForm, resetForm, isSubmitting, touched, errors}) => (
                <Form>
                    <div style={{textAlign: 'center',}}>
                        <Dialog open={open} onClose={handleClose} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // minWidth: '300px',


                        }}>

                            <DialogTitle sx={{fontSize: 32}}>Filed Declaration
                                <IconButton onClick={handleClose} aria-label="close" size="large"
                                            style={{float: 'right'}}>
                                    <CloseIcon/>
                                </IconButton>
                            </DialogTitle>
                            <DialogContent sx={{
                                display: 'flex',


                            }}>
                                <TextField fullWidth sx={{m: 2}}
                                           required
                                           name="name"
                                           id="outlined-required"
                                           label="Field name"
                                           error={touched.name && Boolean(errors.name)}
                                           helperText={touched.name && errors.name}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.name}
                                />
                            </DialogContent>
                            <DialogContent sx={{
                                display: 'flex',
                                '& .MuiTextField-root': {m: 2, width: '70ch',},
                            }
                            }>

                                <TextField

                                    sx={{m: 2}}
                                    name="type"
                                    id="filled-select-currency"
                                    select
                                    label="Select type"
                                    error={touched.type && Boolean(errors.type)}
                                    helperText={touched.type && errors.type}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.type}
                                >
                                    {types.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                    ))}
                                </TextField>

                            </DialogContent>
                            <DialogContent container spacing={3} sx={{
                                display: 'flex',
                                m: 3,
                                alignItems: 'center',
                            }}>
                                <p>from</p>
                                <p></p>
                                <TextField sx={{m: 2}}
                                           required
                                           id="outlined-required"
                                           name='from'
                                           error={touched.from && Boolean(errors.from)}
                                           helperText={touched.from && errors.from}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.from}
                                />
                                <p>to</p>
                                <p></p>
                                <TextField sx={{m: 2}}
                                           required
                                           name='to'
                                           id="outlined-required"
                                           error={touched.to && Boolean(errors.to)}
                                           helperText={touched.to && errors.to}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.to}
                                />

                            </DialogContent>
                            <DialogContent sx={{
                                display: 'flex',
                                m: 2,
                            }}>
                                <TextField
                                    fullWidth
                                    sx={{
                                        m: 2,
                                        marginTop: 0,
                                    }}
                                    id="outlined-basic"
                                    label="Description"
                                    name='description'
                                    variant="outlined"
                                    error={touched.description && Boolean(errors.description)}
                                    helperText={touched.description && errors.description && "Description"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    multiline
                                    rows={3}/>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    sx={{m: 2}}
                                    variant="contained"
                                    startIcon={<DeleteIcon/>}
                                    disabled={isSubmitting}
                                    onClick={() => {
                                        resetForm();
                                    }}>
                                    Cancel
                                </Button>
                                <Button
                                    sx={{m: 2}}
                                    variant="contained"
                                    endIcon={<SendIcon/>}
                                    disabled={isSubmitting}
                                    onClick={() => {
                                        submitForm().then(r => {
                                            console.log(r);
                                        }).then(() => {
                                            setTimeout(() => {
                                                resetForm();
                                            }, 1000);
                                        })
                                    }}>
                                    Submit
                                </Button>
                            </DialogActions>
                        </Dialog>

                    </div>
                </Form>
            )}
        </Formik>
    )

}

export default ModalForm;