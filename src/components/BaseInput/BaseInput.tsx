import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { BASES } from '../../constants';
import makeFirstLetterUpperCase from '../../utils/makeFirstLetterUpperCase';
import { Base } from '../../types';

interface Props {
  onChange: (value: Base) => void;
  value: Base;
}
function BaseInput({ onChange, value }: Props) {
  return (
    <Select
      defaultValue={0}
      value={value}
      onChange={(e) => onChange(e.target.value as Base)}
      style={{ margin: '30px 15px', width: '50%' }}
    >
      <MenuItem value={0}>Choose an option</MenuItem>
      {Object.keys(BASES).map((base, index) => (
        <MenuItem value={BASES[base]} key={index}>
          {makeFirstLetterUpperCase(base)}
        </MenuItem>
      ))}
    </Select>
  );
}

export default BaseInput;
