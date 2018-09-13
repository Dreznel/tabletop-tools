export function getModifyHpAction(hpMod, id) {
  return ({
    type:"MODIFY_HP",
    trackerId:id,
    hpChange:hpMod
  })
}


//export default getModifyHpAction;
