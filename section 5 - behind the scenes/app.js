const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.info('#-> beforeCreate() <-#');
  },
  created() {
    console.info('#-> created() <-#');
  },
  beforeMount() {
    console.info('#-> beforeMount() <-#');
  },
  mounted() {
    console.info('#-> mounted() <-#');
  },
  beforeUpdate() {
    console.info('#-> beforeUpdate() <-#');
  },
  updated() {
    console.info('#-> updated() <-#');
  },
  beforeUnmount() {
    console.info('#-> beforeUnmount() <-#');
  },
  unmounted() {
    console.info('#-> unmounted() <-#');
  },
});

app.mount('#app');
setTimeout(() => {
  app.unmount('#app');
  console.info('time out : unmounted');
}, 3000);

// ---

const data = {
  message: 'Hello',
  longMessage: 'Someone',
};

const handler = {
  set(target, key, value) {
    console.log('target', target);
    console.log('key', key);
    console.log('value', value);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello !!';
