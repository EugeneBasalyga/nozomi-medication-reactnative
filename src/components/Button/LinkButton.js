import { useLinkProps } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const LinkButton = ({
  to,
  action,
  textStyle,
  children,
  ...rest
}) => {
  const { onPress, ...props } = useLinkProps({ to, action });

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} {...props} {...rest}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

LinkButton.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object]),
  action: PropTypes.oneOfType([PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node.isRequired,
};

LinkButton.defaultProps = {
  to: null,
  action: null,
  textStyle: null,
};

export default LinkButton;
