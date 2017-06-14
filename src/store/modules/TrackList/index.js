import actions from './actions';
import mutations from './mutations';

const state = {
  fetching: false,
  error: null,
  data: null
};

export default {
  state,
  actions,
  mutations,
};
