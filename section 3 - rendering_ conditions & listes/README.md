# Vue.js

## Conditions

il extister plusieurs moye, de faire des condition :

- `v-if` : meme logique qu'en JS
  - `v-else-if`
  - `v-else`
- `v-show` : celui ci utilise le css, et va desactiver le champs, la balise en question sera toujours dans le DOM, mais visible par l'utilisateur.
  
```html
<p v-if="goals.length === 0">Rien a afficher</p>
<p v-else> des données existent</p>
<p v-else-if="goals.length > 0">pareil</p>
<p v-show="goals.length > 0">ce champ existe dans les deux cad le DOM</p>
```

## Boucles

le seul moyen c'ets d'utiliser :

- `v-for=`

```html  
<li
  :key="goal"
  v-for="(goal, index) in goals"
  @click="removeGoal(index)"
>
  <p>{{ goal }}</p>
</li>
```

une balise sur laquelle on boucle a besoin de `v-bind:key='id'`
en fonction de l'element sur lequel on boucle on peu recupèrer diferents elements

on pseudo code ça donne :

- trouve goal dans goals, et affiche `{{ goal }}`

```html  
<li v-for="(value, key, index) in {name: 'Gui', age: '33'}">
  {{ key }} : {{ value }}
</li>
```
