const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(drivers, name) {
  let drivers_match = drivers.filter((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1) === name;
  });
  return drivers_match;
}
function fuzzyMatch(drivers, name) {
  let drivers_match = drivers.filter((element) => {
    return element.slice(0, 2) === name;
  });
  return drivers_match;
}
function matchName(drivers, name) {
  let drivers_match = drivers.filter((element) => {
    return element.name === name;
  });
  return drivers_match;
}