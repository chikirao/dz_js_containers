import Team from './js/Team';

// Пример работы с классом Team
const team = new Team();
const char1 = { name: 'John', type: 'Swordsman' };
const char2 = { name: 'Doe', type: 'Magician' };

// Добавляем персонажей в команду
team.add(char1);
team.addAll(char2);

// Получаем массив персонажей
const membersArray = team.toArray();

// Вставляем результат в DOM
const resultElement = document.createElement('div');
resultElement.innerHTML = `
  <h2>Team Members:</h2>
  <ul>
    ${membersArray.map(member => `<li>${member.name} (${member.type})</li>`).join('')}
  </ul>
`;

document.body.appendChild(resultElement);
