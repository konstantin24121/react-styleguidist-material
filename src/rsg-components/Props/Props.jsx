import React from 'react';
import PropTypes from 'prop-types';
import PropsRenderer from './PropsRenderer';
import PropsFlowRenderer from './PropsFlowRenderer';

const Props = (props) => (
  <div>
    {props.flow ? <PropsFlowRenderer props={props.props} /> : <PropsRenderer props={props.props} />}
  </div>
);

Props.propTypes = {
  flow: PropTypes.bool,
  props: PropTypes.object.isRequired,
};

export default Props;
