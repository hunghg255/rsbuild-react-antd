import React from 'react';

import Button, { type ButtonProps } from '~/components/UI/Button';
import Text from '~/components/UI/Text';

type TButtonPrimary = Omit<ButtonProps, 'children'> & {
  children: string;
};

function ButtonPrimary ({ children, ...props }: TButtonPrimary) {
  return (
    <Button {...props}>
      <Text color='cwhite'
        type='body-medium'
      >
        {children}
      </Text>
    </Button>
  );
}
export default ButtonPrimary;
