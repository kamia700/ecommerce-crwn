import {createSelector} from 'reselect';

// reselect allows us to memoize and not re-render a component if the state value does not change

const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
  [selectDirectory],
  directory => directory.sections
);