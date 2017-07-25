import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { withRouter } from 'react-router';
import { filterComponentsByName, getFilterRegExp } from '../../utils/utils';

const SelectableListMaterial = makeSelectable(List);

class SelectableList extends Component {
 static propTypes = {
   components: PropTypes.array.isRequired,
   sections: PropTypes.array.isRequired,
   searchTerm: PropTypes.string,
   history: PropTypes.object.isRequired,
 };

 static defaultProps = {
   searchTerm: '',
 };

 constructor(props) {
   super(props);
   this.state = {
     activeItem: null,
   };
 }

 getComponents = (components, searchTerm) => filterComponentsByName(components || [], searchTerm);

 getSections(sections = [], searchTerm) {
   const regExp = getFilterRegExp(searchTerm);
   return sections.reduce(
     (filteredSections, { name, components: subComponents = [], sections: subSections }) => {
       subComponents = this.getComponents(subComponents, searchTerm);
       if (subComponents.length || !searchTerm || regExp.test(name)) {
         filteredSections.push({
           heading: true,
           name,
           content: this.renderItems(subComponents, subSections, searchTerm),
         });
       }
       return filteredSections;
     }, []);
 }

 handleOnChange = (event, index) => {
   this.setState({
     activeItem: index,
   }, () => {
     this.props.history.push(index);
   });
 };


 renderItems(components, sections, searchTerm) {
   const items = [
     ...this.getComponents(components, searchTerm),
     ...this.getSections(sections, searchTerm),
   ];
   return items.map((item) => (
     <ListItem
       key={item.name}
       value={item.name}
       primaryText={item.name}
       initiallyOpen
       nestedItems={item.content}
     />
   ));
 }

 render() {
   const { components, sections, searchTerm } = this.props;
   return (
     <SelectableListMaterial
       value={this.state.activeItem}
       onChange={this.handleOnChange}
     >
       {this.renderItems(components, sections, searchTerm)}
     </SelectableListMaterial>
   );
 }
}

export default withRouter(SelectableList);
