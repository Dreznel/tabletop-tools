export function getModifyHpAction(hpMod, id) {
  return ({
    type:"MODIFY_HP",
    monsterIndex:id,
    hpChange:hpMod
  })
}


//export default getModifyHpAction;
