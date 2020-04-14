import { create } from '@storybook/theming/create';
import { themes } from '@storybook/theming';

export default create({
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'images/socheat.png',

    ...themes.dark
}
)
