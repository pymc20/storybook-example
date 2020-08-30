import React from 'react';
import PropTypes from 'prop-types';
import {action} from "@storybook/addon-actions";

export const Input = ({ type, readOnly, required, placeholder, selectOptions }) => {
    if(type === 'select') {
        return (
            <select onChange={({nativeEvent:{target:{value}}}) => action('onChange')(value)}>
                {
                    selectOptions.map(option => {
                        return (
                            <option value={option.value}>
                                {option.title}
                            </option>
                        )
                    })
                }
            </select>
        )
    } else {
        return (
            <input
                type={type}
                readOnly={readOnly}
                required={required}
                placeholder={placeholder}
                onChange={({nativeEvent:{target:{value}}}) => action('onChange')(value)}
            />
        );
    }
};

Input.propTypes = {
    type: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    selectOptions: PropTypes.array,
};

Input.defaultProps = {
    type: 'text',
    readOnly: false,
    required: false,
    placeholder: '입력 하세요',
    selectOptions: [],
};
