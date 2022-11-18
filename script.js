let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


let jsonDatabase = [
  {
  "title" : "Artist #1",
  "picture_url" : "https://impact89fm.org/wp-content/uploads/2018/10/joji.jpg",
  "artistName" : "Joji",
  "dateOfBirth" : "September 18, 1992",
  "genre" : "Trip Hop / R&B Soul",
  "topSong" : "'Glimpse of Us'",
  "backgroundcolor" : "#B5E6DE",
  },
  {
  "title" : "Artist #2",
  "picture_url" : "https://image.bugsm.co.kr/artist/images/1000/802413/80241323.jpg",
  "artistName" : "DEAN",
  "dateOfBirth" : "November 10, 1992",
  "genre" : "Alternative R&B / Soul",
  "topSong" : "'instagram'",
  "backgroundcolor" : "#FFD7C0",
  },
  {
  "title" : "Artist #3",
  "picture_url" : "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2022/08/2JT7DAX-1024x683.jpg",
  "artistName" : "Oliver Sykes 'Bring Me the Horizon'",
  "dateOfBirth" : "November 20, 1986",
  "genre" : "Meltalcore",
  "topSong" : "'Can You Feel My Heart'",
  "backgroundcolor" : "#DAA3FF",
  },
  {
  "title" : "Artist #4",
  "picture_url" : "https://i.guim.co.uk/img/media/cdcb28691f72ece200542f1961985c12ab9a988c/0_74_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f3d0f9e708c8258f67a7144f6aa173d5",
  "artistName" : "Lil Peep",
  "dateOfBirth" : "November 1, 1996 - November 15, 2017",
  "genre" : "Rap / Trap / Emo Pop",
  "topSong" : "'Star Shopping'",
  "backgroundcolor" : "#FFB7E9",
  },
  {
  "title" : "Artist #5",
  "picture_url" : "https://i.pinimg.com/originals/84/60/05/8460055c9296323354e8164664bc1ba7.jpg",
  "artistName" : "Danny (Dan) Avidan 'Ninja Sex Party'",
  "dateOfBirth" : "March 14, 1979",
  "genre" : "Rock / Comedy",
  "topSong" : "'Danny Don't You Know'",
  "backgroundcolor" : "#C4DEFF",
  },
];

for (let i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
  }

  function createElement(incomingJSON) {
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON['backgroundcolor'];
    newContentElement.classList.add('contentDiv');

    let newContentTitle = document.createElement("H2");
    newContentTitle.classList.add("contentTitle");
    newContentTitle.innerText = incomingJSON["title"];
    newContentElement.appendChild(newContentTitle);

    let newContentImage = document.createElement("IMG");
    newContentImage.classList.add("contentImage");
    newContentImage.src = incomingJSON["picture_url"];
    newContentElement.appendChild(newContentImage);

    let newContentArtistName = document.createElement("H2");
    newContentArtistName.classList.add("contentArtistName");
    newContentArtistName.innerText = incomingJSON["artistName"];
    newContentElement.appendChild(newContentArtistName);

    let newContentDOB = document.createElement("H2");
    newContentDOB.classList.add("contentDOB");
    newContentDOB.innerText = incomingJSON["dateOfBirth"];
    newContentElement.appendChild(newContentDOB);

    let newContentGenre = document.createElement("H2");
    newContentGenre.classList.add("contentGenre");
    newContentGenre.innerText = incomingJSON["genre"];
    newContentElement.appendChild(newContentGenre);

    let newContentSong = document.createElement("H2");
    newContentSong.classList.add("contentSong");
    newContentSong.innerText = incomingJSON["topSong"];
    newContentElement.appendChild(newContentSong);

    contentGridElement.appendChild(newContentElement);
    }
