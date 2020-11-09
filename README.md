# ng2020-wechaty

Ng+ Developers Conference 2020 Keynote: Conversational AI, Chatbot, and Angular

[![Huan Ng+ Developers Conference 2020 Keynote: Conversational AI, Chatbot, and Angular](docs/images/ng2020-huan-keynote.webp)](https://ng-plus.dev/#/topics)

> November 21 - 22 @online

Knowledge, ideas, and insights for the Next Generation

- ngChina 2020: <https://ng-plus.dev>
- ngChina 2019: <https://ng-china.org>

## Live Coding Explanation

We have four steps in our live coding, they are saved in four separate branches for easy loading and testing.

### Step 1. `ng new my-app`

Branch: [step_1_ng_new_my-app](https://github.com/huan/ng2020-wechaty/tree/step_1_ng_new_my-app)

```sh
npx --package @angular/cli ng new my-app
cd my-app
ng serve --open
```

Learn more from <https://angular.io/guide/setup-local>

### Step 2. Wechaty

Branch: [step_2_wechaty](https://github.com/huan/ng2020-wechaty/tree/step_2_wechaty)

```sh
test
```

Learn more:

1. [How to create your own Wechaty Hostie Token with the Web Protocol #1986](https://github.com/wechaty/wechaty/issues/1986) This step you will need a Wechaty Token for connecting to the Wechaty Puppet Service. Please read the issue `wechaty/wechaty#1986` for how to make it by yourself.

Example: How to setup a Wechaty token (copy & paste ready)

```sh
export WECHATY_TOKEN=puppet_hostie_your_example_token
# Set port for your hostie service: must be published accessible on the internet
export WECHATY_HOSTIE_PORT=8788

export WECHATY_PUPPET=wechaty-puppet-puppeteer
export WECHATY_LOG=verbose

docker run \
  --rm \
  -ti \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_HOSTIE_PORT \
  -e WECHATY_TOKEN \
  -p "$WECHATY_HOSTIE_PORT" \
  wechaty/wechaty
```

### Step 3. TensorFlow.js Toxicity

```sh
npm install @tensorflow/tfjs
npm install @tensorflow-models/toxicity
```

Branch: [step_3_tensorflow-models_toxicity](https://github.com/huan/ng2020-wechaty/tree/step_3_tensorflow-models_toxicity)

Learn more:

1. [TensorFlow.js models: toxicity classifier source](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)
1. [TensorFlow.js toxicity classifier demo](https://storage.googleapis.com/tfjs-models/demos/toxicity/index.html): This is a demo of the TensorFlow.js toxicity model, which classifies text according to whether it exhibits offensive attributes (i.e. profanity, sexual explicitness).
1. [Text classification using TensorFlow.js: An example of detecting offensive language in browser](https://medium.com/tensorflow/text-classification-using-tensorflow-js-an-example-of-detecting-offensive-language-in-browser-e2b94e3565ce)

### 4. TensorFlow.js QnA

Branch: [step_4_tensorflow-models_qna](https://github.com/huan/ng2020-wechaty/tree/step_4_tensorflow-models_qna)

```sh
npm install @tensorflow-models/qna
```

```ts

```

Learn more:

1. [TensorFlow.js models: Question and Answer source](https://github.com/tensorflow/tfjs-models/tree/master/qna) Use a pre-trained model to answer questions based on the content of a given passage.
1. [TensorFlow.js models: Question and Answer demo](https://storage.googleapis.com/tfjs-models/demos/mobilebert-qna/index.html)
1. [TensorFlow Blog: Exploring helpful uses for BERT in your browser with Tensorflow.js](https://blog.tensorflow.org/2020/03/exploring-helpful-uses-for-bert-in-your-browser-tensorflow-js.html)

## Resources

1. [TensorFlow.js Tutorials](https://www.tensorflow.org/js/tutorials)
1. [TensorFlow.js Models](https://www.tensorflow.org/js/models)
1. [TensorFlow.js Demos](https://www.tensorflow.org/js/demos)
1. [TensorFlow.js Examples](https://github.com/tensorflow/tfjs-examples/)
1. [TensorFlow.js Gallery](https://github.com/tensorflow/tfjs/blob/master/GALLERY.md)

## Author

[Huan LI](https://github.com/huan) ([李卓桓](http://linkedin.com/in/zixia)), Google Machine Learning Developer Expert, zixia@zixia.net

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## Copyright & License

- Docs released under Creative Commons
- Code released under the Apache-2.0 License
- Code & Docs © 2020 Huan LI \<zixia@zixia.net\>
