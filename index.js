const speakers=[{
    id: 1,
  title: 'Didy Mike',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
    id: 2,
  title: 'Didy Mike',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
    id: 3,
  title: 'Didy Mike',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},
{
    id: 4,
  title: 'Didy Mike',
  backgound: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

]


const speakerscontainer = document.querySelector('.speakers-section')
const Navicon = document.querySelector('.bar-div');

const linksContainer = document.querySelector('.links-container');
console.log(linksContainer)
const closeIcon = document.querySelector('.close-icon');
const secondNavcon = document.querySelector('.second-nav');

function generateWork() {
    let displayWork = speakers.map((work) =>
     ` 
    
   
    <div class="speakers-container">
        <div class="speaker-one">
            <img src="./images/person3.jpeg" alt="speaker" class="speaker-img">
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
    console.log(displayWork)
    speakerscontainer.innerHTML = displayWork;
  }
  generateWork();

  
Navicon.addEventListener('click', () => {
    console.log('clicked')
    linksContainer.classList.add('active');
  });
  
  function closeMenu() {
    linksContainer.classList.remove('active');
  }
  closeIcon.addEventListener('click', () => {
    closeMenu();
  });