// Al usar la palabra reservada export podremos usar esta variable
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ["DC", "Marvel"];

// Indicamos que por defecto exportaremos heroes y owners
/*export default heroes;
export const owners = ["DC", "Marvel"];*/

// Indicamos las variables a exportar
export{
    heroes as default,
    owners
}