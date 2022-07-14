import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "../../../../node_modules/@material-ui/core";
import {
    Security,
    Info
} from "../../../../node_modules/@material-ui/icons";
import NoticeDialog from "./LegalNoticePopups/NoticeDialog";

const Footer = () => {

    return <>
        <Grid container justify="center" style={{minHeight: "212px"}}>
            <Grid container item sm={6} xs={11} justify="space-between">
                <Grid item sm={5} xs={12}>
                    <Security color="action" />
                    <Typography paragraph>
                        Sitio 100% seguro y confiable.
                    </Typography>
                </Grid>
                <Grid item sm={5} xs={11}>
                    <Info color="action" />
                    <Typography paragraph>
                        Lideres en ventas 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <AppBar position="static" elevation={0} component="footer" color="default">
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">©2021</Typography> <NoticeDialog  separator="&nbsp;᛫" />
            </Toolbar>
        </AppBar>
    </>
}

export default Footer;