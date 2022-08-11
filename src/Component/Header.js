import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

function Header({onQuizStart}) {
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
                <Link to="/" style={{ color: "white", textDecoration: 'none'}}>
                  Quiz-2k22 
                </Link>
            
            </IconButton>
           
            <Button color="inherit" to="/signup">
              Signup
            </Button>
            <Button color="inherit">Signin</Button>

            <Button color="inherit">About</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
