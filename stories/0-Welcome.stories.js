import { linkTo } from '@storybook/addon-links';

import Welcome from '@/Welcome';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const README = () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
});

README.story = {
  name: 'README.md',
};
