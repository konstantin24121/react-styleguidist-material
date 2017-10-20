/* eslint-disable max-len */

const createPrimitiveTypeChecker = (validate, isRequired) => (props, propName, componentName, location) => {
  if (props[propName] == null) {
    if (isRequired) {
      if (props[propName] === null) {
        return new Error(`The ${location} '${propName}' is marked as required in '${componentName}', but its value is 'null'.`);
      }
      return new Error(`The ${location} '${propName}' is marked as required in '${componentName}', but its value is 'undefined'.`);
    }
  }
  return validate(props, propName, componentName, location, propName);
};

const MyPropTypes = {
  allowKeys: (allowArray) => {
    function validate(props, propName, componentName, location) {
      const prop = props[propName];
      if (typeof prop !== 'object') {
        throw new Error(
          `Invalid ${location} '${propName}' supplied to '${componentName}'. allowKeys type must be an object.`);
      }
      const propKeys = Object.keys(prop);
      for (let i = 0; i < allowArray.length; i += 1) {
        const keyIdx = propKeys.indexOf(allowArray[i]);
        if (keyIdx !== -1) propKeys.splice(keyIdx, 1);
      }
      if (propKeys.length) {
        throw new Error(
          `Invalid prop '${propName}' supplied to '${componentName}'. You use non-allowed keys: '${propKeys}'.`);
      }
    }
    const check = createPrimitiveTypeChecker(validate, false);
    check.isRequired = createPrimitiveTypeChecker(validate, true);
    return check;
  },
  intRange: (start = 1, end = 2) => {
    function validate(props, propName, componentName, location) {
      const prop = props[propName];
      if (start > end) {
        throw new Error(
          `Invalid ${location} '${propName}' supplied to '${componentName}'. Start parametr must be less than end parametr.`);
      }

      if (!Number.isInteger(prop)) {
        throw new Error(
          `Invalid ${location} '${propName}' supplied to '${componentName}'. Props type must be an integer.`);
      }

      const range = [];
      for (let i = start; i <= end; i += 1) {
        range.push(i);
      }

      if (range.indexOf(prop) === -1) {
        throw new Error(
          `Invalid ${location} '${propName}' supplied to '${componentName}'. You number is out of range '[${start}, ${end}]'.`);
      }
    }

    const check = createPrimitiveTypeChecker(validate, false);
    check.isRequired = createPrimitiveTypeChecker(validate, true);
    return check;
  },
};

export default MyPropTypes;
