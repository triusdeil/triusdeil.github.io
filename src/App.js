import Main from "./module/main/Main";
import PoppinsRegular from "./fonts/Poppins-Regular.ttf";
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face{
          font-family: Poppins;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src:local('Poppins'),local('Poppins-Regular'),url(${PoppinsRegular}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ fontFamily: "Poppins" }}>
        <div className="App">
          <Main />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
