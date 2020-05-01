import React from 'react';

import AppBar from './../components/AppBar'
// import { makeStyles } from '@material-ui/core/styles';

// import { DataContext} from './DataContext'
import { Container } from '@material-ui/core';

// const useStyles = makeStyles({
//     root: {
//       width: 500,
//     },
// });

const  Layout = ({children}) =>  {
    // const classes = useStyles();

    return (
        <>
            <AppBar />
            <Container>
                {children}
            </Container>
        </>

    )
}

export default Layout;