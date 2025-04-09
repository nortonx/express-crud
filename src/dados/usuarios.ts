import type { Usuario } from "../model/index.ts";

// a senha de todos os usuários é a
export const usuarios: Usuario[] = [
    {
        email: 'ana@mail.com',
        senha: '$2b$05$yMsJGWUWbv2RwMvzawQcZelXIAFMtDYQwjmUoYMZghoeVke4o2UH6'
    },
    {
        email: 'ze@mail.com',
        senha: '$2b$05$vwdP9wDLxVcuzPqk2YrP6ejp/EeN/ZNi9LAQ9YdKkYngxogiv6S8.'
    },
    {
        email: 'joao@mail.com',
        senha: '$2b$05$3ZXul19TR.KugssctN7UV.xU1KACk.3l8S9z9qnwDn4R41vKrDmOe'
    }
]