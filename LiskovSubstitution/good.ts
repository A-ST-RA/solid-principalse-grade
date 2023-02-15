export interface IEpicriseValidator {
  validate();  
}

export class EpicriseV1Validator implements IEpicriseValidator {
  validate() {
    console.log('Валидация по правилам v1');
  }
}

export class EpicriseV2Validator implements IEpicriseValidator {
  validate() {
    console.log('Валидация по правилам v2');
  }
}

// отлично, теперь у нас потомки делают одну и ту же задачу