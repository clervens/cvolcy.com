import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from 'mdi-material-ui/Linkedin'
import IconButton from '@material-ui/core/IconButton';

import './styles.css'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Avatar alt="Clervens Volcy" src="/images/logo-100.png" />
                <Typography variant="title" color="inherit" className="brand">
                Clervens<br />Volcy
                </Typography>
                <div>
                    <IconButton
                        href={"https://www.linkedin.com/in/clervens-volcy-5522a670"} //{mySettings.socials.linkedin"}
                        target="_blank"
                        color="inherit"
                    >
                        <LinkedInIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;