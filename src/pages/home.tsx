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
import { Spacer } from '@pxblue/react-components';
import { MetamaskIconButton } from '../components/MetamaskIconButton';
import randobotBanner from '../assets/images/randobots-banner.png';

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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${theme.spacing(3)}px`,
            [theme.breakpoints.down('xs')]: {
                minHeight: `calc(100vh - ${theme.spacing(7)}px)`,
                justifyContent: 'normal',
            },
        },
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        randobotBanner: {
            position: 'fixed',
            width: '100%',
            zIndex: 0,
            minWidth: '1200px',
            bottom: '-150px',
            maxHeight: '800px',
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
                    <Spacer />
                    <MetamaskIconButton />
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <div
                    style={{
                        maxWidth: 600,
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 10,
                        marginBottom: 150,
                    }}
                >
                    <Typography variant={'h3'}>Welcome to RandoBots!</Typography>
                    <Typography variant={'body1'} style={{ marginTop: 16 }}>
                        There's not much here for now, but we're working on it. In the meantime, check out the current
                        collection on OpenSea or generate your own <strong>Randobot</strong> with our{' '}
                        <strong>RandoBot</strong> Generator!
                    </Typography>
                    <div style={{ marginTop: 16, display: 'flex' }}>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            style={{ marginRight: 16, flex: 1 }}
                            onClick={(): void => {
                                window.open('https://opensea.io/collection/randobots', '_blank');
                            }}
                        >
                            View On OpenSea
                        </Button>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            style={{ flex: 1 }}
                            onClick={(): void => {
                                history.push('randobots/generator');
                            }}
                        >
                            RandoBot Generator
                        </Button>
                    </div>
                </div>
                <img alt={'Randobot Banner'} src={randobotBanner} className={classes.randobotBanner} />
            </div>
        </div>
    );
};
