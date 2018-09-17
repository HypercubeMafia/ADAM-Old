import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

import AddIcon from '@material-ui/icons/Add';

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
  render() {
    return (
      <Card style={styles.card}>
        <CardActions
          style={{ ...styles.banner, backgroundColor: colors[this.props.type] }}
        >
          <Typography variant="body2">
            {this.props.title.toUpperCase()}
          </Typography>
          <IconButton style={styles.option} onClick={null}>
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
              <Button color="inherit">New DFA</Button>
              <Button color="inherit">New NFA</Button>
              <Button color="inherit">New TM</Button>
            </Toolbar>
          </AppBar>
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
          <Button variant="fab" color="primary" aria-label="Add" style={{marginLeft: "auto", marginTop: "auto"}}>
            <AddIcon />
          </Button>
        </div>
    );
  }
}

export default MachineSelectPage;
