import neck_0 from './neck_0.png';
import neck_1 from './neck_1.png';
import neck_2 from './neck_2.png';
import neck_3 from './neck_3.png';
import neck_4 from './neck_4.png';
import neck_5 from './neck_5.png';
import neck_6 from './neck_6.png';
import neck_7 from './neck_7.png';
import neck_8 from './neck_8.png';
import neck_9 from './neck_9.png';
import neck_10 from './neck_10.png';
import neck_11 from './neck_11.png';
import neck_12 from './neck_12.png';
import neck_13 from './neck_13.png';
import neck_14 from './neck_14.png';
import neck_15 from './neck_15.png';

export const getNeckImgSrcByIndex = (index: number): string => {
    let imageSrc: string;
    switch (index) {
        case 15:
            imageSrc = neck_15;
            break;
        case 14:
            imageSrc = neck_14;
            break;
        case 13:
            imageSrc = neck_13;
            break;
        case 12:
            imageSrc = neck_12;
            break;
        case 11:
            imageSrc = neck_11;
            break;
        case 10:
            imageSrc = neck_10;
            break;
        case 9:
            imageSrc = neck_9;
            break;
        case 8:
            imageSrc = neck_8;
            break;
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
