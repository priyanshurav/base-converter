import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import {
  IconButton,
  MuiThemeProvider,
  createMuiTheme,
  Tooltip,
  Paper,
  useMediaQuery,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
import { darkBgColor, lightBgColor } from '../../colors';
import { Brightness7, Brightness4, Close } from '@material-ui/icons';
import { LOCAL_STORAGE_THEME_KEY } from '../../constants';
import BaseConverter from '../BaseConverter/BaseConverter';
import ResultSection from '../ResultSection/ResultSection';
import { blue } from '@material-ui/core/colors';

function App() {
  const [dark, setDark] = useState(false);
  const [result, setResult] = useState('');
  const theme = createMuiTheme({ palette: { type: dark ? 'dark' : 'light' } });
  const isShort = useMediaQuery('(max-width: 375px)');
  const isHeadingSpaceLow = useMediaQuery('(max-width: 335px)');
  const [snackBarData, setSnackBarData] = useState({ open: false, text: '' });
  useEffect(() => {
    (() => {
      const dark = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
      if (!dark) return;
      const isDark = JSON.parse(dark);
      if (typeof isDark === 'boolean') setDark(isDark);
    })();
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(dark));
  }, [dark]);
  const openSnackbar = useCallback((base: string): void => {
    setSnackBarData({
      open: true,
      text: `Please enter a valid ${base.toLowerCase()} number.`,
    });
  }, []);
  const handleSnackBarClose = () => setSnackBarData({ open: false, text: '' });

  return (
    <MuiThemeProvider theme={theme}>
      <div
        className="wrapper"
        style={{ backgroundColor: dark ? darkBgColor : lightBgColor }}
      >
        <Paper
          variant="outlined"
          style={{
            padding: '25px 30px',
            width: isShort ? '100vw' : '375px',
            backgroundColor: dark ? darkBgColor : lightBgColor,
          }}
        >
          <BaseConverter
            openSnackbar={openSnackbar}
            isHeadingSpaceLow={isHeadingSpaceLow}
            onCalculated={useCallback((result) => setResult(result), [])}
          />
          <ResultSection result={result} />
        </Paper>
      </div>
      <Tooltip title="Toggle theme" arrow>
        <IconButton
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => setDark((prevValue) => !prevValue)}
        >
          {dark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Tooltip>
      <Snackbar
        open={snackBarData.open}
        autoHideDuration={5000}
        onClose={handleSnackBarClose}
      >
        <SnackbarContent
          message={snackBarData.text}
          style={{ backgroundColor: blue[500], color: 'white' }}
          action={
            <span className="snackbar-close-btn-container">
              <IconButton
                style={{ padding: '5px' }}
                onClick={handleSnackBarClose}
              >
                <Close />
              </IconButton>
            </span>
          }
        />
      </Snackbar>
    </MuiThemeProvider>
  );
}

export default App;
