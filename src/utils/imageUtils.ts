import background_0 from '../assets/images/backgrounds/background_0.png';
import background_1 from '../assets/images/backgrounds/background_1.png';
import background_2 from '../assets/images/backgrounds/background_2.png';
import background_3 from '../assets/images/backgrounds/background_3.png';
import background_4 from '../assets/images/backgrounds/background_4.png';
import background_5 from '../assets/images/backgrounds/background_5.png';
import background_6 from '../assets/images/backgrounds/background_6.png';
import background_7 from '../assets/images/backgrounds/background_7.png';

import neck_0 from '../assets/images/necks/neck_0.png';
import neck_1 from '../assets/images/necks/neck_1.png';
import neck_2 from '../assets/images/necks/neck_2.png';
import neck_3 from '../assets/images/necks/neck_3.png';
import neck_4 from '../assets/images/necks/neck_4.png';
import neck_5 from '../assets/images/necks/neck_5.png';
import neck_6 from '../assets/images/necks/neck_6.png';
import neck_7 from '../assets/images/necks/neck_7.png';

import ears_0 from '../assets/images/ears/ears_0.png';
import ears_1 from '../assets/images/ears/ears_1.png';
import ears_2 from '../assets/images/ears/ears_2.png';
import ears_3 from '../assets/images/ears/ears_3.png';
import ears_4 from '../assets/images/ears/ears_4.png';
import ears_5 from '../assets/images/ears/ears_5.png';
import ears_6 from '../assets/images/ears/ears_6.png';
import ears_7 from '../assets/images/ears/ears_7.png';
import ears_8 from '../assets/images/ears/ears_8.png';
import ears_9 from '../assets/images/ears/ears_9.png';
import ears_10 from '../assets/images/ears/ears_10.png';
import ears_11 from '../assets/images/ears/ears_11.png';
import ears_12 from '../assets/images/ears/ears_12.png';
import ears_13 from '../assets/images/ears/ears_13.png';
import ears_14 from '../assets/images/ears/ears_14.png';
import ears_15 from '../assets/images/ears/ears_15.png';

import head_0 from '../assets/images/heads/head_0.png';
import head_1 from '../assets/images/heads/head_1.png';
import head_2 from '../assets/images/heads/head_2.png';
import head_3 from '../assets/images/heads/head_3.png';
import head_4 from '../assets/images/heads/head_4.png';
import head_5 from '../assets/images/heads/head_5.png';
import head_6 from '../assets/images/heads/head_6.png';
import head_7 from '../assets/images/heads/head_7.png';
import head_8 from '../assets/images/heads/head_8.png';
import head_9 from '../assets/images/heads/head_9.png';
import head_10 from '../assets/images/heads/head_10.png';
import head_11 from '../assets/images/heads/head_11.png';
import head_12 from '../assets/images/heads/head_12.png';
import head_13 from '../assets/images/heads/head_13.png';
import head_14 from '../assets/images/heads/head_14.png';
import head_15 from '../assets/images/heads/head_15.png';

export const getBackgroundImgSrcByIndex = (index: number): string => {
    let imageSrc: string;
    switch (index) {
        case 7:
            imageSrc = background_7;
            break;
        case 6:
            imageSrc = background_6;
            break;
        case 5:
            imageSrc = background_5;
            break;
        case 4:
            imageSrc = background_4;
            break;
        case 3:
            imageSrc = background_3;
            break;
        case 2:
            imageSrc = background_2;
            break;
        case 1:
            imageSrc = background_1;
            break;
        case 0:
        default:
            imageSrc = background_0;
            break;
    }

    return imageSrc;
};

export const getNeckImgSrcByIndex = (index: number): string => {
    let imageSrc: string;
    switch (index) {
        case 7:
            imageSrc = neck_7;
            break;
        case 6:
            imageSrc = neck_6;
            break;
        case 5:
            imageSrc = neck_5;
            break;
        case 4:
            imageSrc = neck_4;
            break;
        case 3:
            imageSrc = neck_3;
            break;
        case 2:
            imageSrc = neck_2;
            break;
        case 1:
            imageSrc = neck_1;
            break;
        case 0:
        default:
            imageSrc = neck_0;
            break;
    }

    return imageSrc;
};

export const getEarsImgSrcByIndex = (index: number): string => {
    let imageSrc: string;
    switch (index) {
        case 15:
            imageSrc = ears_15;
            break;
        case 14:
            imageSrc = ears_14;
            break;
        case 13:
            imageSrc = ears_13;
            break;
        case 12:
            imageSrc = ears_12;
            break;
        case 11:
            imageSrc = ears_11;
            break;
        case 10:
            imageSrc = ears_10;
            break;
        case 9:
            imageSrc = ears_9;
            break;
        case 8:
            imageSrc = ears_8;
            break;
        case 7:
            imageSrc = ears_7;
            break;
        case 6:
            imageSrc = ears_6;
            break;
        case 5:
            imageSrc = ears_5;
            break;
        case 4:
            imageSrc = ears_4;
            break;
        case 3:
            imageSrc = ears_3;
            break;
        case 2:
            imageSrc = ears_2;
            break;
        case 1:
            imageSrc = ears_1;
            break;
        case 0:
        default:
            imageSrc = ears_0;
            break;
    }

    return imageSrc;
};

export const getHeadImgSrcByIndex = (index: number): string => {
    let imageSrc: string;
    switch (index) {
        case 15:
            imageSrc = head_15;
            break;
        case 14:
            imageSrc = head_14;
            break;
        case 13:
            imageSrc = head_13;
            break;
        case 12:
            imageSrc = head_12;
            break;
        case 11:
            imageSrc = head_11;
            break;
        case 10:
            imageSrc = head_10;
            break;
        case 9:
            imageSrc = head_9;
            break;
        case 8:
            imageSrc = head_8;
            break;
        case 7:
            imageSrc = head_7;
            break;
        case 6:
            imageSrc = head_6;
            break;
        case 5:
            imageSrc = head_5;
            break;
        case 4:
            imageSrc = head_4;
            break;
        case 3:
            imageSrc = head_3;
            break;
        case 2:
            imageSrc = head_2;
            break;
        case 1:
            imageSrc = head_1;
            break;
        case 0:
        default:
            imageSrc = head_0;
            break;
    }

    return imageSrc;
};
