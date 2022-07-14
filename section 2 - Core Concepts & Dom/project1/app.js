const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Bienvenu sur Vue',
      courseGoalB: "Tout s'est bien passé",
      title: 'My Course Goal',
      vueLink:
        'https://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts',
    };
  },
  methods: {
    outputGoal() {
      const randomNumer = Math.random();
      console.log(this);
      if (randomNumer < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
