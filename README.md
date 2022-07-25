# Vue.js

**Initialisation : [section 1 - Getting started](section%201%20-%20Getting%20started)**

**Concepts de base : [section 2 - Core Concept & Dom](section%202%20-%20Core%20Concepts%20&%20Dom)**

  ```js
  const app = Vue.createApp({
    data() {
      return {};
    },
    methods: {},
    computed: {},
    watch: {},
  });

  app.mount('#ID');
  ```

**Conditions & Listes : [section 3 - rendering: conditions & listes](section%203%20-%20rendering%3a%20conditions%20&%20listes)**

**Monster Slayer Game : [section 4 - Project - Game](section%204%20-%20Project%20-%20Game)**

**Behind the scenes : [section 5 - behind the scenes](section%205%20-%20behind%20the%20scenes)**

**Components : [section 6 - components](section%206%20-%20components)**

**Developpement setup : [section 7 - developpement setup](section%207%20-%20developpement%20setup)**

- 
  ```sh
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

**Component Communication : [section 8 - component communication](section%208%20-%20component%20communication)**

[App.vue](./section%208%20-%20component%20communication/project%20-%20potential%20problem/src/App.vue) (friend contact)

- 
  ```js
  provide() {
    return {
      topics: this.topics,
      selectTopic: this.activateTopic,
    }
  },
  inject: ['selectTopic', 'topics'],
  ```

[App.vue](./section%208%20-%20component%20communication/project%20-%20friend%20contact/src/App.vue) (potential problem)

- 
  ```js
  props: {
    id: { type: String, required: true }
  },
  ```

**Diving Into Components : [section 9 - Diving Deeper Into Components](section%209%20-%20Diving%20Deeper%20Into%20Components)**

- `<style scoped>`
- `<slot :goalItem="goal" anotherProp=" ... "></slot>`
- `<teleport to="body">`

**Projet : [section 10 - Projet](section%2010%20-%20Projet)**
