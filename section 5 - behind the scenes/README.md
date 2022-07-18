# Vue.js

## Lifcycle

```mermaid
flowchart TD;
id1{{"createApp({...})"}} --> A["beforeCreate()"] --> B["created()"] -- Compile template --> C["beforeMount()"] --> D["Mounted()"] --> id2{{Mounted Vue Instance}} 
id2 --> id3{{Data changed}}
id2 --> id4{{instance Unmounted}} 
id3 --> E["beforeUpdate()"] --> F["updated()"]
id4 --> G["beforeUnmount()"] --> H["Unmounted()"]

```

## < template >

les templates peuvent etre ecris comme il suit :

```js
const app = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
})

app.mount('#app')
```

## refs

Vue peut recupérer les valeurs dans le DOM, quand on en a besoin, plutot qu'a chaque fois :

- [index.html](index.html)

  ```html
  <input type="text" ref="userText" />
  ```

- [app.js](app.js)

  ```js
  this.message = this.$refs.userText.value
  ```

  - **`$`** signifie que c'est une '_built-in property_'

`ref` fonctionne comme `useRef` dans React.
