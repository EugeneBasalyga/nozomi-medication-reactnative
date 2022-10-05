import { useState } from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({
  value,
  label,
  type,
  error,
  disabled,
  leftIcon,
  onChangeText,
  ...props
}) => {
  const isPassword = type === 'password';
  const [isShowPassword, setIsShowPassword] = useState(false);

  const rightIcon = () => {
    if (isPassword) {
      if (isShowPassword) {
        return (<TextInput.Icon icon="eye-off" onPress={() => setIsShowPassword(false)} />);
      }
      return (<TextInput.Icon icon="eye" onPress={() => setIsShowPassword(true)} />);
    }
    return null;
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        mode="outlined"
        style={styles.input}
        theme={{ roundness: 15 }}
        activeOutlineColor="#000"
        outlineColor="transparent"
        value={value}
        label={label}
        disabled={disabled}
        left={leftIcon}
        right={rightIcon()}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !isShowPassword}
        error={error}
        {...props}
      />
      {error
        ? (
          <HelperText style={styles.inputError} type="error">
            {error}
          </HelperText>
        ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: '70%',
    flexDirection: 'column',
  },
  input: {
    backgroundColor: '#eeeff3',
    marginBottom: 10,
  },
  inputError: {
    alignSelf: 'flex-start',
    paddingBottom: 5,
  },
});

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  // error: PropTypes.shape({
  //   field: PropTypes.string,
  //   msg: PropTypes.string,
  // }),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  onChangeText: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  type: '',
  error: '',
  disabled: false,
  leftIcon: null,
};

export default Input;
