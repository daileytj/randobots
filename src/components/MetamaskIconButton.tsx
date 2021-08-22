import React from 'react';
import { IconButton } from '@material-ui/core';
import metamaskLogo from '../assets/images/metamask.png';

export const MetamaskIconButton = (): JSX.Element => {
    return (
        <IconButton>
            <img style={{ width: 32, height: 32 }} src={metamaskLogo} alt={'Metamask Logo'} />
        </IconButton>
    );
};
