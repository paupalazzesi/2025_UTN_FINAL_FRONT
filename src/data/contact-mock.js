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
        user: "YO",
        time: "10:30",
        id: 1,
        text: "Hello!",
        status: "seen",
      },
      {
        user: "USUARIO",
        time: "10:30",
        id: 1,
        text: "ultimo mensaje",
        status: "seen",
      },
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
        user: "USUARIO",
        time: "10:31",
        id: 1,
        text: "Hey there!",
        status: "visto",
      },
    ],
  },
  {
    id: 3,
    name: "Pam Beesly",
    last_time_connected: "09:18",
    img: images.pam,
    unread_messages: 0,
    phoneNumber: "+1-570-555-0003",
    description: "Artist 🎨 | Receptionist | Dreamer",
    messages: [
      {
        user: "YO",
        time: "09:15",
        id: 1,
        text: "Hi!",
        status: "not-seen",
      },
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
        time: "10:34",
        id: 1,
        text: "Fact.",
        status: "seen",
      },
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
        user: "YO",
        time: "08:45",
        id: 1,
        text: "Meow.",
        status: "non-received",
      },
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
        text: "Why waste time say lot word",
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
        time: "08:00",
        id: 1,
        text: "Did I stutter?",
        status: "seen",
      },
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
        time: "10:00",
        id: 1,
        text: "Entrepreneur 💼📈",
        status: "seen",
      },
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
        user: "YO",
        time: "10:00",
        id: 1,
        text: "Shopping 🛍️✨",
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
        user: "USUARIO",
        time: "09:00",
        id: 1,
        text: "Quality Assurance?",
        status: "seen",
      },
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
