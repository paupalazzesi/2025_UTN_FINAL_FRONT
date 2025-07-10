import images from '../assets/images/images'

const contacts = [
  {
    id: 1,
    name: "Michael Scott",
    last_time_connected: "10:32",
    img: images.michael,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0001",
    description: "World's Best Boss ☕ | That's what she said!",
    messages: [
    {
      user: "USUARIO",
      time: "10:00",
      id: 1,
      text: "Pam, do you know why I’m the best boss?",
      status: "seen"
    },
    {
      user: "YO",
      time: "10:01",
      id: 2,
      text: "Because you say it the most?",
      status: "seen"
    },
    {
      user: "USUARIO",
      time: "10:02",
      id: 3,
      text: "No, because I have the World’s Best Boss mug. That counts, right?",
      status: "seen"
    },
    {
      user: "USUARIO",
      time: "10:03",
      id: 4,
      text: "Also, I’m like a lion. The king of the office jungle.",
      status: "seen"
    },
    {
      user: "YO",
      time: "10:04",
      id: 5,
      text: "More like a house cat who naps a lot.",
      status: "seen"
    },
    {
      user: "USUARIO",
      time: "10:05",
      id: 6,
      text: "House cat with a big attitude. That’s what she said.",
      status: "seen"
    }
    ],
  },
  {
    id: 2,
    name: "Jim Halpert",
    last_time_connected: "Online",
    img: images.jim,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0002",
    description: "Bears. Beets. Battlestar Galactica.",
    messages: [
    {
      user: "YO",
      time: "12:05",
      id: 1,
      text: "Hey 😊",
      status: "seen"
    },
    {
      user: "USUARIO",
      time: "12:05",
      id: 2,
      text: "Hey. Dwight just declared himself Fire Marshal again. 😐",
      status: "seen"
    },
    {
      user: "YO",
      time: "12:06",
      id: 3,
      text: "Please tell me there’s a badge. 😂",
      status: "seen"
    },
    {
      user: "USUARIO",
      time: "12:07",
      id: 4,
      text: "yup!",
      status: "seen"
    },
    {
      user: "YO",
      time: "12:08",
      id: 5,
      text: "You're the only reason I survive these days 😅",
      status: "seen"
    },
    {
      user: "USUARIO",
      time: "12:08",
      id: 6,
      text: "Back at you, Beesly. ❤️",
      status: "seen"
    }
    ],
  },  
  {
    id: 4,
    name: "Dwight Schrute",
    last_time_connected: "10:35",
    img: images.dwight,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0004",
    description: "Assistant to the Regional Manager. Beet farmer. 🥇",
    messages: [
      {
        user: "USUARIO",
        time: "08:17",
        id: 1,
        text: "Pam. Someone moved my stapler. I suspect sabotage.",
        status: "seen"
      },
      {
        user: "YO",
        time: "08:18",
        id: 2,
        text: "Good morning to you too, Dwight 😅",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "08:18",
        id: 3,
        text: "Stapler security is no laughing matter. Office supplies are the backbone of productivity.",
        status: "seen"
      },
      {
        user: "YO",
        time: "08:19",
        id: 4,
        text: "Have you checked under the copier? Again?",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "08:19",
        id: 5,
        text: "False. The copier is a decoy. Jim is involved. I can feel it.",
        status: "seen"
      },
      {
        user: "YO",
        time: "08:20",
        id: 6,
        text: "If you find it in Jell-O again I’m not cleaning it up this time.",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "08:21",
        id: 7,
        text: "Noted. But justice will be served. Schrute-style.",
        status: "seen"
      }
    ],
  },
  {
    id: 5,
    name: "Angela Martin",
    last_time_connected: "08:50",
    img: images.angela,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0005",
    description: "Cats. Cats. More cats. 🐱",
    messages: [
      {
        user: "USUARIO",
        time: "14:00",
        id: 1,
        text: "Pam, the office party needs to be organized perfectly. No nonsense, no chaos.",
        status: "seen"
      },
      {
        user: "YO",
        time: "14:02",
        id: 2,
        text: "Don’t worry, Angela. Everything will be under control.",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "14:03",
        id: 3,
        text: "Good. I expect no loud music and definitely no inappropriate costumes.",
        status: "seen"
      },
      {
        user: "YO",
        time: "14:04",
        id: 4,
        text: "👍",
        status: "non-received"
      }
    ],
  },
  {
    id: 6,
    name: "Kevin Malone",
    last_time_connected: "Yesterday",
    img: images.kevin,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0006",
    description: "I just want to sit on the beach and eat hot dogs. 🏖️🌭",
    messages: [
      {
        user: "USUARIO",
        time: "19:00",
        id: 1,
        text: 'Can I skip the meeting if I bring snacks? 🍪',
        status: "seen",
      },
    ],
  },
  {
    id: 7,
    name: "Stanley Hudson",
    last_time_connected: "08:00",
    img:  images.stanley,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0007",
    description: "Did I stutter? Only here for Pretzel Day.",
    messages: [
      {
        user: "YO",
        time: "15:12",
        id: 1,
        text: "Hey Stanley, did you get the email about the meeting?",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "15:13",
        id: 2,
        text: "Yes. And I’m ignoring it until 4:59 PM.",
        status: "seen"
      },
      {
        user: "YO",
        time: "15:14",
        id: 3,
        text: "Fair enough 😅",
        status: "seen"
      }
    ],
  },
  {
    id: 8,
    name: "Ryan Howard",
    last_time_connected: "10:00",
    img:  images.ryan,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0008",
    description: "Temp turned entrepreneur. Always hustling.",
    messages: [
      {
        user: "USUARIO",
        time: "11:22",
        id: 1,
        text: "Hey Pam, do we have a color printer?",
        status: "seen"
      },
      {
        user: "YO",
        time: "11:23",
        id: 2,
        text: "Yeah, but it only works when it wants to. Like Creed.",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "11:24",
        id: 3,
        text: "Cool. I need to print a pitch deck for a startup idea I might maybe pitch.",
        status: "seen"
      },
      {
        user: "YO",
        time: "11:24",
        id: 4,
        text: "So… definitely maybe?",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "11:25",
        id: 5,
        text: "Exactly. 🙌",
        status: "seen"
      }
    ],
  },
  {
    id: 9,
    name: "Kelly Kapoor",
    last_time_connected: "Online",
    img: images.kelly,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0009",
    description: "Fashion. Drama. Shopping. Repeat. ✨🛍️",
    messages: [
      {
        user: "USUARIO",
        time: "10:00",
        id: 1,
        text: 'Do you think I should go with the pink or the rose gold phone case? 💅',
        status: "seen",
      },
    ],
  },
  {
    id: 10,
    name: "Creed Bratton",
    last_time_connected: "04/05/25",
    img: images.creed,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0010",
    description: "Quality Assurance... and other things. 🕵️‍♂️",
    messages: [
      {
        user: "YO",
        time: "14:10",
        id: 1,
        text: "Hey Creed, did you finish the inventory list?",
        status: "seen"
      },
      {
        user: "USUARIO",
        time: "14:12",
        id: 2,
        text: "Inventory is like a box of chocolates. Sometimes you don’t know what you’re gonna get.",
        status: "seen"
      },
      {
        user: "YO",
        time: "14:13",
        id: 3,
        text: "Okay… I think I’ll check with Dwight instead. 😂",
        status: "not-seen"
      }
    ],
  },
];

// Add last_message property to each contact
contacts.forEach(contact => {
  const lastMsg = contact.messages[contact.messages.length - 1];
  contact.last_message = {
    user: lastMsg.user,
    id: lastMsg.id,
    text: lastMsg.text,
    status: lastMsg.status
  };
});

const mock_data = { contacts };

export default mock_data;
