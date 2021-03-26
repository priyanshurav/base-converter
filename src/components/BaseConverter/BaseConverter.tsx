import React, { useState, useEffect, useCallback } from 'react';
import './BaseConverter.css';
import { Typography, TextField } from '@material-ui/core';
import BaseInput from '../BaseInput/BaseInput';
import validateInput from '../../utils/validateInput';
import { Base } from '../../types';
import { BASES } from '../../constants';

interface Props {
  onCalculated: (result: string) => void;
  isHeadingSpaceLow: boolean;
  openSnackbar: (base: string) => void;
}

function BaseConverter({
  onCalculated,
  isHeadingSpaceLow,
  openSnackbar,
}: Props) {
  const getBaseName = (base: Base): string => {
    if (base === 0) return '';
    return Object.keys(BASES).filter((key) => BASES[key] === base)[0];
  };
  const [dropDownOneValue, setDropDownOneValue] = useState<Base>(0);
  const [dropDownTwoValue, setDropDownTwoValue] = useState<Base>(0);
  const [inputValue, setInputValue] = useState('');
  const calculate = useCallback(() => {
    if (!dropDownOneValue || !dropDownTwoValue) return;
    if (!inputValue) return onCalculated('');
    if (!validateInput(inputValue, dropDownOneValue))
      return openSnackbar(getBaseName(dropDownOneValue));
    onCalculated(
      parseInt(inputValue, dropDownOneValue)
        .toString(dropDownTwoValue)
        .toUpperCase()
    );
  }, [
    dropDownOneValue,
    inputValue,
    dropDownTwoValue,
    onCalculated,
    openSnackbar,
  ]);
  useEffect(() => {
    calculate();
  }, [dropDownOneValue, dropDownTwoValue, inputValue, calculate]);

  return (
    <div className="base-converter">
      <Typography
        variant={isHeadingSpaceLow ? 'h5' : 'h4'}
        align="center"
        style={{ userSelect: 'none', marginBottom: '5px' }}
      >
        Base Converter
      </Typography>
      <TextField
        label="Enter a value"
        inputProps={{ 'aria-label': 'Enter a value' }}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: '75%', margin: '10px 0' }}
      />
      <div className="base-inputs">
        <BaseInput
          onChange={(value) => setDropDownOneValue(value)}
          value={dropDownOneValue}
        />
        <span>to</span>
        <BaseInput
          onChange={(value) => setDropDownTwoValue(value)}
          value={dropDownTwoValue}
        />
      </div>
    </div>
  );
}

export default BaseConverter;
