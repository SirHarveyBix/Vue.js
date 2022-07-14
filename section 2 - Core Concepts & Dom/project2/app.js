const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    addCount(number) {
      this.counter = this.counter + number;
    },
    reduceCount(number) {
      this.counter = this.counter - number;
    },
    setName(event, secondArgument) {
      const name = event.target.value;
      // if (name == 'e') {
      //   this.name = `${name} ${secondArgument}`;
      // }
      this.name = name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted');
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
