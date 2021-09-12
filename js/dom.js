const speakers = [
  {
    image: './images/speakers/person1.jpeg',
    name: 'Pedro Sanchez',
    job: 'Veterinary Medicine Professor at the University of La Plata',
    description: 'Mr. Sanchez comes to present the latest discoveries in the field of artificial insemination, from his course in the UNLP.',
  },
  {
    image: './images/speakers/person2.jpeg',
    name: 'Jimena Gonzalez',
    job: 'Agricultural Engineering Professor at the University of Buenos Aires',
    description: 'After spending more than 20 years developing the Voisin farming technic, Ms. Gonzalez will share us her main tips for a perfect cultivation.',
  },
  {
    image: './images/speakers/person3.jpeg',
    name: 'Claudia Rodriguez',
    job: 'Researcher in CONICET',
    description: 'The alternative power sources are here to stay. The Engineer Rodriguez will show us the main alternatives to replace the tradicional sources in rural zones.',
  },
  {
    image: './images/speakers/person4.jpeg',
    name: 'Jorge Gomez',
    job: 'Researcher in INTA',
    description: 'Mr. Gomez will present us his last published book "Good seeds, good harvests", and will explain us why the first step into have the best cultivation is to have the best genetics in your seeds.',
  },
  {
    image: './images/speakers/person5.jpeg',
    name: 'Osvaldo Gimenez',
    job: 'CEO of Agrosur',
    description: 'From being a little rural hardware store to be the main distributor in the province, Mr. Gimenez will share us his secrets for his success in the market.',
  },
  {
    image: './images/speakers/person6.jpeg',
    name: 'Juan Perez',
    job: 'Industrial Designer at Techint',
    description: 'The design of the products we want to sell is an important part to achieve our selling goals. And the rural products are not the exception. Mr. Perez will tell us about his experience working in a big company like Techint.',
  },
];

const container = document.querySelector('#main-speakers');
for (let i = 0; i < speakers.length; i += 1) {
  if (i > 0 && i % 2 === 0) {
    const div2 = document.createElement('div');
    div2.classList.add('w-100');
    container.appendChild(div2);
  }

  const article = document.createElement('article');
  article.classList.add('col-lg-5', 'd-flex', 'align-items-start', 'py-2');
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