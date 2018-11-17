import React, {Component} from 'react';


import classes from './Layout.css';
import Aux from '../../hoc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawewr';

class Layout extends Component {

    state = {
        showSidеDrawer: false
    }

    closeSideDrawer = () =>{
        this.setState({
            showSidеDrawer: false
        })
    }

    drawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {showSidеDrawer: !prevState.showSidеDrawer};
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar drawerToggleClicked = {this.drawerToggleHandler} />
                <SideDrawer open = {this.state.showSidеDrawer} closeHandler = {this.closeSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;