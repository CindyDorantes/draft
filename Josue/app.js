const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const cross = document.querySelector('.close');

cross.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

const closeMenu = document.querySelector('.navClose');

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

const sectionProjects = document.querySelector('.section-project');

// create an array //

const projects = [
  {
    image: './images/Snapshoot.png',
    title: 'tonic',
    articles: ['CANOPY', 'Back End Dev', '2015'],
    Ptext: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    container: 'container-2',
    imageHeader: 'image-header',
    column: 'col',
    titleHeader: 'title',
    ulList: 'list',
    text: 'text',
    btProject: 'buttom',
    btHtml: 'html',
    btCss: 'css',
    btJs: 'javaScript',
    button: 'See Project',
  },

  {
    image: './images/Snapshoot2.png',
    title: 'Multi-post Stories',
    articles: ['FACEBOOK', 'Full stack dev', '2015'],
    Ptext: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    container: 'container-3',
    imageHeader: 'image-header2',
    column: 'col-2',
    titleHeader: 'title-2',
    ulList: 'list-2',
    text: 'text-2',
    btProject: 'buttom-2',
    btHtml: 'html',
    btCss: 'css',
    btJs: 'javaScript',
    button: 'See Project',
  },

  {
    image: './images/Snapshoot3.png',
    title: 'Facebook 360',
    articles: ['FACEBOOK', 'Full stack dev', '2015'],
    Ptext: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'css', 'javascript'],
    container: 'container-4',
    imageHeader: 'image-header3',
    column: 'col-3',
    titleHeader: 'title-3',
    ulList: 'list-3',
    text: 'text-3',
    btProject: 'buttom-3',
    btHtml: 'html',
    btCss: 'css',
    btJs: 'javaScript',
    button: 'See Project',
  },

  {
    image: './images/Snapshoot4.png',
    title: 'Uber Navigation',
    articles: ['UBER', 'Lead Developer', '2018'],
    Ptext: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'css', 'javascript'],
    container: 'container-5',
    imageHeader: 'image-header4',
    column: 'col-4',
    titleHeader: 'title-4',
    ulList: 'list-4',
    text: 'text-4',
    btProject: 'buttom-4',
    btHtml: 'html',
    btCss: 'css',
    btJs: 'javaScript',
    button: 'See Project',
  },
];

// create the project cards//

