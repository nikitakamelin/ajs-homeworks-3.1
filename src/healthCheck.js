// Реализуйте функцию, которая на вход принимает объект вида:
export default function healthCheck(object) {
  // И возвращает ответ в виде одной из строк: healthy, wounded, critical
  return object.health > 50 ? 'healthy'
    : object.health >= 15 ? 'wounded'
      : object.health > 0 ? 'critical'
        : object.health === 0 ? 'dead'
          : 'Некорректное значение';
}
