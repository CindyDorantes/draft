const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.mobile-menu');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const closing = document.querySelector('.close');

closing.addEventListener('click', () => {
  menu.classList.remove('active');
});

const closingItem = document.querySelector('.mobile-nav');

closingItem.addEventListener('click', () => {
  menu.classList.remove('active');
});

// HERE BEGINS THE WORK CARDS //

// Create the array //

const projects = [
  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'See project',
    imgProject: './Images/snapshoot_portfolio.png',
    description: 'this is the description',
    linkVersion: '#',
    linkSource: '#'
  },
  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'See project',
    imgProject: './Images/snapshoot_portfolio.png',
    description: 'this is the description',
    linkVersion: '#',
    linkSource: '#'
  },
  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'See project',
    imgProject: './Images/snapshoot_portfolio.png',
    description: 'this is the description',
    linkVersion: '#',
    linkSource: '#'
  }
];

// ----- HERE IS THE LOOP TO CREATE ALL CARDS -------- //

for (let i = 0; i < projects.length; i++) {
  // here we are assigning the parent container to a variable //
  const sectionWorks = document.querySelector(".works");

  const div01 = document.createElement('div');
  div01.classList.add("work-item");
  //div01.classList.add("wi-01");
  sectionWorks.appendChild(div01);


  const div02 = document.createElement('div');
  div02.classList.add("work-image");
  div01.appendChild(div02);

  const div03 = document.createElement('div');
  div03.classList.add("work-content");
  div01.appendChild(div03);

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add("work-title");
  projectTitle.textContent = projects[i].title;  // example about how to call the object property, from the array index i //
  div03.appendChild(projectTitle);

  const languages = document.createElement('ul');
  languages.classList.add("cards");
  div03.appendChild(languages);

  // loop to create each language li element//
  for (let j = 0; j < (projects[i].languages.length); j++) {
    const li01 = document.createElement('li');
    li01.textContent = projects[i].languages[j];
    languages.appendChild(li01);
  };

  const seeProject = document.createElement('button');
  seeProject.classList.add("see-project");
  seeProject.type = "button";
  seeProject.textContent = projects[i].buttonName; // example about how to call the object property //
  div03.appendChild(seeProject);
};


