# Vue.js

## Props: parent > enfant

dans le composant parent, les props se passent comme il suit:

```html
    <friend-contact
      name="Manuel Lorenz"
      phone-number="01234 5678 991"
      email-address="manuel@localhost.me"
    ></friend-contact
```

la bonne pratique demande de passer les props en kebab-case, pour autant le camelCase, fonction aussi :

```html
    <friend-contact
      name="Manuel Lorenz"
      phoneNumber="01234 5678 991"
      emailAddress="manuel@localhost.me"
    ></friend-contact
```

le composant enfant, recuperera les prpos se de cette maniere :

```html
<template>
  <li>
    <h2>{{ name }}</h2>   <<<
    <button @click="toogleDetails()">
      {{ visibleDetails ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="visibleDetails">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>   <<<
      <li><strong>Email: </strong>{{ emailAddress }}</li>  <<<
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      visibleDetails: false,
    }
  },
```

il existe plusieurs moyen de travailler avec les props, du plus simple au plus complexe, en precisant les types 

[FriendContact.vue](./project%20-%20friend%20contact/src/components/FriendContact.vue)

```js
   props: { name: String, phoneNumber: String, emailAddress: String },
```

```js
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: { type: String, required: false, default: "0" },
    emailAddress: {
      type: String,
      required: true,
      validator: function (value) {
        return value.length > 1;
      },
    },
  },
```

- `type` : `String` `Number` `Boolean` `Array` `Object` `Date` `Function` `Symbol`
  - ils peuveunt aussi etre custom
- `required`: defini si la props est requise, 
- `default`: lui donne une valeur par defaut
- `validator`: fonction qui _valide_ la props (elle dpit retourner un Booleen)

pour un passage de props plus propre, il est preferebable, quand c'est posssible de boucler sur les elements:

```html
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :name="friend.name"
      :phoneNumber="friend.phone"
      :emailAddress="friend.email"
      :isFavorite="friend.favorite"
    ></friend-contact>
```

dans un boucle, il faut toujours mieux bind, les eletements entre eux, `:key="friend.id"` est obligatoire

## "Props": enfant < parent

il est posssible de changer les valeurs des props, mais ces valeurs doivent etre changées depuis le parent.

dans [FriendContact.vue](./project%20-%20friend%20contact/src/components/FriendContact.vue) on recoit `isFavorite`

ça valeur peut etre changée.
nous devont utiliser la fonction vue `$emit()`.
`$emit()` prend au moins un argument, le nom de la fonction, et ici l'id du _friend_ a modifier

```js
 toogleFavorite() {
      this.$emit("toogle-favorite", this.id);
    },
```

la fonction "`toogle-favorite`" doit d'abord etre envoyée par le parent, comme il suit.
[App.vue](src/App.vue) :

```html
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phoneNumber="friend.phone"
      :emailAddress="friend.email"
      :isFavorite="friend.favorite"
      @toogle-favorite="toogleFavoriteStatus"   <<<
    />
```


