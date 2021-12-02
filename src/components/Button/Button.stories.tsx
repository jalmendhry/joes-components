import React from 'react';

import { ComponentStory } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: { handleClick: { action: 'click' } },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Hello world',
  // bgColour: 'red',
};
