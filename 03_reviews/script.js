
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

//var
const img = document.querySelector('#imgPerson');
const namePerson = document.querySelector('#name');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

let currentItem = 0;

//buttons
const prevBtn = document.querySelector('#prevBtn');
const randomBtn = document.querySelector('#randomBtn');
const nextBtn = document.querySelector('#nextBtn');

//tentativa de fazer o uppercase sem consulta
const letterUppercase = (str) => {
    return str.replace(/\b\w/g, (math) => {
        return math.toUpperCase();
    });
};

//refatorando
const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    namePerson.textContent = letterUppercase(item.name);
    job.textContent = letterUppercase(item.job);
    info.textContent = item.text;
};

window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});

nextBtn.addEventListener('click', () => {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    };

    showPerson();
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * reviews.length);
};

randomBtn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    currentItem = randomNumber;

    showPerson();
});

prevBtn.addEventListener('click', () => {
    currentItem--;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson();
});
