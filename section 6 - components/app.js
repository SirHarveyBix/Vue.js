const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.me',
        },
        {
          id: 'Julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.me',
        },
      ],
    };
  },
  computed: {},
  watch: {},
});

// 1. unique ID qui ne doit pas classé avec built in HTML
// 2. config
app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails()">
      {{ visibleDetails ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="visibleDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
</li>
  `,
  data() {
    return {
      visibleDetails: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.me',
      },
    };
  },
  methods: {
    toogleDetails() {
      this.visibleDetails = !this.visibleDetails;
    },
  },
});

app.mount('#app');
