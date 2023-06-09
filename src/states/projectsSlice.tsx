import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface Project {
    value: {
        id: number,
        title: string,
        techs: string[],
        img: string,
        code: string,
        live: string,
        desc: string,
        descPt: string,
    }[]
}

const initialState: Project = {
    value: [
        {
            id: 1,
            title: 'Coint Co.',
            techs: ["JavaScript","HTML","CSS"],
            img: 'projects-images/cointco.png',
            code: '',
            live: 'https://silver-kataifi-9c1b93.netlify.app',
            desc: 'Website designed for Coint Co, an ecommerce focused in collectible precious metal coin that would be backed by an electronic store of value, Bitcoin.',
            descPt: 'Website criado para Coint Co, um ecommerce focado em moedas colecionáfeis feitas em metal precioso que possui um valor eletrônico, o Bitcoin.',
        },
        {
            id: 2,
            title: 'Local Prose',
            techs: ["JavaScript","HTML","CSS"],
            img: 'projects-images/localprose.png',
            code: '',
            live: 'www.localprose.com',
            desc: 'Local Prose is an android App that informs you and let you inform others about what\'s happening around. In this project i built a responsive landing page in order to showcase all the app functionalities.',
            descPt: 'Local Prose é um aplicativo para android que informa você e permite que você informe aos outros a cerca do que está acontecendo ao seu redor. Neste projeto eu criei uma landing page responsiva que mostra todas as funcionalidades do app.',
        },
        {
            id: 3,
            title: 'MovLab',
            techs: ["UI Design","Figma"],
            img: 'projects-images/movlab.png',
            code: '',
            live: '',
            desc: 'MobLab is a concept design of an ecommerce focused in furnitures. The idea of the project was to create a clean, modern and mobile-friendly user inteface.',
            descPt: 'MovLab é um design concept de um ecommerce focado em mobílias. A ideia do projeto era criar uma interface do usuário limpa, moderna e responsiva.',
        },
        {
            id: 4,
            title: 'Bizout',
            techs: ["UI Design","Figma"],
            img: 'projects-images/bizout.png',
            code: '',
            live: '',
            desc: 'Landing Page design for Bizout, an website that helps students with free access to hundreds of test questions. The project\'s goal was to design a user-friendly and responsive home page.',
            descPt: 'Design de landing page para Bizout, um website que ajuda estudantes com acesso grátis a centenas de questões de vestibulares. O objetivo do projeto era criar uma página inicial responsiva e amigável ao usuário.',
        },
        {
            id: 5,
            title: 'Uno Charge',
            techs: ["JavaScript","HTML","CSS"],
            img: 'projects-images/unocharge.png',
            code: '',
            live: 'https://monumental-tapioca-2dda10.netlify.app',
            desc: 'Uno Charge is a company that rents power bank stations for bars and restaurants in portugal. The project\'s goal was do develope a modern landing page focused in showcase their main product, the power bank station.',
            descPt: 'Uno Charge é uma empresa que aluga estações de power banks para bares e restaurantes em portugal. O objetivo do projeto era desenvolver uma landing page moderna focada em mostrar seu produto principal, a estação de power bank.',
        },
        {
            id: 6,
            title: 'KPO Decor',
            techs: ["UI Design","Figma"],
            img: 'projects-images/kpodecor.png',
            code: '',
            live: '',
            desc: 'The project\'s goal was to create a modern and beautiful design concept for an ecommerce focused in interior design.',
            descPt: 'O objetivo deste projeto era criar um design concept moderno e bonito para uma loja online focada em design de interiores.',
        },
    ]
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects: ((state, action: PayloadAction<Project['value']>) => {
            state.value = action.payload
        })
    },
})

export const { setProjects } = projectsSlice.actions
export default projectsSlice.reducer