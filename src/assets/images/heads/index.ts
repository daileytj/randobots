import head_0 from './head_0.png';
import head_1 from './head_1.png';
import head_2 from './head_2.png';
import head_3 from './head_3.png';
import head_4 from './head_4.png';
import head_5 from './head_5.png';
import head_6 from './head_6.png';
import head_7 from './head_7.png';
import head_8 from './head_8.png';
import head_9 from './head_9.png';
import head_10 from './head_10.png';
import head_11 from './head_11.png';
import head_12 from './head_12.png';
import head_13 from './head_13.png';
import head_14 from './head_14.png';
import head_15 from './head_15.png';

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
