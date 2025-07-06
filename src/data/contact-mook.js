import images from '../assets/images/images'

//Este archivo solo contiene la informacion de la app, en futuro lo vamos a eliminar
const mook_data = {
  contacts: [
    {
      id: 1,
      name: "Michael Scott",
      last_time_connected: "10:32",
      img: images.michael,
      last_message: {
        id: 1,
        text: "Hello!",
      },
      unread_messages: 0,
      messages: [
        {
          user: "YO",
          time: "10:30",
          id: 1,
          text: "Hello!",
          status: "visto",
        },
      ],
    },
    {
      id: 2,
      name: "Jim Halpert",
      last_time_connected: "Online",
      img: images.jim,
      last_message: {
        id: 1,
        text: "Hey there!",
      },
      unread_messages: 0,
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
      last_message: {
        id: 1,
        text: "Hi!",
      },
      unread_messages: 0,
      messages: [
        {
          user: "YO",
          time: "09:15",
          id: 1,
          text: "Hi!",
          status: "visto",
        },
      ],
    },
    {
      id: 4,
      name: "Dwight Schrute",
      last_time_connected: "10:35",
      img: images.dwight,
      last_message: {
        id: 1,
        text: "Fact.",
      },
      unread_messages: 0,
      messages: [
        {
          user: "USUARIO",
          time: "10:34",
          id: 1,
          text: "Fact.",
          status: "visto",
        },
      ],
    },
    {
      id: 5,
      name: "Angela Martin",
      last_time_connected: "08:50",
      img: images.angela,
      last_message: {
        id: 1,
        text: "Meow.",
      },
      unread_messages: 0,
      messages: [
        {
          user: "YO",
          time: "08:45",
          id: 1,
          text: "Meow.",
          status: "visto",
        },
      ],
    },
    {
      id: 6,
      name: "Kevin Malone",
      last_time_connected: "Yesterday",
      img: images.kevin,
      last_message: {
        id: 1,
        text: "Why waste time say lot word",
      },
      unread_messages: 0,
      messages: [
        {
          user: "USUARIO",
          time: "19:00",
          id: 1,
          text: "Why waste time say lot word",
          status: "visto",
        },
      ],
    },
    {
      id: 7,
      name: "Stanley Hudson",
      last_time_connected: "08:00",
      img:  images.stanley,
      last_message: {
        id: 1,
        text: "Did I stutter?",
      },
      unread_messages: 0,
      messages: [
        {
          user: "YO",
          time: "08:00",
          id: 1,
          text: "Did I stutter?",
          status: "visto",
        },
      ],
    },
    {
      id: 8,
      name: "Ryan Howard",
      last_time_connected: "10:00",
      img:  images.ryan,
      last_message: {
        id: 1,
        text: "Entrepreneur 💼📈",
      },
      unread_messages: 0,
      messages: [
        {
          user: "USUARIO",
          time: "10:00",
          id: 1,
          text: "Entrepreneur 💼📈",
          status: "visto",
        },
      ],
    },
    {
      id: 9,
      name: "Kelly Kapoor",
      last_time_connected: "Online",
      img: images.kelly,
      last_message: {
        id: 1,
        text: "Shopping 🛍️✨",
      },
      unread_messages: 0,
      messages: [
        {
          user: "YO",
          time: "10:00",
          id: 1,
          text: "Shopping 🛍️✨",
          status: "visto",
        },
      ],
    },
    {
      id: 10,
      name: "Creed Bratton",
      last_time_connected: "04/05/25",
      img: images.creed,
      last_message: {
        id: 1,
        text: "Quality Assurance?",
      },
      unread_messages: 0,
      messages: [
        {
          user: "USUARIO",
          time: "09:00",
          id: 1,
          text: "Quality Assurance?",
          status: "visto",
        },
      ],
    },
  ],
};

export default mook_data;
