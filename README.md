# @atomic-packages/common-functions

<p align="center">
  <img width="400" height="400" src="https://user-images.githubusercontent.com/81478885/201429388-60724ded-01ab-4446-b0c9-08d1dd3f2909.png">
</p>


@atomic-packages/common-functions is a node package containing common functions that may be used in the development scenario. These include splitting strings based on a delimeter, conversion between objects to arrays, object arrays to arrays, finding elements in arrays and objects, finding existence of key in objects and many more.

## Installation

From https://www.npmjs.com/package/@atomic-packages/common-functions

```bash
npm i @atomic-packages/common-functions
```

## Usage

Eg: Using the 
```javascript
const commonFunction = require('@atomic-packages/common-functions'); // at top of file require the package

const objectExample ={
        id:1,
        name:'John',
        age:34,
        location:'Australia'
    };

const output = commonFunction.keyExists(objectExample,'id');
```

## Contributing

Pull requests are welcome for any changes. For major changes, first open an issue and then contribute

## License

[MIT](https://choosealicense.com/licenses/mit/)
