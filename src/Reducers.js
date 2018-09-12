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

function reducer(state = { monsters: { 0: { name: "DefaultNameFromHere", maxHp: 5, currentHp:5 }}}, action) {
  switch(action.type) {
    case "MODIFY_HP":

    /*

      //This doesn't work because Object.assign() doesn't make deep copies, so the nested objects are still references
      //to the objects in the current state. Since the objects are "technically" the same objects in React's eyes, the
      //components don't re-render.

      let newMonsters = Object.assign({}, state.monsters);
      let newState = Object.assign({}, state);
      newState.monsters = newMonsters;
      newState.monsters[action.trackerId]["currentHp"] =
      newState.monsters[action.trackerId]["currentHp"] + action.hpChange;
      return newState;
    */
      return (
        {
          monsters: {
            0: {
              name: "It's a mutability problem",
              maxHp: 10,
              currentHp: state.monsters[action.trackerId]["currentHp"] + action.hpChange
            }
          }
        }
      )
    default:
      return state;
  }
}
/*
function reducer2(state = { name: "DefaultNameFromHere", maxHp: 5, currentHp:5 }, action) {
  switch(action.type) {
    case "MODIFY_HP":
      updatedCurrentHp =
      newState.monsters = newMonsters;
      newState.monsters[action.trackerId]["currentHp"] =
      newState.monsters[action.trackerId]["currentHp"] + action.hpChange;
      return newState;
    default:
      return state;
  }
}
*/

export default reducer;
