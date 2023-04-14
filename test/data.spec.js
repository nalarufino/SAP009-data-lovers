import { filterRole, calculatePercent } from '../src/data.js';

describe('test of filterRole function', () => {

  test('positive champion role filter validation', () => {
    const champions = [
      { id: "Irelia", tags: ["Fighter", "Assassin"] },
      { id: "Viktor", tags: ["Mage"] },
      { id: "Soraka", tags: ["Support", "Mage"] }
    ]
    const response = filterRole(champions, "Mage")
    expect(response).toStrictEqual([champions[1], champions[2]]);
  });

  test('negative champion role filter validation', () => {
    const champions = [
      { id: "Irelia", tags: ["Fighter", "Assassin"] },
      { id: "Viktor", tags: ["Mage"] },
      { id: "Soraka", tags: ["Support", "Mage"] }
    ]
    const response = filterRole(champions, "Fighter")
    expect(response).not.toStrictEqual([champions[1], champions[2]]);
  });

  test('function return type validation', () => {
    const champions = [
      { id: "Irelia", tags: ["Fighter", "Assassin"] },
      { id: "Viktor", tags: ["Mage"] },
      { id: "Soraka", tags: ["Support", "Mage"] }
    ]
    const response = filterRole(champions, "Mage")
    expect(typeof response).toStrictEqual("object");
  });

});

describe('test of calculatePercent function', () => {
  test('function percentage return validation', () => {
    const champions = [0]
    const allChampions = [0,1,2,3,4,5,6,7,8,9]
    const response = calculatePercent(champions, allChampions)
    expect(response).toEqual("10.00")
  } )   
})