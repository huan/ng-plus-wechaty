import '@tensorflow/tfjs-node'
import * as toxicity from '@tensorflow-models/toxicity'

async function main () {
  // The minimum prediction confidence.
  const threshold = 0.9
  // Which toxicity labels to return.
  // const labelsToInclude = ['identity_attack', 'insult', 'threat']

  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  console.info('Loading toxicity model...')
  const model = await toxicity.load(threshold, [])

  const sentences = ['you suck']

  console.info('Classifying...')
  const predictions = await model.classify(sentences)

  // `predictions` is an array of objects, one for each prediction head,
  // that contains the raw probabilities for each input along with the
  // final prediction in `match` (either `true` or `false`).
  // If neither prediction exceeds the threshold, `match` is `null`.

  console.info(predictions)
  /*
  prints:
  {
    "label": "identity_attack",
    "results": [{
      "probabilities": [0.9659664034843445, 0.03403361141681671],
      "match": false
    }]
  },
  {
    "label": "insult",
    "results": [{
      "probabilities": [0.08124706149101257, 0.9187529683113098],
      "match": true
    }]
  },
  ...
    */
}

main()
  .catch(console.error)
