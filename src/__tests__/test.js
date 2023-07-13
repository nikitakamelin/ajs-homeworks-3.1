import healthCheck from '../healthCheck';

const dataList = [
  [60, { name: 'Маг', health: 60 }, 'healthy'],
  [50, { name: 'Маг', health: 50 }, 'wounded'],
  [10, { name: 'Маг', health: 10 }, 'critical'],
  [0, { name: 'Маг', health: 0 }, 'dead'],
  [-5, { name: 'Маг', health: -5 }, 'Некорректное значение'],
];

test.each(dataList)('test healthCheck function with %s health', (_, object, expected) => {
  const result = healthCheck(object);
   
  expect(result).toBe(expected);
});

//* здесь сперва сделал по тесту для каждого значения функции, тоже работает но test.each короче
// test('healthCheck function dead', () => {
//   const object = { name: 'Маг', health: 0 };
//   const result = healthCheck(object);

//   expect(result).toBe('dead');
// });

// test('healthCheck function critical', () => {
//   const object = { name: 'Маг', health: 10 };
//   const result = healthCheck(object);

//   expect(result).toBe('critical');
// });

// test('healthCheck function wounded', () => {
//   const object = { name: 'Маг', health: 50 };
//   const result = healthCheck(object);

//   expect(result).toBe('wounded');
// });

// test('healthCheck function healthy', () => {
//   const object = { name: 'Маг', health: 60 };
//   const result = healthCheck(object);

//   expect(result).toBe('healthy');
// });

// test('healthCheck function Некорректное значение', () => {
//   const object = { name: 'Маг', health: -5 };
//   const result = healthCheck(object);

//   expect(result).toBe('Некорректное значение');
// });
