import React, { forwardRef } from 'react';
import Box from '../Box';
import ButtonBase from '../ButtonBase';
import Flex from '../Flex';
import Icon from '../Icon';
import Space from '../Space';
import {
  useToastRootStyle,
  useToastIconStyle,
  useToastMessageStyle,
  useToastCloseButtonStyle,
} from './styles';

const defaultAppearance = 'none';

const getIconByAppearance = (appearance) => {
  const iconName = {
    success: 'success',
    info: 'info',
    warning: 'warning-triangle',
    error: 'error',
  }[appearance];

  if (!iconName) {
    return null;
  }

  return (
    <Icon icon={`${iconName}`} />
  );
};

const ToastIcon = (props) => (
  <Flex {...props} />
);

const ToastMessage = (props) => (
  <Box {...props} />
);

const ToastCloseButton = (props) => (
  <ButtonBase {...props} />
);

const Toast = forwardRef((
  {
    isCloseButtonVisible,
    onClose,
    appearance = defaultAppearance,
    icon,
    children,
    ...rest
  },
  ref,
) => {
  const rootStyleProps = useToastRootStyle({ appearance });
  const iconStyleProps = useToastIconStyle({ appearance });
  const messageStyleProps = useToastMessageStyle();
  const closeButtonStyleProps = useToastCloseButtonStyle();

  if (typeof icon === 'string') {
    icon = (<Icon icon={icon} />);
  }
  if (typeof icon === 'undefined') {
    icon = getIconByAppearance(appearance);
  }

  return (
    <Flex
      ref={ref}
      align="flex-start"
      justify="space-between"
      {...rootStyleProps}
      {...rest}
    >
      {!!icon && (
        <>
          <ToastIcon {...iconStyleProps}>
            {icon}
          </ToastIcon>
          <Space minWidth="2x" />
        </>
      )}
      <ToastMessage {...messageStyleProps}>
        {children}
      </ToastMessage>
      {!!isCloseButtonVisible && (
        <>
          <Space minWidth="4x" />
          <ToastCloseButton {...closeButtonStyleProps} onClick={onClose}>
            <Icon icon="close-s" />
          </ToastCloseButton>
        </>
      )}
    </Flex>
  );
});

Toast.displayName = 'Toast';

export default Toast;
