const app = Vue.createApp({
  data() {
    return {
      result: 0,
      message: '',
    };
  },
  methods: {
    addNumber(inputNumber) {
      this.result = this.result + inputNumber;
    },
  },
  computed: {
    tooMuch() {
      if (this.result <= 37) {
        this.message = 'Not there yet';
      } else {
        this.message = 'Too much!';
      }
    },
  },
  watch: {
    result(value) {
      const that = this;
      setTimeout(() => {
        that.result = 0;
      }, 5000);
    },
  },
});

app.mount('#assignment');
