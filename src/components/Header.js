import React from 'react'
import logo from './logo.jpg';
import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core'
import styles from './Header.module.css';
export const Header = () => {
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={styles.title}>
                        BootCamp2020 Project2 Covid-19 Tracker App
                    </Typography>
                    <Avatar><img src={logo} alt="Logo" /></Avatar>
                    <Typography variant="h6">Alifya Hussain</Typography>
                    
                    <Typography variant="h6">
                        <a href="https://github.com/alifya53">Github</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
