import { createSelector } from "reselect";
// import { DATE_RANGE_OPTION_KEY, dateRanges } from 'components/core/ComparisonDateRange/constant';

import { initialState } from "./reducers";

/**
 * Direct selector to the filterProducer state domain
 */

const selectfilterProducerDomain = (state) =>
  state.filterProducer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by filterProducer
 */

const makeSelectfilterProducer = () =>
  createSelector(selectfilterProducerDomain, (substate) => substate);

export default makeSelectfilterProducer;
export { selectfilterProducerDomain };
