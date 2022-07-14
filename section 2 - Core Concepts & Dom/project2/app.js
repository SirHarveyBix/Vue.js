const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: '',
    };
  },
  watch: {
    // name(value, oldValue) {
    //   if (value === '') this.fullname = '';
    //   this.fullname = `${value} second name`;
    // }, //si name (data()) change cette methode sera executée
    // lastName(value) {
    //   if (value === '') this.fullname = '';
    //   this.fullname = `${this.name} ${value}`;
    // },
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    // as a data properties
    fullname() {
      console.log('computed running');
      if (this.name === '') return '';
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    addCount(number) {
      this.counter = this.counter + number;
    },
    reduceCount(number) {
      this.counter = this.counter - number;
    },
    setName(event) {
      const name = event.target.value;
      this.name = name;
    },
    outputFullname() {
      console.log('methods running');
      if (this.name === '') return '';
      return this.name + ' Second Name';
    },
    submitForm() {
      alert('Submitted');
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
