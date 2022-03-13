import Header from "./Header"
import { Stack, Button, Alert, AlertTitle } from "@mui/material"

import AndroidIcon from '@mui/icons-material/Android'
import CallSplitIcon from '@mui/icons-material/CallSplit'
import WebhookIcon from '@mui/icons-material/Webhook'

export default () => {
    return (
        <>
            <Header />
            <div className="box-center-flex">
                <img className="home-logo" src="https://raw.githubusercontent.com/J4c5/evilpie/87d3b4c8a04a29d16e73bbe1b834c1f9b4722c8f/src/assets/evilpie.svg?token=GHSAT0AAAAAABSJTQGZHJKTGHH7FVIAANV2YRNJJ3Q" alt="" />
                <h1 className="home-h1">EvilPie</h1>
                <p className="home-p">Modern Android Hacking Tooling</p>
            </div>
            <Stack className="buttons" direction="row" spacing="2.3%">
                <Button id="homeButton1" size="large" variant="contained">Get Started</Button>
                <Button id="homeButton2" size="large" variant="outlined">See Docs</Button>
            </Stack>
            <hr style={{ "margin": "auto", "width": "80%", "marginTop": "3rem" }} />

            <div className="box-center-flex">
                <h2>Features</h2>
                <Stack className="features" direction={{ xs: 'column', sm: 'row' }} >
                        <Alert icon={<AndroidIcon id="home-ico" home-ico fontSize="large" />} id="feature" >
                            <AlertTitle ><b>hack everyone</b></AlertTitle>
                            <i>Support all android versions from oldest to newest</i>
                        </Alert>
                        <Alert icon={<CallSplitIcon id="home-ico" fontSize="large" />} id="feature" >
                            <AlertTitle ><b>Multiplataform</b></AlertTitle>
                            <i>The focus is Android, but IOS is also supported</i>
                        </Alert>
                        <Alert icon={<WebhookIcon id="home-ico" fontSize="large" />} id="feature" >
                            <AlertTitle ><b >fully in real time</b></AlertTitle>
                            <i>See your evil pies in real time with websockets</i>
                        </Alert>
                </Stack>
            </div>
        </>
    )
}