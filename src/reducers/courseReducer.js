export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      // state.push({course: action.course}) // state is immutable
      return [...state, Object.assign({}, action.course)];  // deep copy

    default:
      return state;
  }
}