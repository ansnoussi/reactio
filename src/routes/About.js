import React from 'react';
import Paper from 'material-ui/Paper';
import pkg from '../../package.json';

const styles = {
  container: {
    padding: 10,
    lineHeight: '1.4em',
  },
};

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: pkg.version,
    };
  }

  render() {
    return <div>
      <h1>About</h1>
      <Paper style={styles.container}>
        <p>
          Développeur: SNOUSSI Anis<br/>
          Contact: snoussi.anis@insat.u-carthage.tn<br/>
          Version: {this.state.version}
        </p>
        <h2>Informations légales</h2>
        <p>
          Ce progarmme n'est pas un programme officiel des societés de la radiodiffusion.
          Tous les services de cette station de radio peuvent être récupérés sur les sites
          officiels.
        </p>
        <h2>Liens</h2>
        <p>
          My Github repo: <a href="https://github.com/ansnoussi/reactio">here</a>
        </p>
        <p>
          Forked Github repo:  <a href="https://github.com/paul-em/ractio">here</a>
        </p>
      </Paper>
    </div>;
  }
}
