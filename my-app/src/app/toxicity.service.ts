import { Injectable } from '@angular/core';

import { Brolog } from 'brolog';

import '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

@Injectable({
  providedIn: 'root'
})
export class ToxicityService {

  private model: toxicity.ToxicityClassifier;

  constructor(private log: Brolog) {
    log.verbose('ToxicityService', 'constructor()');

    this.init();
  }

  private init(): void {
    this.log.verbose('Toxicity', 'init()');

    toxicity.load(0.9, [])
      .then(model => this.model = model)
      .catch(e => this.log.error('Toxicity', 'init() load rejection: %s', e))
      .finally(() => {
        this.log.verbose('Toxicity', 'init() loading toxicity model done.');
      });
  }

  async classify(text: string): Promise<boolean> {
    this.log.verbose('ToxicityService', 'classify(%s)', text);

    if (!this.model) {
      this.log.verbose('ToxicityService', 'classify() model not initialized, return random result.');
      return false;
    }

    const sentences = [text];
    const predictions = await this.model.classify(sentences);
    this.log.verbose('Toxicity', 'classify() predictions: %s', JSON.stringify(predictions));

    const result = predictions.map(p => p.results[0].match).some(m => m);
    this.log.verbose('Toxicity', 'classify() result: %s', result);

    return result;
  }

}
