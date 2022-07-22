# Vue.js

## Global Vs.Local Component

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
