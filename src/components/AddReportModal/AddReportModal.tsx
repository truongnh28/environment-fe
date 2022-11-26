import * as React from 'react';
import {
    Box,
    Typography,
    Modal,
    TextField,
    TextareaAutosize,
    Button,
    MenuItem,
    Select,
} from '@mui/material';
import UploadImage from '../UploadImage';
import { District } from '../../constants/Location';
import { useAppDispatch, useAppSelector } from 'app/hooks';
type Props = {
    open: boolean;
    setOpen: any;
};
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function AddReportModal({ open, setOpen }: Props) {
    const handleClose = () => setOpen(false);
    const carddata = useAppSelector((state) => state.carddata);
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        dispatch({
            type: 'carddata/setCardData',
            payload: { draft: carddata.draft + 1 },
        });
        handleClose();
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                    Phản hồi về ô nhiễm môi trường
                </Typography>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='tiele'
                    label='Tiêu đề'
                    name='title'
                    autoComplete='title'
                    autoFocus
                    sx={{ width: 532 }}
                />
                <TextareaAutosize
                    aria-label='empty textarea'
                    placeholder='Nội dung'
                    style={{
                        width: 532,
                        height: 240,
                        marginTop: 20,
                        padding: '14px',
                    }}
                />
                <div style={{ display: 'flex', gap: '4px' }}>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label='Age'
                        style={{ width: 532 }}
                    >
                        {District.map((item) => (
                            <MenuItem key={item} value={10}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '10px',
                    }}
                >
                    <UploadImage />
                    <Button variant='contained' onClick={() => handleSubmit()}>
                        GỬI
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}
