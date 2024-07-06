// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setPlaylists } from '../actions/userActions';
import { setTheme } from '../actions/settingsActions';
import api from '../api/api';
import Home from '../components/Home';
import Login from '../components/Login';
import Settings from '../components/settings';
import LoadingScreen from '../components/loadingScreen';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import { GlobalStyles } from '../styles/globalStyles';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await api.get('/user');
        dispatch(setUser(userResponse.data));

        const playlistsResponse = await api.get('/playlists');
        dispatch(setPlaylists(playlistsResponse.data));

        const settingsResponse = await api.get('/settings');
        dispatch(setTheme(settingsResponse.data.theme));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={state.settings.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
