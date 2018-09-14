/*
State structure:

{
  monsters: [
     { name: "Monster1", maxHp: X, currentHp: X },
     { name: "Monster2", maxHp: Y, currentHp: Y-D }
  ]
  other: { ... }
}
*/

function reducer(state, action) {
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
        returnObject.monsters = monsterTrackerIdReducer(state.monsters, action);
      return returnObject;
    default:
      return state;
  }
}

function monsterTrackerIdReducer(state, action) {
  let returnObject = [...state];
  switch(action.type) {
    case "MODIFY_HP":
      returnObject[action.monsterIndex] = monsterReducer(state[action.monsterIndex], action);
      return returnObject;
    case "ADD_MONSTER":
      returnObject.push(monsterReducer(null, action)); //Technically redundant, but it fits our design a bit better.
      return returnObject;
    default:
      return state;
  }
}

function monsterReducer( state = { name: "DefaultNameFromMonsterReducer", maxHp: 7, currentHp: 7}, action) {
  switch(action.type) {
    case "MODIFY_HP":
      return Object.assign({}, state, { currentHp: state.currentHp + action.hpChange })
    case "ADD_MONSTER":
      return Object.assign({}, {name: action.monsterName, maxHp: action.monsterMaxHp, currentHp: action.monsterCurrentHp});
    default:
      return state;
  }
}

export default reducer;
