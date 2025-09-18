import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FC6399',
    },
    background: {
      default: '#16181C',
      paper: 'linear-gradient(90deg, #23232b 0%, #3a2547 100%)',
    },
    text: {
      primary: '#e8eaf0',
      secondary: '#cbd5e1',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: 'Roboto, Montserrat, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          color: '#FC6399',
          borderColor: '#FC6399',
          '&:hover': {
            color: '#fff',
            background: 'linear-gradient(90deg, #23232b 0%, #3a2547 100%)',
            borderColor: '#FC6399',
          },
        },
      },
    },
  },
});

export default theme;
