import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

import Input from './Input';

const PasswordInput = ({
  value,
  label,
  error,
  disabled,
  leftIcon,
  onChangeText,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <Input
      value={value}
      label={label}
      error={error}
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={isShowPassword ? (<TextInput.Icon icon="eye-off" onPress={() => setIsShowPassword(false)} />) : (<TextInput.Icon icon="eye" onPress={() => setIsShowPassword(true)} />)}
      onChangeText={onChangeText}
      secureTextEntry={!isShowPassword}
    />
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    field: PropTypes.string,
    msg: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  onChangeText: PropTypes.func.isRequired,
};

PasswordInput.defaultProps = {
  value: '',
  error: {},
  disabled: false,
  leftIcon: null,
};

export default PasswordInput;
