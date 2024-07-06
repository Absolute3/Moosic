import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../actions/settingsActions';
import { Button } from '@mui/material';

const Settings = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <h1>Settings</h1>
      <Button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </div>
  );
};

export default Settings;
