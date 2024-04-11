const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age = person.age + 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  let car = { name: name, maker: maker, year: year, needsOilChange: false }
  return car
};

const weAreNotFriends = (person) => {
  return person.friends.pop()
};

const listHobbies = (person) => {
  for (let i of person.hobbies) {
    console.log(`${person.name} likes ${i}.`)
  }
};

const getNextOpponent = (team) => {
  if (team.matches[0] === undefined) {
    return null
  }
  return team.matches[0].teamName;
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
