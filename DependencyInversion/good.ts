export interface IEpicriseValidator {
  validateEpicrise();
}

export class EpicriseValidator implements IEpicriseValidator {
  validateEpicrise() {
    console.log("validating epicrise...");
  }
}

export class EpicriseService {
  constructor(private readonly v1Validator: IEpicriseValidator) {}
}