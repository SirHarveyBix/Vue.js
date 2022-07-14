# Vue.js

pour interagir avec un element du DOM

```html
  <script src="https://unpkg.com/vue@next"></script>
  <section id="user-goal">
    <h2>{{ title }}</h2>
  </section>
```

on recupere l'id ici `id="user-goal"`, il est lié de dans [app.js](project1/app.js)

```js
const app = Vue.createApp({
  data() { 
    return {
      title: 'My Course Goal'
    }
  },
  methods: {},
})

app.mount('#user-goal')
```

`app.mount('#user-goal')`

structure classique d'un projet Vue: app.js

```js
const app = Vue.createApp({
  data() { // Obligatoire
    return {
      courseGoalA: 'Bienvenu sur Vue',
      courseGoalB: "Tout s'est bien passé",
    };
  },
  methods: { // Obligatoire
    outputGoal() {
      const randomNumer = Math.random()
      if (randomNumer < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    },
  },
})

app.mount('#user-goal')
```

Les classes sont obligatoire.
