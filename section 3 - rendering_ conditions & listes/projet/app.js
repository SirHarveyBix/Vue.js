const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: '',
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
  computed: {},
  watch: {},
});

app.mount('#user-goals');
