import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Main from './index';

export default {
  component: Main,
  title: 'pages/Main',
  decorators: [withRouter],
};

const Template = () => <Main />;

export const Default = Template.bind({});
