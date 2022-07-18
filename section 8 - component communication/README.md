e# Vue.js

## Installation :

- 
  ```sh
  npm install -g @vue/cli
  # OR
  yarn global add @vue/cli
  ```

creer un projet:

-  
  ```sh
  vue create my-project
  # OR
  vue ui
  # OR
  npm init vue
  ```

## Lancement :

```sh
yarn install
# AND
yarn serve
```

## Components

Notre pemier composant : [FriendContact.vue](src/components/FriendContact.vue)

il est appelé dans [main.js](src/main.js)

```js
import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.mount('#app');
```
