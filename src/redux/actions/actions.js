export const setFilterType = "SET_FILTER";
export const setFilter = (filters = {}) => ({
  type: setFilterType,
  filters
});
