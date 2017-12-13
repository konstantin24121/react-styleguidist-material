import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import { Caption } from 'sg/components';
import { Required, rowStyles, headerStyle } from './PropTypesStyled';

import renderFlowTableData from './renderFlowTableData';
import renderTableData from './renderTableData';

const PropsTable = ({ isFlow, properties }) => {
  const hasRequiredIndex = Object.values(properties).findIndex((prop) => prop.required);
  const hasRequired = hasRequiredIndex !== -1;
  return (
    <span>
      <Table
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}

        >
          <TableRow style={headerStyle}>
            <TableHeaderColumn
              style={{ width: '150px', ...rowStyles, ...headerStyle }}
              tooltip="The name of property"
            >
              Name
            </TableHeaderColumn>
            <TableHeaderColumn
              style={{ width: '100px', ...rowStyles, ...headerStyle }}
              tooltip={`The ${isFlow ? 'Flow' : 'PropTypes'} type`}
            >
              Type
            </TableHeaderColumn>
            <TableHeaderColumn
              style={{ width: '100px', ...rowStyles, ...headerStyle }}
              tooltip="The default value"
            >
              Default
            </TableHeaderColumn>
            <TableHeaderColumn
              style={{ ...rowStyles, ...headerStyle }}
            >
              Description
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          showRowHover
        >
          {isFlow ? renderFlowTableData(properties) : renderTableData(properties)}
        </TableBody>
      </Table>
      {hasRequired && <Caption><Required>*</Required> - required property</Caption>}
    </span>
  );
};

PropsTable.propTypes = {
  isFlow: PropTypes.bool,
  properties: PropTypes.object.isRequired,
};

PropsTable.defaultProps = {
  isFlow: false,
};

export default PropsTable;
