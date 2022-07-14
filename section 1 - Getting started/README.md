# Vue.js

Contrairement a React, Vue peu s'installé de maniere plus simple :

 [index.html](index.html)

```html
 <script src="https://unpkg.com/vue@next"></script>
```

le reste se fera dans un fichier JS standard :

[app.js](app.js)

```js
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    },
  },
}).mount('#app')
```

ici comme dans react on recupere une balise pour y inserer notre code : ```.mount('#app')```

il y a  un simplcité dans les methods

 [index.html](index.html)

```html
 <li v-for="goal in goals">{{ goal }}</li>
```

```v-for```, fait l'équivalent de :

```js
this.goals.map((goal) => goal)
```