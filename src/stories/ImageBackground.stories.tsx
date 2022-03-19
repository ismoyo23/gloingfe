import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Imagebackground } from '../component/atom/ImageBackground';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Imagebackground',
  component: Imagebackground,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 
} as ComponentMeta<typeof Imagebackground>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Imagebackground> = (args) => <Imagebackground {...args} />;

export const Settings = Template.bind({})
    Settings.args = {
      size: 'fullpages',
      name: 'person.svg',
      inputSizeWidth: '40px',
      inputSizeHeight: '40px',
      radius: true
}
