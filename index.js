const speakers = [{
  id: 1,
  title: 'Didy Mike',
  img: './images/black-1.webp',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
  id: 2,
  title: 'Didy Mike',
  img: './images/black-2.jpeg',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
  id: 3,
  title: 'Didy Mike',
  img: './images/black-3.webp',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
  id: 4,
  title: 'Didy Mike',
  img: './images/black-3.webp',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
  id: 5,
  title: 'Didy Mike',
  img: './images/black-3.webp',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
  id: 6,
  title: 'Didy Mike',
  img: './images/black-3.webp',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

];

const Navicon = document.querySelector('.bar-div');
const speakerscontainer = document.querySelector('.speakers-section');

const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');

function generateWork() {
  let displayWork = speakers.map((work) => ` 
    
   
    <div class="speakers-container">
        <div class="speaker-one">
            <img src=${work.img} alt="speaker" class="speaker-img">
            <div class="speaker-info">
                <h4>${work.title}</h4>
                <p class="info-one">${work.backgound}</p>
                <hr>
                <p class="info-two">${work.desc}</p>
            </div>

        </div>
    </div>
   

    </div>`);
  displayWork = displayWork.join('');
  speakerscontainer.innerHTML = displayWork;
}
generateWork();

Navicon.addEventListener('click', () => {
  linksContainer.classList.add('active');
});

function closeMenu() {
  linksContainer.classList.remove('active');
}
closeIcon.addEventListener('click', () => {
  closeMenu();
});