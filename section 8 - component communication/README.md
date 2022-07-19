# Vue.js

## Props

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
  props: ["name", "phoneNumber", "emailAddress"],   <<<
  data() {
    return {
      visibleDetails: false,
    }
  },
```
