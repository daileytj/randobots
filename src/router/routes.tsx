import { HomePage, RandoBotGeneratorPage } from '../pages';
import Home from '@material-ui/icons/Home';
import Create from '@material-ui/icons/Create';

const ROOT = '/randobots';

export const PAGES = [
    {
        title: 'Home',
        route: ROOT,
        component: HomePage,
        icon: Home,
    },
    {
        title: 'RandoBot Generator',
        route: `${ROOT}/generator`,
        component: RandoBotGeneratorPage,
        icon: Create,
    },
];
