import React from 'react';
import PropTypes from 'prop-types';
import { propTypes as MyPropTypes } from 'sg/utils';

import * as Titles from './TitleStyled';

const Title = ({ size, children, withoutMargin, isThin, fitInLine, hiddenSize }) => {
  const props = {
    isThin,
    withoutMargin,
    fitInLine,
  };
  const Component = Titles[`H${size}`];
  if (hiddenSize) {
    const HiddenH = Component.withComponent(`h${hiddenSize}`);
    return <HiddenH {...props}>{children}</HiddenH>;
  }
  return <Component {...props}>{children}</Component>;
};

Title.propTypes = {
  /**
   * Размер заголовка
   */
  size: MyPropTypes.intRange(1, 6).isRequired,
  /**
   * Скрытый размер заголовка, если необходимо использовать симантически другой tag
   */
  hiddenSize: MyPropTypes.intRange(0, 6),
  /**
   * Без вертикальных отступов
   */
  withoutMargin: PropTypes.bool,
  /**
   * Уменьшеный вес шрифта
   */
  isThin: PropTypes.bool,
  /**
   * Вписать в родительскую строку
   */
  fitInLine: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  withoutMargin: false,
  hiddenSize: 0,
  isThin: false,
  fitInLine: false,
};

export default Title;
