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
import { scrolableDiv as ScrolableDiv } from 'sg/components/Markdown/MarkdownStyled';
import { Required, rowStyles, headerStyle } from './PropTypesStyled';

import renderFlowTableData from './renderFlowTableData';
import renderTableData from './renderTableData';

const PropsTable = ({ isFlow, properties }) => {
  const hasRequiredIndex = Object.values(properties).findIndex((prop) => prop.required);
  const hasRequired = hasRequiredIndex !== -1;
  return [
    <ScrolableDiv key="table-wrapper">
      <Table
        selectable={false}
        bodyStyle={{ overflowX: null, overflowY: null }}
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
    </ScrolableDiv>,
    hasRequired && <Caption key="table-caption"><Required>*</Required> - required property</Caption>,
  ];
};

PropsTable.propTypes = {
  isFlow: PropTypes.bool,
  properties: PropTypes.object.isRequired,
};

PropsTable.defaultProps = {
  isFlow: false,
};

export default PropsTable;
