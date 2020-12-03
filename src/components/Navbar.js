import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    fabStyle: {
        margin: '1em',
        position: 'absolute',
        backgroundColor: '#ffff',
        color: 'green'
    },
    extendedIcon: {
        margin: '.4em',
        fontSize: '2.2em'
    }
});

const Navbar = (props) => {
    const classes = useStyles(props);

    return (
        <div className="top">
            <h1>Todos for today</h1>
            <Fab
                variant="extended"
                size="small"
                style={{ color: '#1abc9c' }}
                aria-label="add"
                className={classes.fabStyle}
                component={Link}
                to='/dashboard'
            >
                <HomeIcon className={classes.extendedIcon} />
            </Fab>
        </div>
    )
}

export default Navbar;