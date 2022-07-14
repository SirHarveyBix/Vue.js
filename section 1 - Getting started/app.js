Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '', // <input v-model="enteredValue" />
    };
  },
  methods: {
    addGoal() {
      // <button v-on:click="addGoal">
      this.goals.push(this.enteredValue); // <li v-for="goal in goals">{{ goal }}</li>
      this.enteredValue = '';
    },
  },
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
