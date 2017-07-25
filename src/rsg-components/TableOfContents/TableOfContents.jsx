import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SelectableList } from 'rsg-components';
import TableOfContentsRenderer from './TableOfContentsRenderer';

class TableOfContents extends Component {
 static propTypes = {
   components: PropTypes.array.isRequired,
   sections: PropTypes.array.isRequired,
 };

 constructor(props) {
   super(props);

   this.state = {
     searchTerm: '',
   };
 }

 render() {
   const { searchTerm } = this.state;
   const { components, sections } = this.props;
   return (
     <TableOfContentsRenderer
       searchTerm={searchTerm}
       items={<SelectableList components={components} sections={sections} />}
       onSearchTermChange={(term) => this.setState({ term })}
     />
   );
 }
}

export default TableOfContents;
