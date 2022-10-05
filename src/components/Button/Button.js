import {
  Pressable, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          buttonStyle,
          {
            backgroundColor: pressed
              ? buttonStyle.pressedInBackgroundColor
              : buttonStyle.pressedOutBackgroundColor,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
  },
  text: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#fff',
  },
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
  buttonStyle: null,
  textStyle: null,
};

export default Button;
