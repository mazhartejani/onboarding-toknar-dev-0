import { Typography } from '@mui/material';
import React from 'react';
import theme from '../../styles/theme';

type Styles = {
  footerContainer: React.CSSProperties;
};

const styles: Styles = {
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    background: theme.palette.primary.main,
    color: '#fff',
    padding: '10px 0',
  }
};

const Footer: React.FC = () => {
  return (
    <div style={styles.footerContainer}>
      <Typography variant="body2" color="#fff" align="center">
        All rights reserved © {new Date().getFullYear()}
      </Typography>
    </div>
  );
};

export default Footer;