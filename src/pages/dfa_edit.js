import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class editpage extends React.Component {
  render(){
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <ArrowBack />
          </IconButton>
          <Button color="inherit">Run</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

export default editpage;

