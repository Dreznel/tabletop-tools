/*
State structure:

{
  monsters: {
    trackerId1: { name: "Monster1", maxHp: X, currentHp: X }
    trackerId2: { name: "Monster2", maxHp: Y, currentHp: Y-D }
  }
  other: { ... }
}
*/

function reducer(state = { monsters: { 0: { name: "DefaultName", maxHp: 5, currentHp:5 }}}, action) {
  switch(action.type) {
    case "MODIFY_HP":
      let newState = Object.assign({}, state);
      newState.monsters[action.trackerId]["currentHp"] =
      newState.monsters[action.trackerId]["currentHp"] + action.hpChange;
      return newState;
    default:
      return state;
  }
}

export default reducer;
