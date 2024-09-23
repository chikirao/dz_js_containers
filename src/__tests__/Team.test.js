import Team from '../js/Team';

test('add character to the team', () => {
  const team = new Team();
  const char1 = { name: 'John', type: 'Swordsman' };
  team.add(char1);

  expect(team.toArray()).toEqual([char1]);
});

test('add character that is already in the team should throw error', () => {
  const team = new Team();
  const char1 = { name: 'John', type: 'Swordsman' };
  team.add(char1);

  expect(() => team.add(char1)).toThrow('Character is already in the team');
});

test('addAll should add multiple characters', () => {
  const team = new Team();
  const char1 = { name: 'John', type: 'Swordsman' };
  const char2 = { name: 'Doe', type: 'Magician' };

  team.addAll(char1, char2);
  expect(team.toArray()).toEqual([char1, char2]);
});

test('addAll should not add duplicates', () => {
  const team = new Team();
  const char1 = { name: 'John', type: 'Swordsman' };
  const char2 = { name: 'Doe', type: 'Magician' };

  team.addAll(char1, char2, char1);
  expect(team.toArray()).toEqual([char1, char2]);
});
