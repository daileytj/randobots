import { HomePage, RandoBotGeneratorPage } from '../pages';
import Home from '@material-ui/icons/Home';
import Create from '@material-ui/icons/Create';

export const PAGES = [
    {
        title: 'Home',
        route: '/randobots',
        component: HomePage,
        icon: Home,
    },
    {
        title: 'RandoBot Generator',
        route: '/randobots/generator',
        component: RandoBotGeneratorPage,
        icon: Create,
    },
];
