# Vue.js

introduction simple des composants :

comme il nous fait creer une methode de `Vue.createApp({...})`

ici un composant se monte de la meme maniere :

[app.js](app.js)

```js
app.component('friend-contact', {
  template: `
    <h2>{{ friend.name }}</h2>
  `,
  data() {
    return {
      friend: {
        name: 'Manuel Lorenz',
      },
    };
  },
  methods: {
  },
})
```

l'appel du composant, dans [index.html](index.html)

```html
<friend-contact></friend-contact>
```
