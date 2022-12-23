import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "@mui/icons-material/Home";
import Bookmark from "@mui/icons-material/Bookmark";

import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

import "./bottom-nav.styles.scss";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
  palette: {
    primary: {
      main: red[600],
    },
  },
});

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  const navigation = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        showLabels
        value={value}
        style={{ width: "100%" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          className="bottom-nav__action"
          onClick={() => {
            navigation("/");
          }}
          icon={<Home sx={{ width: 32, height: 32 }} />}
        />
        <BottomNavigationAction
          label="bookmark"
          className="bottom-nav__action"
          onClick={() => {
            navigation("/bookmarks");
          }}
          icon={<Bookmark sx={{ width: 32, height: 32 }} />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default BottomNav;
