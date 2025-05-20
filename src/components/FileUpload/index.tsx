import { useCallback, useState } from 'react';
import { CloudUpload, HighlightOff } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import {useDropzone} from 'react-dropzone';
import theme from '../../styles/theme';

const FileUpload = () => {
    const [myFiles, setMyFiles] = useState<File[]>([])

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setMyFiles([...myFiles, ...acceptedFiles])
      }, [myFiles])

    const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
        accept: {
            'application/vnd.ms-excel': ['.csv', '.xls', '.xlsx'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.csv', '.xls', '.xlsx'],
            'text/csv': ['.csv'],
            'application/pdf': ['.pdf'],
        },
        maxSize: 10000000,
        onDrop
    });

    const removeFile = (file: File) => () => {
        const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)
      }
    
    const removeAll = () => {
        setMyFiles([])
    }
    const files = myFiles.map((file: File, index: number) => (
        <li key={index} style={{listStyleType: 'none'}}>
            {file.name} - {(file.size/1000000)} MB{" "}
            <HighlightOff sx={{marginBottom: '-0.3125rem', color: '#ff0000'}} onClick={removeFile(file)}>Remove File</HighlightOff>
        </li>
    ))
  

  return (
    <Box {...getRootProps({className: 'dropzone'})} sx={styles.root}>
        <input {...getInputProps()} />
        <Box sx={styles.innerBox}>
            <Box sx={styles.left}>
                <CloudUpload sx={styles.icon}/>
            </Box>
            <Box sx={styles.right}>
                <Typography sx={{fontSize: '12px', color: theme.palette.text.primary}}>Drag and drop files here.</Typography>
                <Typography sx={{fontSize: '14px', color: theme.palette.text.primary}}>Maximum upload size: 10MB.</Typography>
            </Box>
            {
                acceptedFiles.length > 0 &&
                <Button variant='contained' size='small' onClick={removeAll}>
                    Remove All
                </Button>
            }
        </Box>

        {
            acceptedFiles.length > 0 &&
            <Box sx={styles.files}>
                <aside>
                    <Typography variant='h5'>Files</Typography>
                    <ul style={{paddingLeft: 0, margin: 0}}>{files}</ul>
                </aside>
            </Box>

        }

    </Box>

  );
}

export default FileUpload;

const styles = {
    root: {
        border: '1px dashed #ccc',
        backgroundColor: '#fff',
        cursor: 'pointer',
    },
    innerBox: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width: '80px !important',
        height: '80px !important',
        color: '#31b3e7',
    },
    files: {
        textAlign: 'center',
    }
};