export const isEmpty = (data) => data !== undefined && !data.length;
export const filterUsers = (state) => {
  let users;
  if (isEmpty(state.userState.searchTerm)) {
    users = state.userState.users.slice(
      0,
      state.userState.users.length,
    );
  } else {
    let searchTerm = state.userState.searchTerm.toLowerCase()
    users = state.userState.users.filter(
      user => user.name.first.toLowerCase().includes(searchTerm) || user.name.last.toLowerCase().includes(searchTerm)
    );
  }
  return users;
};

export const test = () => {};