for (let i = 0; i < projects.length; i += 1) {
  const container = document.createElement('div');
  container.classList.add(projects[i].container);
  sectionProjects.appendChild(container);

  const imageHeader = document.createElement('h2');
  imageHeader.classList.add(projects[i].imageHeader);
  container.appendChild(imageHeader);

  const imgIntro = document.createElement('img');
  imgIntro.classList.add('img');
  imgIntro.src = projects[i].image;
  imgIntro.alt = 'Snapshoot';
  imageHeader.appendChild(imgIntro);

  const column = document.createElement('div');
  column.classList.add(projects[i].column);
  container.appendChild(column);

  const titleHeader = document.createElement('div');
  titleHeader.classList.add(projects[i].titleHeader);
  column.appendChild(titleHeader);

  const title = document.createElement('h2');
  title.textContent = projects[i].title;
  titleHeader.appendChild(title);

  const ulList = document.createElement('ul');
  ulList.classList.add(projects[i].ulList);
  titleHeader.appendChild(ulList);

  const listItem1 = document.createElement('li');
  listItem1.classList.add('canopy');
  listItem1.textContent = projects[i].articles['0'];
  ulList.appendChild(listItem1);

  const listItem2 = document.createElement('li');
  listItem2.classList.add('back-end');
  listItem2.textContent = projects[i].articles['1'];
  ulList.appendChild(listItem2);

  const listItem3 = document.createElement('li');
  listItem3.classList.add('num');
  listItem3.textContent = projects[i].articles['2'];
  ulList.appendChild(listItem3);

  const text = document.createElement('div');
  text.classList.add(projects[i].text);
  column.appendChild(text);

  const pText = document.createElement('p');
  pText.textContent = projects[i].Ptext;
  text.appendChild(pText);

  const btProject = document.createElement('form');
  btProject.classList.add(projects[i].btProject);
  column.appendChild(btProject);

  const btHtml = document.createElement('button');
  btHtml.type = 'button';
  btHtml.classList.add('html');
  btHtml.textContent = 'html';
  btProject.appendChild(btHtml);

  const btCss = document.createElement('button');
  btCss.type = 'button';
  btCss.classList.add('css');
  btCss.textContent = 'css';
  btProject.appendChild(btCss);

  const btJs = document.createElement('button');
  btJs.type = 'button';
  btJs.classList.add('javaScript');
  btJs.textContent = 'javascript';
  btProject.appendChild(btJs);

  const accessDiv = document.createElement('div');
  column.appendChild(accessDiv);

  const seeProject = document.createElement('input');
  seeProject.type = 'button';
  seeProject.name = i;
  seeProject.value = 'See Project';
  accessDiv.appendChild(seeProject);

  seeProject.addEventListener('click', () => {
    
    // create mobile popup window//
    const wrapPop = document.createElement('div');
    wrapPop.classList.add('wrap');
    sectionProjects.appendChild(wrapPop);
    const popContainer = document.createElement('div');
    popContainer.classList.add('pop-window');
    wrapPop.appendChild(popContainer);
    // Title and closing cross //
    const headerPop = document.createElement('div');
    headerPop.classList.add('pop-header');
    popContainer.appendChild(headerPop);

    const popTitle = document.createElement('h2');
    popTitle.classList.add('pop-title');
    popTitle.textContent = projects[i].title;
    headerPop.appendChild(popTitle);

    const closePop = document.createElement('button');
    closePop.classList.add('close-cross');
    closePop.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    headerPop.appendChild(closePop);
    // Tags: client, role, year
    const popList = document.createElement('ul');
    popList.classList.add('list');
    popContainer.appendChild(popList);

    const elemt1 = document.createElement('li');
    elemt1.classList.add('canopy');
    elemt1.textContent = projects[i].articles[0];
    popList.appendChild(elemt1);

    const elemt2 = document.createElement('li');
    elemt2.classList.add('back-end');
    elemt2.textContent = projects[i].articles[1];
    popList.appendChild(elemt2);

    const elemt3 = document.createElement('li');
    elemt3.classList.add('num');
    elemt3.textContent = projects[i].articles[2];
    popList.appendChild(elemt3);

    // Project image //
    const imgPop = document.createElement('img');
    imgPop.classList.add('img-pop');
    imgPop.src = projects[i].image;
    imgPop.alt = 'Snaoshoot';
    popContainer.appendChild(imgPop);

    // Media query container//

    const mediaQuery = document.createElement('div');
    mediaQuery.classList.add('query-container');
    popContainer.appendChild(mediaQuery);

    // Project descripcion //
    const textPop = document.createElement('div');
    textPop.classList.add('information');
    mediaQuery.appendChild(textPop);

    const pPop = document.createElement('p');
    pPop.textContent = projects[i].Ptext;
    textPop.appendChild(pPop);

    // media query sub-container //
    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    mediaQuery.appendChild(subContainer);

    // Languages cards //
    const formPop = document.createElement('form');
    formPop.classList.add('buttom-pop');
    subContainer.appendChild(formPop);

    const buttonPop = document.createElement('button');
    buttonPop.classList.add('html');
    buttonPop.type = 'button';
    buttonPop.textContent = 'html';
    formPop.appendChild(buttonPop);

    const buttonPop2 = document.createElement('button');
    buttonPop2.classList.add('css');
    buttonPop2.type = 'button';
    buttonPop2.textContent = 'css';
    formPop.appendChild(buttonPop2);

    const buttonPop3 = document.createElement('button');
    buttonPop3.classList.add('javaScript');
    buttonPop3.type = 'button';
    buttonPop3.textContent = 'javaScript';
    formPop.appendChild(buttonPop3);

    // Link buttons //
    const divButton = document.createElement('div');
    divButton.classList.add('popbutton');
    subContainer.appendChild(divButton);

    const liveButton = document.createElement('button');
    liveButton.classList.add('live');
    liveButton.type = 'button';
    liveButton.innerHTML = 'See live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
    divButton.appendChild(liveButton);

    const liveButton2 = document.createElement('button');
    liveButton2.classList.add('live');
    liveButton2.type = 'button';
    liveButton2.innerHTML = 'See Source <i class="fa-brands fa-github"></i>';
    divButton.appendChild(liveButton2);

    wrapPop.classList.add('active');

    closePop.addEventListener('click', () => {
      wrapPop.classList.remove('active');
    });
  });
}

// create events //
