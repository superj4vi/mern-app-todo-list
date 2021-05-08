import React from 'react';
import Panel from './Panel';
import './Panel.css'

const Template = (args) => <Panel {...args} />

export const Default = Template.bind({});

Default.args={
  children :(
    <p>
      Hello React
  </p>
)
}

export const panelWidthPaddign = Template.bind({});
panelWidthPaddign.args = {
  hasPadding: true,
  children: (
    <p>
      hola World
    </p>
  )
}


export default {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    hasPadding: { control: 'boolean' },
  },
};