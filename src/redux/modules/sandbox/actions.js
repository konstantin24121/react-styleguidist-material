import TYPES from './types';

export function changeSandboxParams(id, sandboxParams) {
  return {
    type: TYPES.changeParams,
    payload: {
      id,
      params: sandboxParams,
    },
  };
}
