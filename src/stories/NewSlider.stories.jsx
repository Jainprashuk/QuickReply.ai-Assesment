import React from 'react';
import NewSlider from '../Components/NewSlider';
import { action } from '@storybook/addon-actions';

// Metadata for the component
export default {
  title: 'Example/NewSlider',
  component: NewSlider,
  argTypes: {
    type: {
      control: 'select',
      options: ['Continuous', 'Discreet'],
      description: 'Defines the type of the slider.',
    },
    subtype: {
      control: 'select',
      options: ['Single', 'Range'],
      description: 'Defines the subtype of the slider.',
    },
    steps: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
      description: 'Specifies the number of steps for the slider, relevant for the "Discreet" type.',
    },
    handleSize: {
      control: 'select',
      options: ['Size_24', 'Size_32'],
      description: 'Specifies the size of the slider handle.',
    },
    backgroundColor: { 
      control: 'color',
      description: 'Background color of the slider handle.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A customizable slider component that supports both continuous and discrete modes, as well as single and range sliders.',
      },
    },
  },
};

const Template = (args) => <NewSlider {...args} onChange={action('Slider position changed')} />;

export const ContinuousSingle = Template.bind({});
ContinuousSingle.args = {
  type: 'Continuous',
  subtype: 'Single',
  steps: 1,
  handleSize: 'Size_24',
  backgroundColor: 'blue',
};

export const ContinuousRange = Template.bind({});
ContinuousRange.args = {
  type: 'Continuous',
  subtype: 'Range',
  steps: 1,
  handleSize: 'Size_24',
  backgroundColor: 'blue',
};

export const DiscreetSingle = Template.bind({});
DiscreetSingle.args = {
  type: 'Discreet',
  subtype: 'Single',
  steps: 1,
  handleSize: 'Size_24',
  backgroundColor: 'blue',
};

export const DiscreetRange = Template.bind({});
DiscreetRange.args = {
  type: 'Discreet',
  subtype: 'Range',
  steps: 1,
  handleSize: 'Size_24',
  backgroundColor: 'blue',
};
