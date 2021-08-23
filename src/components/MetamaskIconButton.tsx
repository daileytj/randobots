import React from 'react';
import { IconButton } from '@material-ui/core';
import metamaskLogo from '../assets/images/metamask-fox.svg';
import MetaMaskOnboarding from '@metamask/onboarding';

export const MetamaskIconButton = (): JSX.Element => {
    const currentUrl = new URL(window.location.href);
    const forwarderOrigin = currentUrl.hostname === 'localhost' ? 'http://localhost:3000' : undefined;
    // @ts-ignore
    const { ethereum } = window;

    const onButtonClick = (): void => {
        isMetaMaskInstalled();
        MetaMaskClientCheck();
    };

    const installMetamask = (): void => {
        //create a new MetaMask onboarding object
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        onboarding.startOnboarding();
    };

    const connectToMetamask = async () => {
        try {
            // Will open the MetaMask UI
            // @TODO: You should disable this button while the request is pending!
            await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error(error);
        }
    };

    const isMetaMaskInstalled = (): boolean => {
        //Check the ethereum binding on the window object to see if it's installed
        console.log('isMetamask Installed? ', Boolean(ethereum && ethereum.isMetaMask));
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    const MetaMaskClientCheck = () => {
        //Check to see if MetaMask is installed
        if (!isMetaMaskInstalled()) {
            //If it isn't installed do something
            console.log('metamask is not installed!');
            installMetamask();
        } else {
            //If it is installed do something
            console.log('metamask is already installed!');
            connectToMetamask();
        }
    };

    return (
        <IconButton onClick={onButtonClick}>
            <img style={{ width: 32, height: 32 }} src={metamaskLogo} alt={'Metamask Logo'} />
        </IconButton>
    );
};
