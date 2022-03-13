import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import GitHubIcon from '@mui/icons-material/GitHub'


export default () => {
    return (
        <Box className="header" sx={{ flexGrow: 1 }}>
            <AppBar color="transparent" variant="outlined" position="fixed" >
                <Toolbar sx={{ backdropFilter: "blur(5px)" }}>
                    <IconButton href="/" size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                        <img className="header-logo" src="https://raw.githubusercontent.com/J4c5/evilpie/main/evilpie.svg" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Evil Pie</Typography>
                    <IconButton href="https://github.com/J4c5/evilpie/fork" size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
