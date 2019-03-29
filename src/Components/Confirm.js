import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    goToFirstStep = e => {
        e.preventDefault();
        this.props.goToFirstStep();
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }
                            onClick={this.goToFirstStep}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName }
                            onClick={this.goToFirstStep}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={ email }
                            onClick={this.goToFirstStep}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={ occupation }
                            onClick={this.back}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city }
                            onClick={this.back}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={ bio }
                            onClick={this.back}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm & continue"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        styles={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm
