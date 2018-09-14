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
  let returnObject = {...state};
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
      returnObject.monsters = monsterTrackerIdReducer(state.monsters, action);
      return returnObject;
    case "ADD_MONSTER":
      returnObject.monsters["2"] = {
        name: action.monsterName,
        maxHp: action.monsterMaxHp,
        currentHp: action.monsterCurrentHp
      }
      return returnObject;
    default:
      return state;
  }
}

function monsterTrackerIdReducer(state = { 0: { name: "DefaultNameFromTrackerIdReducer", maxHp: 8, currentHp:8 }}, action) {
  switch(action.type) {
    case "MODIFY_HP":
      let returnObject = {...state};
      returnObject[action.trackerId] = monsterReducer(state[action.trackerId], action);
      return returnObject;
    default:
      return state;
  }
}

function monsterReducer( state = { name: "DefaultNameFromMonsterReducer", maxHp: 7, currentHp: 7}, action) {
  switch(action.type) {
    case "MODIFY_HP":
      return Object.assign({}, state, { currentHp: state.currentHp + action.hpChange })
    default:
      return state;
  }
}

export default reducer;
