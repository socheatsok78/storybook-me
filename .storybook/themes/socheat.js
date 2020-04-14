import { create } from '@storybook/theming/create';
import { themes } from '@storybook/theming';

export default create({
    brandTitle: 'Socheat\'s Storybook',
    brandUrl: 'https://socheat.dev',
    brandImage: 'images/socheat.png',

    ...themes.dark
})
