const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const imgGalery = document.querySelector('.gallery');
let imgEll=0;
let imgArr=[];
images.map((item)=>
{
  imgEll=`<li class=wrapper><img class=itemsImg src="${item.url}" alt="${item.alt}"></li>`;
  imgArr.push(imgEll);
});


console.log(imgArr);
imgGalery.insertAdjacentHTML('beforeEnd', imgArr[0]);
imgGalery.insertAdjacentHTML('beforeEnd', imgArr[1]);
imgGalery.insertAdjacentHTML('beforeEnd', imgArr[2]);
//imgGalery.appendChild(...imgArr);