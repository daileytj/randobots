import React from 'react';
import {
    AppBar,
    Hidden,
    IconButton,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    /*useMediaQuery,*/
    useTheme,
    Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageBackground: {
            backgroundColor: theme.palette.background.paper,
            minHeight: '100vh',
            position: 'relative',
        },
        body: {
            minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${theme.spacing(3)}px`,
            [theme.breakpoints.down('xs')]: {
                minHeight: `calc(100vh - ${theme.spacing(7)}px)`,
            },
        },
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    })
);

export const HomePage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const history = useHistory();
    // const xs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <div className={classes.pageBackground}>
            <AppBar position={'sticky'} color={'secondary'}>
                <Toolbar className={classes.toolbar}>
                    <Hidden mdUp={true}>
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant={'h6'} color={'inherit'}>
                        RandoBots
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant={'h3'}>Welcome to RandoBots!</Typography>
                    <Typography variant={'body1'}>
                        This is a placeholder home page that I'll eventually populate, but for now just go check out the
                        RandoBot Generator!
                    </Typography>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        style={{ marginTop: 16 }}
                        onClick={(): void => {
                            history.push('/rando-bot-generator');
                        }}
                    >
                        Go To RandoBot Generator
                    </Button>
                </div>
            </div>
        </div>
    );
};
