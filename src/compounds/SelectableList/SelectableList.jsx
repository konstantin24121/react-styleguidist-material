import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { withRouter } from 'react-router';
import { getFilterRegExp, filterComponentsByName } from 'sg/utils/utils';

const SelectableListMaterial = makeSelectable(List);

class SelectableList extends React.PureComponent {
 static propTypes = {
   sections: PropTypes.array.isRequired,
   /*
    Connected
    */
   history: PropTypes.object.isRequired,
   location: PropTypes.object.isRequired,
 };


 constructor(props) {
   super(props);
   this.state = {
     activeItem: null,
   };
 }

 componentWillReceiveProps(nextProps) {
   if (nextProps.location !== this.props.location) {
     this.setState({
       activeItem: nextProps.location.pathname,
     });
   }
 }

 getComponents = (components, searchTerm) => filterComponentsByName(components || [], searchTerm);

 getSections(sections = []) {
   return sections.reduce(
     (filteredSections, {
       name, path, components: subComponents = [], sections: subSections = [],
     }) => {
       if (subComponents.length || subSections.length) {
         filteredSections.push({
           heading: true,
           name,
           url: path,
           subsections: this.getSections([...subSections, ...subComponents]),
         });
       } else {
         filteredSections.push({
           heading: true,
           name,
           url: path,
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

 renderItems(sections) {
   return sections.map((section) => (
     <ListItem
       key={section.url}
       value={section.url}
       primaryText={section.name}
       initiallyOpen
       nestedItems={this.renderItems(section.subsections || [])}
     />
   ));
 }

 render() {
   const { sections } = this.props;
   return (
     <SelectableListMaterial
       value={this.state.activeItem}
       onChange={this.handleOnChange}
     >
       {this.renderItems(this.getSections(sections))}
     </SelectableListMaterial>
   );
 }
}

export default withRouter(SelectableList);
