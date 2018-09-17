import React from "react";
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const styles = {
  card: {
    width: 200
  },
  preview_pane: {
    marginBottom: 100,
    fontSize: 14
  },
  banner: {
    paddingTop: 0,
    paddingBottom: 0
  },
  option: {
    marginLeft: "auto"
  }
};

var machines = [
  { title: "Sample DFA", type: "dfa" },
  { title: "Sample NFA", type: "nfa" },
  { title: "Sample TM", type: "tm" },
  { title: "Another DFA", type: "dfa" }
];

var colors = { dfa: "#7e57c2", nfa: "#ffa726", tm: "#42a5f5" };

class MachineCard extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
 
    return (
      <div>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Duplicate</MenuItem>
          <MenuItem onClick={this.handleClose}>Delete</MenuItem>
        </Menu>
      <Card style={styles.card}>
	
        <CardActions 
          style={{ ...styles.banner, backgroundColor: colors[this.props.type] }}
        >
          <Typography variant="body2">
            {this.props.title.toUpperCase()}
          </Typography>
          <IconButton 
	    style={styles.option} 
	    aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
	  >
            <MoreHorizIcon />
          </IconButton>
        </CardActions>
        <CardActionArea>
          <CardContent>
            <Typography style={styles.preview_pane} color="textSecondary">
              Click me to get to the machine.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
  }
}

class CardGrid extends React.Component {
  render() {
    return (
      <Grid container spacing={16} style={{margin:16}}>
        {machines.map(x => (
          <Grid item>
            <MachineCard title={x.title} type={x.type} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

class MachineSelectToolbar extends React.Component {
  render() {
      return (
        <div style={{flexGrow: 1}}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" style={{flexGrow: 1}}>
                Select a Machine
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
  }
}

class NewMachineDialog extends React.Component {
  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select a Machine Type</DialogTitle>
        <div>
          <List>
            <ListItem button onClick={null}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: colors["dfa"]}} children="DFA"/>
              </ListItemAvatar>
              <ListItemText primary="New DFA"/>
            </ListItem>
            <ListItem button onClick={null}>
              <ListItemAvatar>
              <Avatar style={{backgroundColor: colors["nfa"]}} children="NFA"/>
              </ListItemAvatar>
              <ListItemText primary="New NFA"/>
            </ListItem>
            <ListItem button onClick={null}>
              <ListItemAvatar>
              <Avatar style={{backgroundColor: colors["tm"]}} children="TM"/>
              </ListItemAvatar>
              <ListItemText primary="New Turing Machine"/>
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

class AddMachineButton extends React.Component {
  state = { open: false };

  handleOpen = () => {
    this.setState({ open: true, });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen} variant="fab" color="primary"
                style={{ right: 20, bottom: 20, position: 'fixed'}}>
          <AddIcon />
        </Button>
        <NewMachineDialog open={this.state.open} onClose={this.handleClose}/>
      </div>
    );
  }
}


class MachineSelectPage extends React.Component {
  render() {
    return (
        <div>
          <MachineSelectToolbar/>
          <CardGrid/>
          <AddMachineButton/>
        </div>
    );
  }
}

export default MachineSelectPage;
