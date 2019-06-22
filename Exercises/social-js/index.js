var me = {
  name: "Royden",
  age: 25,
  likes: ["Anime", "Music", "Games", "Sports", "Travel"],
  friends: [
    {
      name: "Leon",
      age: 21,
      likes: ["Wrestling", "Art", "Graphic Design", "Photography"],
      friends: [
        {
          name: "Kamarul",
          age: 21,
          likes: ["Beer", "Rock music", "Motorbikes", "Trolling"],
          friends: [
            {
              name: "Shawn",
              age: 20,
              likes: ["Motorbikes", "Skateboards", "Cars"]
            }
          ]
        },
        {
          name: "Hyris",
          age: 22,
          likes: ["Arcade", "Business", "Money", "Cars"]
        },
        {
          name: "Ting",
          age: 24,
          likes: ["Dance", "Art", "Chocolates"]
        }
      ]
    },
    {
      name: "Chua",
      age: 28,
      likes: ["Music", "Piano", "Tea", "Travel"]
    },
    {
      name: "Han",
      age: 27,
      likes: ["Sports", "Cards", "Games", "Gym"],
      friends: [
        {
          name: "Fiz",
          age: 29,
          likes: ["Gym", "Sports", "Cats"]
        }
      ]
    },
    {
      name: "Adrian",
      age: 30,
      likes: ["Computers", "Code", "Science"]
    }
  ],
  addNewFriend: function(newName, newAge) {
    this.friends.push({
      name: newName,
      age: newAge
    });
    alert(`Added $(newName) successfully!`);
  }
};

// addNewFriend(dude, 20);
