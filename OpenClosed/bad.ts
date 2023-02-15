export class EpicriseValidator {
  constructor(private readonly version){}
  
  validate() {
    // Клиент попросил валидацию v1, мы ее сделали
    if (this.version === 'v1') {
      console.log('do this 1');
    }

    // Клиент попросил валидацию v2, мы ее добавили
    if (this.version === 'v2') {
      console.log('do this 2');
    }
    
    // Нужна валидация для v3?! да вы что псы?!
  }  
}