import { Injectable } from '@angular/core';

import { Brolog } from 'brolog';

import '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

@Injectable({
  providedIn: 'root'
})
export class ToxicityService {

  private model: toxicity.ToxicityClassifier;
  private loading: boolean;

  constructor(private log: Brolog) {
    log.verbose('ToxicityService', 'constructor()');

    this.init();
  }

  private init(): void {
    this.log.verbose('Toxicity', 'init()');

    // The minimum prediction confidence.
    const threshold = 0.9;
    // Which toxicity labels to return.
    const labelsToInclude = [];

    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    this.loading = true;
    toxicity.load(threshold, labelsToInclude)
      .then(model => this.model = model)
      .catch(e => this.log.error('Toxicity', 'init() load rejection: %s', e))
      .finally(() => {
        this.loading = false;
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

    this.log.verbose('Toxicity', 'classify(%s)', text);
    const predictions = await this.model.classify(sentences);
    this.log.verbose('Toxicity', 'classify(): %s', JSON.stringify(predictions));

    const result = predictions.map(p => p.results[0].match).some(m => m);
    this.log.verbose('Toxicity', 'classify(): ', result);

    return result;
  }

}
