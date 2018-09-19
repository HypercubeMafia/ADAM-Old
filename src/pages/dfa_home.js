import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { Link } from 'gatsby';

class ButtonAppBar extends React.Component {
  render(){
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <ArrowBack />
          </IconButton>
          <Button color="inherit" href="/dfa_edit/">Edit</Button>
          <Button color="inherit" href="/dfa_run/">Run</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

export default ButtonAppBar;
