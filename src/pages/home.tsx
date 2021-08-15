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
import {
    getBackgroundImgSrcByIndex,
    getNeckImgSrcByIndex,
    getHeadImgSrcByIndex,
    getEarsImgSrcByIndex,
    getAccessoryImgSrcByIndex,
    getEyesImgSrcByIndex,
    getHatImgSrcByIndex,
    getMouthImgSrcByIndex,
} from '../utils/imageUtils';

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
    const robotEars = new Image();
    const robotHat = new Image();
    const robotAccessory = new Image();
    const robotHead = new Image();
    const robotEyes = new Image();
    const robotMouth = new Image();

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
            ctx.drawImage(robotEars, 0, 0);
            ctx.drawImage(robotHat, 0, 0);
            ctx.drawImage(robotAccessory, 0, 0);
            ctx.drawImage(robotHead, 0, 0);
            ctx.drawImage(robotEyes, 0, 0);
            ctx.drawImage(robotMouth, 0, 0);
        }
    };

    const generateRandoBot = (): any => {
        let robotBackgroundLoaded = false;
        let robotNeckLoaded = false;
        let robotEarsLoaded = false;
        let robotHatLoaded = false;
        let robotAccessoryLoaded = false;
        let robotHeadLoaded = false;
        let robotEyesLoaded = false;
        let robotMouthLoaded = false;

        const robotBackgroundIndex = Math.floor(Math.random() * 8);
        const robotNeckIndex = Math.floor(Math.random() * 8);
        const robotEarsIndex = Math.floor(Math.random() * 16);
        const robotHatIndex = Math.floor(Math.random() * 16);
        const robotAccessoryIndex = Math.floor(Math.random() * 16);
        const robotHeadIndex = Math.floor(Math.random() * 16);
        const robotEyesIndex = Math.floor(Math.random() * 40);
        const robotMouthIndex = Math.floor(Math.random() * 8);
        robotBackground.src = getBackgroundImgSrcByIndex(robotBackgroundIndex);
        robotNeck.src = getNeckImgSrcByIndex(robotNeckIndex);
        robotEars.src = getEarsImgSrcByIndex(robotEarsIndex);
        robotHat.src = getHatImgSrcByIndex(robotHatIndex);
        robotAccessory.src = getAccessoryImgSrcByIndex(robotAccessoryIndex);
        robotHead.src = getHeadImgSrcByIndex(robotHeadIndex);
        robotEyes.src = getEyesImgSrcByIndex(robotEyesIndex);
        robotMouth.src = getMouthImgSrcByIndex(robotMouthIndex);

        const checkIfAllAssetsLoaded = (): void => {
            if (
                robotBackgroundLoaded &&
                robotNeckLoaded &&
                robotEarsLoaded &&
                robotHatLoaded &&
                robotAccessoryLoaded &&
                robotHeadLoaded &&
                robotEyesLoaded &&
                robotMouthLoaded
            ) {
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

        robotEars.onload = function () {
            robotEarsLoaded = true;
            checkIfAllAssetsLoaded();
        };

        robotHat.onload = function () {
            robotHatLoaded = true;
            checkIfAllAssetsLoaded();
        };

        robotAccessory.onload = function () {
            robotAccessoryLoaded = true;
            checkIfAllAssetsLoaded();
        };

        robotHead.onload = function () {
            robotHeadLoaded = true;
            checkIfAllAssetsLoaded();
        };

        robotEyes.onload = function () {
            robotEyesLoaded = true;
            checkIfAllAssetsLoaded();
        };

        robotMouth.onload = function () {
            robotMouthLoaded = true;
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
