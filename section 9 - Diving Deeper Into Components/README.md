# Vue.js

## Global Vs.Local Component.

quand un composant n'est utilisé q'une fois, il est preferable de l'importé depuis le composant qu'il l'utilise plutot que dans [main.js](src/main.js)

[App.vue](src/App.vue) :


```js
export default {
  components: {
    "the-header": TheHeader,
    BadgeList,
    UserInfo,
  }
}  
```

3 composants sont importés, dans [App.vue](src/App.vue), plutot que dans [main.js](src/main.js), ici nous avont deux syntax :

les composants en camelCase peuvent s'afficher : `<BadgeList />`, ceux en kebab-case :  `<the-header />` ou `<the-header></the-header>`

## Slots.

nous avons creer deux slots dans [Basecard.vue](./src/components/UI/BaseCard.vue)

```html
<template>
  <div>
    <header v-if="$slots.mainHeader">
      <slot name="mainHeader"> <!-- nomé -->
        <h2>the Default</h2>
      </slot>
    </header>
    <slot></slot> <!-- anonyme -->
  </div>
</template>
```

c'est deux slots progagent le style, il s'agit d'un composant, il est donc referencé dans [main.js](./src/main.js), 

- 
  ```js
  app.component('base-card', BaseCard)
  ```

un autre slot a été créé dans **[CourseGoals.vue](./src/components/CourseGoals.vue)**, celui-ci sert a creer une liste, et a l'afficher :

-
  ```html
  <template>
    <ul>
      <li v-for="goal in goals" :key="goal">
        <slot :goalItem="goal" anotherProp=" ... "></slot>
      </li>
    </ul>
  </template>
  ```

voici comment l'appeler dans **[App.vue](./src/App.vue)**

-
  ```html
      <CourseGoals #default="slotProps">
        <!-- <template #default="slotProps"> -->
        <h2>{{ slotProps.goalItem }}</h2>
        <p>{{ slotProps["anotherProp"] }}</p>
        <!-- </template> -->
      </CourseGoals>
  ```

il ya 2 types de _slots_, les 'anonymes', et les 'només'
ici on recuperer les deux props de [CourseGoals.vue](./src/components/CourseGoals.vue), `goalItem` & `anotherProp` via la propriété **`slotProps`**, c'est un autre moyen de propager les props, sans passer le `<script>`, ou comme vu plus haut, partager le style

## Teleport.

la balise teleport permet de deplacer des elements HTML dasn les noeuds du DOM,
ici on indique deplacer l'element a la racine de la balise `<body>`, plutot qu'inbriqué dans les noeuds HTML du projet

```html
  <teleport to="body">
```
