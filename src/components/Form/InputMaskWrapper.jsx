import React from "react";

import InputMask from 'react-input-mask';

const InputMaskWrapper = (props) => {
  return (
    <InputMask
      maskChar={null}
      {...props}
    >
        {() => props.children}
    </InputMask>
  );
}

export default InputMaskWrapper;
