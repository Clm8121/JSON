let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


let jsonDatabase = [
  {
  "title" : "Artist #1",
  "picture_url" : "",
  "artistName" : "Joji",
  "dateOfBirth" : "September 18, 1992",
  "genre" : "Trip Hop / R&B Soul",
  "topSong" : "'Glimpse of Us'",
  "backgroundcolor" : "#B5E6DE",
  },
  {
  "title" : "Artist #2",
  "picture_url" : "",
  "artistName" : "DEAN (Kwon Hyuk)",
  "dateOfBirth" : "November 10, 1992",
  "genre" : "Alternative R&B / Soul",
  "topSong" : "'instagram'",
  "backgroundcolor" : "#FFD7C0",
  },
  {
  "title" : "Artist #3",
  "picture_url" : "",
  "artistName" : "Oliver Sykes 'Bring Me the Horizon'",
  "dateOfBirth" : "November 20, 1986",
  "genre" : "Meltalcore",
  "topSong" : "'Can You Feel My Heart'",
  "backgroundcolor" : "#DAA3FF",
  },
  {
  "title" : "Artist #4",
  "picture_url" : "",
  "artistName" : "Lil Peep",
  "dateOfBirth" : "November 1, 1996 - November 15, 2017",
  "genre" : "Rap / Trap / Emo Pop",
  "topSong" : "'Star Shopping'",
  "backgroundcolor" : "#FFB7E9",
  },
  {
  "title" : "Artist #5",
  "picture_url" : "",
  "artistName" : "Danny (Dan) Avidan 'Ninja Sex Party'",
  "dateOfBirth" : "March 14, 1979",
  "genre" : "Rock / Comedy",
  "topSong" : "'Danny Don't You Know'",
  "backgroundcolor" : "#C4DEFF",
  },
];

for (let i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);

  function createElement(incomingJSON) {
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundcolor = incomingJSON['backgroundcolor'];
    newContentElement.classList.add('contentDiv');

    let newContentTitle = document.createElement("TITLE");
    newContentTitle.classList.add("contentTitle");
    newContentTitle.src = incomingJSON["title"];
    newContentElement.appendChild(newContentTitle);

    let newContentImage = document.createElement("IMG");
    newContentImage.classList.add("contentImage");
    newContentImage.src = incomingJSON["picture_url"];
    newContentElement.appendChild(newContentImage);

    let newContentArtistName = document.createElement("NAME");
    newContentArtistName.classList.add("contentArtistName");
    newContentArtistName.src = incomingJSON["artistName"];
    newContentElement.appendChild(newContentArtistName);

    let newContentDOB = document.createElement("DOB");
    newContentDOB.classList.add("contentDOB");
    newContentDOB.src = incomingJSON["dateOfBirth"];
    newContentElement.appendChild(newContentDOB);

    let newContentGenre = document.createElement("genre");
    newContentGenre.classList.add("contentGenre");
    newContentGenre.src = incomingJSON["genre"];
    newContentElement.appendChild(newContentGenre);

    let newContentSong = document.createElement("Song");
    newContentSong.classList.add("contentSong");
    newContentSong.src = incomingJSON["topSong"];
    newContentElement.appendChild(newContentSong);
    }

  contentGridElement.appendChild(newContentElement);
  }
