# Firebase Custom Login

Firebase functions to implement a custom login. Firebase's default is email and password.

<p align="center">
<img alt="firebase" src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" />
<img alt="node" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
<img alt="prettier" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/>
</p>

### Setup

1. To run locally, run `firebase init` in the first directory outside this project and select _functions_ and _emulators_ and assign it to your Firebase Project.
2. When asked, set the emulators to run for _functions_, _firestore_, _realtime database_ and _auth_.

### Run

To run this project, you'll need to run `dev:start` and `dev:watch` in two terminals.

```sh
$ yarn dev:watch # triggers rebuild on file changes
$ yarn dev:start # starts the emulators
```
