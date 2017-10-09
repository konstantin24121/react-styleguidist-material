import { createSelector } from 'reselect';

const getSections = (state) => state.sections;
const getActiveSectionName = (state, props) => props.location.pathname;

const getActiveSection = createSelector(
  [getActiveSectionName, getSections],
  (activeSectionName, sections) => {
    const pathArray = activeSectionName.split('/').slice(1);
    let activeSection = sections;
    activeSection.components = [];
    for (let i = 0; i < pathArray.length; i += 1) {
      if (!activeSection) return null;
      let findedActiveSection;
      if (activeSection.sections.length) {
        findedActiveSection = activeSection.sections.find((item) => item.name === pathArray[i]);
      }
      if (!findedActiveSection && activeSection.components.length) {
        findedActiveSection = activeSection.components.find((item) => item.name === pathArray[i]);
      }
      activeSection = findedActiveSection;
    }
    return activeSection;
  },
);

export { getActiveSection };
