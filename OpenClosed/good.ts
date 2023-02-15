export interface IEpicriseValidator {
  // Теперь для новых версий, просто имплементируем данный интерфейс
  validate();  
}

// Попросили сделать валидацию для v1
export class EpicriseV1Validator implements IEpicriseValidator {
  validate() {
    console.log('Валидация по правилам v1');
  }
}

// Клиент попросил валидацию v2, мы и ее добавили и точно ничего не сломали
export class EpicriseV1Validator implements IEpicriseValidator {
  validate() {
    console.log('Валидация по правилам v1');
  }
}

// v3?, v4? Да за просто!