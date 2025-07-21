import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
// import Link from "@mui/material/Link";

const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            <RouterLink to='/'>Home</RouterLink>
          </Typography>

          <Button color='inherit' component={RouterLink} to='/'>
            <RouterLink to='/tasks'>Tasks</RouterLink> |{" "}
          </Button>
          <Button color='inherit' component={RouterLink} to='/tasks'>
            Tasks
          </Button>
          <Button color='inherit' component={RouterLink} to='/about'>
            <RouterLink to='/crud'>CRUD</RouterLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
