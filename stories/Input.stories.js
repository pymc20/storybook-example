import React from 'react';

import { Input } from './Input';

export default {
    title: 'Example/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type: 'text',
};

export const Select = Template.bind({});
Select.args = {
    type: 'select',
    placeholder: '선택하세요',
    selectOptions: [
        {
            title: '사과',
            value: 1,
        },
        {
            title: '배',
            value: 2,
        },
        {
            title: '복숭아',
            value: 3,
        }
    ],
};
