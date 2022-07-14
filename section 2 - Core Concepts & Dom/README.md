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
  data() { 
    return {
      // etat intial
      name: 'pick-up'
    }
  },
  watch: {
    // s'active quand une proprié change
    // utile pour les type 'non-data': requete http, etc..
    counter(value) {
      if (value > 50) {
        const that = this
        setTimeout(() => { that.counter = 0 }, 2000)
      },
    },
  },
  computed: {
    // render uniquement quand la propriété change
    // utilisé quand une data a besoin d'un autre data
    //data bindig
    setName(event) {
      this.name = event.target.value;
    },
  },
  methods: {
    // render tout le composant quand un des fonction est appelée, utili pour les datas qui necessite une reevalutaion
    //event binding or data bindig
    setName(event) {
      this.name = event.target.value;
    },
  },
},
})

app.mount('#user-goal')
```

Les classes sont obligatoire.

## Fonctions & arguments

les fonctions sont accessible dans le HTML, de cette maniere :

[index.html](project2/index.html)

```html
  <button v-on:click="addCount(5)">Add 5</button>
  <input type="text" v-on:input="setName($event, 'second argument')" >
```

- `v-on:click` equivalent de onClick sur React.
- `v-on:input` equivalent de onChange sur React.

[app.js](project2/app.js)

```js
methods: {
    addCount(number) {
      this.counter = this.counter + number
    },
    setName(event, secondArgument) {
      this.name = event.target.value
      console.info(secondArgument)
    },
  },
```

les arguments son bien recupérés, **subtilité** pour `setName` qui recuperes 2 arguments, `event`, et `secondArgument`, par defaut Vue, recupere simplement event, de cette maniere :

```html
  <input type="text" v-on:input="setName" >
```

on lui passe `($event)` parce qu'ici il y a deux arguments
dans le cas ou les arguments recupérés dans le HTML sont natif (_event_), mais que d'autres arguments sont passés, il faut alors ajouter `$`.

```html
  <input type="text" v-on:input="setName" >
  <input type="text" v-on:input="setName($event)" >
```

sont tout les deux valide

## Modifyers

Vue nous permet d'ajouter des Modifyers après l'appel de la method, tels que `v-on:method.modifyer` :

```html
      <button v-on:click.right="reduceCount(5)">Remove 5</button>
      <form v-on:submit.prevent="submitForm">
```

**`v-on:click=`** peut etre remplacé par `@click=`
par exemple pour le click, il existe 3 modifyers :

- `.left`
- `.middle`
- `.right`

`.prevent` aura le meme effet que `event.preventDefault()`

## binds & models

**`v-model`** : _two ways binding_

```html
<input type="text" v-model="name" />
<!--     ###     ###     ###     -->
<input type="text" v-on:input="setName($event, 'second argument')" v-bind:value="name" />
```

`v-model="name"` est un raccourci pour :

- `v-on:input="setName($event, 'second argument')"`
- `v-bind:value="name"`

**`v-bind:value=`** peut etre remplacé par `:value=`

**_a construire_**

## Computed properties

[app.js](project2/app.js)
`computed:`

computed properties permet le _render_ de l'element uniqumement quand il est _pointé_

```html
      <p>Your Name : {{ fullname }}</p>
      <p>Your Name : {{ outputFullname() }}</p>
```

on voit que ```fullname``` est _pointé_, contraiment a ```outputFullname()``` qui est _appelé_, c'ets donc mieux pour l'optimisation, il agira un peu comme un _`useEffect(() => {}, [])`_, il observe le changement de cette donnée
