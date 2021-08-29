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
    Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DownloadIcon from '@material-ui/icons/CloudDownload';
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
import { Spacer } from '@pxblue/react-components';
import { MetamaskIconButton } from '../components/MetamaskIconButton';

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
        description: {},
    })
);

export const RandoBotGeneratorPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const isAdmin: boolean = localStorage.getItem('isAdmin') === 'true';
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
        const robotEarsIndex = Math.floor(Math.random() * 32);
        const robotHatIndex = Math.floor(Math.random() * 32);
        const robotAccessoryIndex = Math.floor(Math.random() * 16);
        const robotHeadIndex = Math.floor(Math.random() * 16);
        const robotEyesIndex = Math.floor(Math.random() * 40);
        const robotMouthIndex = Math.floor(Math.random() * 24);
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

    const downloadRobotPNG = (): void => {
        const randobotCanvas = document.getElementById('canvas') as HTMLCanvasElement;
        const link = document.createElement('a');
        link.download = 'randobot.png';
        link.href = randobotCanvas.toDataURL('image/png');
        link.click();
    };

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
                        RandoBot Generator
                    </Typography>
                    <Spacer />
                    <MetamaskIconButton />
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <div className={classes.description}>
                    <Typography variant={'h6'} style={{ marginBottom: 16 }}>
                        Coming Soon!
                    </Typography>
                    <Typography variant={'body1'} style={{ marginBottom: 8 }}>
                        You'll soon be able to mint a <strong>Randobot</strong> of your choosing. Simply generate a new{' '}
                        <strong>Randobot</strong> below, connect your metamask wallet, and mint your favorite variation
                        with the click of a button that is not yet visible on this page. With 16,106,127,360 variations,
                        you're bound to stumble across one you just have to have.
                    </Typography>
                    <Typography variant={'body1'} style={{ marginBottom: 40 }}>
                        In the meantime, enjoy testing out the <strong>Randobot</strong> generator!
                    </Typography>
                    <Divider variant={'fullWidth'} style={{ marginBottom: 32 }} />
                </div>
                <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
                    <canvas id={'canvas'} className={classes.canvas}></canvas>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Button
                            style={{ flex: 1 }}
                            variant={'contained'}
                            color={'primary'}
                            onClick={(): void => generateRandoBot()}
                        >
                            Generate RandoBot
                        </Button>
                        {isAdmin && (
                            <Button
                                style={{ marginLeft: 16 }}
                                variant={'contained'}
                                color={'primary'}
                                onClick={(): void => downloadRobotPNG()}
                            >
                                <DownloadIcon />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
