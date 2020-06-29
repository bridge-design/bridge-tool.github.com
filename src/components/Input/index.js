import React from 'react';
import styled from 'styled-components';
import { Input as InputAntd } from 'antd';

import { colors, fonts } from '../DesignTokens';

const InputContainer = styled(InputAntd)`
  color: ${colors.black.value};
  font-size: 14px;
  font-family: ${fonts.brand};
  font-weight: 400;
  line-height: 2em;
  padding-left: 16px;
  border: none;

  &::placeholder {
    font-size: 14px;
    font-family: ${fonts.brand};
    font-weight: 400;
    color: ${colors.blue300.value};
  }

  &:focus {
    outline-color: ${colors.pink.value};
  }
`;

const Input = (props) => (
  <InputContainer {...props} />
);

export { Input };