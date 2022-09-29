import { HelperText, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({
  value,
  label,
  error,
  disabled,
  leftIcon,
  rightIcon,
  onChangeText,
  secureTextEntry,
}) => {
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
        right={rightIcon}
        onChangeText={(text) => onChangeText(text)}
        secureTextEntry={secureTextEntry}
        error={error.field}
      />
      {error.field
        ? (
          <HelperText style={styles.inputError} type="error">
            {error.msg}
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
  },
});

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    field: PropTypes.string,
    msg: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  error: {},
  disabled: false,
  leftIcon: null,
  rightIcon: null,
  secureTextEntry: false,
};

export default Input;
