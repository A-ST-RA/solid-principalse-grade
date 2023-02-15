export class EpicriseValidator {
  validateEpicrise() {
    console.log("validating epicrise...");
  }
}

export class EpicriseService {
  constructor(private readonly v1Validator: EpicriseValidator) {}
}