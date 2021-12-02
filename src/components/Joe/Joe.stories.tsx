import React from 'react';

import { ComponentStory } from '@storybook/react';

import { Joe } from '.';

export default {
  title: 'Joe component',
  component: Joe,
}

const Template: ComponentStory<typeof Joe> = args => <Joe {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: 'John doe',
};
