//Este archivo solo contiene la informacion de la app, en futuro lo vamos a eliminar
const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Pepe',
            last_time_connected: '14:19',
            img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 1,
            messages: [
                {
                    user: 'YO',
                    time: '23:10',
                    id: 1,
                    text: 'Hola que tal?',
                    status: 'visto'
                },
            ]
        },
        {
            id: 2,
            name: 'Lucia',
            last_time_connected: '15:19',
            img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 0,
            messages: [
                {
                    user: 'USUARIO',
                    time: '23:11',
                    id: 2,
                    text: 'Si, hoy aprendi estados',
                    status: 'visto'
                },
            ]
        },
        {
            id: 3,
            name: 'Carlos',
            last_time_connected: '17:19',
            img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 20,
            messages: [
                {
                    user: 'YO',
                    time: '23:12',
                    id: 3,
                    text: 'Eso que significa 🤓?',
                    status: 'no-visto'
                },
            ]
        }
    ]
}

export default mook_data
