<template>
  <header>
    <h1>My Friends</h1>
  </header>
  <new-friend @add-contact="addContact"></new-friend>
  <ul>
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phoneNumber="friend.phone"
      :emailAddress="friend.email"
      :isFavorite="friend.favorite"
      @toogle-favorite="toogleFavoriteStatus"
      @delete="deleteContact"
    />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.me",
          favorite: true,
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.me",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    toogleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.favorite = !identifiedFriend.favorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        favorite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId); // filtre friends creer un nouveau [] sans l'element
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  width: 90%;
  max-width: 40rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 10px;
  background-color: #58004d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  text-align: center;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  width: 90%;
  max-width: 40rem;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
}

#app h2 {
  margin: 0 0 1rem 0;
  border-bottom: 4px solid #ccc;
  font-size: 2rem;
  color: #58004d;
}

#app button {
  padding: 0.05rem 1rem;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  font: inherit;
  color: white;
  cursor: pointer;
}

#app button:hover,
#app button:active {
  border-color: #ec3169;
  background-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>