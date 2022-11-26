import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddReportIcon.module.scss';

type Props = {
    setOpen: any;
};

const AddReportIcon: React.FC<Props> = ({ setOpen }) => {
    const handleOpenModal = () => setOpen(true);
    return (
        <Fab
            color='primary'
            aria-label='add'
            className={styles.addReport}
            onClick={handleOpenModal}
        >
            <AddIcon />
        </Fab>
    );
};

export default AddReportIcon;
