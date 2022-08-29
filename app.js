const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let index = 0; index < 898; index++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const label = document.createElement('span');
    label.innerText = `#${index + 1}`;

    const newImage = document.createElement('img');
    newImage.src = `${baseURL}${index + 1}.png`

    pokemon.appendChild(newImage);
    pokemon.appendChild(label);

    container.appendChild(pokemon);
}