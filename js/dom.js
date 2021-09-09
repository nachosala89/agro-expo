const speakers = [
  {
    image: './images/speakers/person1.jpeg',
    name: 'Pedro Sanchez',
    job: 'Veterinary Medicine Professor at the University of La Plata',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    image: './images/speakers/person2.jpeg',
    name: 'Jimena Gonzalez',
    job: 'Agricultural Engineering Professor at the University of Buenos Aires',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    image: './images/speakers/person3.jpeg',
    name: 'Claudia Rodriguez',
    job: 'Researcher in CONICET',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    image: './images/speakers/person4.jpeg',
    name: 'Jorge Gomez',
    job: 'Researcher in INTA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    image: './images/speakers/person5.jpeg',
    name: 'Osvaldo Gimenez',
    job: 'CEO of Agrosur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    image: './images/speakers/person6.jpeg',
    name: 'Juan Perez',
    job: 'Industrial Disegner at Techint',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  }
];

const container = document.querySelector('#main-speakers');
for (let i = 0; i < speakers.length; i += 1) {
  if (i > 0 && i % 2 === 0) {
    const div2 = document.createElement('div');
    div2.classList.add('w-100');
    container.appendChild(div2);
  }

  const article = document.createElement('article');
  article.classList.add('col-lg-5', 'd-flex', 'align-items-start');
  const image = document.createElement('img');
  image.setAttribute('src', speakers[i].image);
  image.setAttribute('alt', 'Speaker Photo');
  article.appendChild(image);

  const div = document.createElement('div');

  const name = document.createElement('h3');
  name.textContent = speakers[i].name;
  div.appendChild(name);

  const job = document.createElement('h4');
  job.textContent = speakers[i].job;
  div.appendChild(job);

  const hr = document.createElement('hr');
  div.appendChild(hr);

  const description = document.createElement('p');
  description.textContent = speakers[i].description;
  div.appendChild(description);

  article.appendChild(div);
  container.appendChild(article);
}