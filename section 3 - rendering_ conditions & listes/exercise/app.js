const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      isHidden: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    showTasks() {
      this.isHidden = !this.isHidden;
    },
  },
});

app.mount('#assignment');
