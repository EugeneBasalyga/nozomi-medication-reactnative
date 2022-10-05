import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

import Input from './Input';

const InputControl = ({
  name, control, defaultValue, ...props
}) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  return <Input value={field.value} onChangeText={field.onChange} {...props} />;
};

InputControl.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.string,
};

InputControl.defaultProps = {
  defaultValue: '',
};

export default InputControl;
