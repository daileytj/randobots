import React, { useEffect } from 'react';
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
import { getBackgroundImgSrcByIndex } from '../assets/images/backgrounds';
import { getNeckImgSrcByIndex } from '../assets/images/necks';
import { getHeadImgSrcByIndex } from '../assets/images/heads';

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
        canvas: {
            width: 400,
            height: 400,
            border: '2px solid #000',
            marginBottom: '1rem',
        },
    })
);

export const HomePage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    // const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const robotBackground = new Image();
    const robotNeck = new Image();
    const robotHead = new Image();

    useEffect((): void => {
        generateRandoBot();
    });

    const drawRandoBot = (): any => {
        const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        canvas.width = 400;
        canvas.height = 400;

        if (ctx) {
            ctx.drawImage(robotBackground, 0, 0);
            ctx.drawImage(robotNeck, 0, 0);
            ctx.drawImage(robotHead, 0, 0);
        }
    };

    const generateRandoBot = (): any => {
        let robotBackgroundLoaded = false;
        let robotNeckLoaded = false;
        let robotHeadLoaded = false;

        const robotBackgroundIndex = Math.floor(Math.random() * 8);
        const robotNeckIndex = Math.floor(Math.random() * 16);
        const robotHeadIndex = Math.floor(Math.random() * 16);
        robotBackground.src = getBackgroundImgSrcByIndex(robotBackgroundIndex);
        robotNeck.src = getNeckImgSrcByIndex(robotNeckIndex);
        robotHead.src = getHeadImgSrcByIndex(robotHeadIndex);

        const checkIfAllAssetsLoaded = (): void => {
            if (robotBackgroundLoaded && robotNeckLoaded && robotHeadLoaded) {
                drawRandoBot();
            }
        };

        robotBackground.onload = function () {
            robotBackgroundLoaded = true;
            checkIfAllAssetsLoaded();
        };

        robotNeck.onload = function () {
            robotNeckLoaded = true;
            checkIfAllAssetsLoaded();
        };

        robotHead.onload = function () {
            robotHeadLoaded = true;
            checkIfAllAssetsLoaded();
        };
    };

    return (
        <div className={classes.pageBackground}>
            <AppBar position={'sticky'}>
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
                        RandoBot Generator
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
                    <canvas id={'canvas'} className={classes.canvas}></canvas>
                    <Button variant={'contained'} color={'primary'} onClick={(): void => generateRandoBot()}>
                        Generate RandoBot
                    </Button>
                </div>
            </div>
        </div>
    );
};
