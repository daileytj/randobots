import background_0 from './background_0.png';
import background_1 from './background_1.png';
import background_2 from './background_2.png';
import background_3 from './background_3.png';
import background_4 from './background_4.png';
import background_5 from './background_5.png';
import background_6 from './background_6.png';
import background_7 from './background_7.png';

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
