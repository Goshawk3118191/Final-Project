$(document).ready(function(){
  function randOrd(a,b) {
    var temp = parseInt(Math.random()*10);
    var isOddOrEven - temp%2;
    var isPosOrNeg - temp > 5 ? 1 : -1;
    return(isOddOrEven*isPosOrNeg);
  }

  var albums = new Array;
  albums[0]={album_name:"Outkast - Speakerboxxx/The Love Below", release_date: "2003", amount_sold: "11 million"};
  albums[1]={album_name:"Eminem - The Marshall Mathers LP", release_date:"2000", amount_sold: "10,8 million"};
  albums[2]={album_name:"MC Hammer: Please Hammer, Don't Hurt 'Em", release_date:"1990", amount_sold:"10.8 million"};
  albums[3]={album_name:"Eminem - The Eminem Show", release_date:"2002", amount_sold:"10.2 million"};
  albums[4]={album_name:"The Notorious B.I.G. - Life After Death", release_date:"1997", amount_sold:"10 million"};
  albums[5]={album_name:"2Pac - Greatest Hits", release_date:"1998", amount_sold:"10 million"};
  albums[6]={album_name:"2Pac - All Eyez On Me", release_date:"1996", amount_sold:"10 million"};
  albums[7]={album_name:"Beastie Boys - Licensed To Ill", release_date:"1986", amount_sold:"9 million"};
  albums[8]={album_name:"Will Smith - Big Willie Style", release_date:"1997", amount_sold:"9 million"};
  albums[9]={album_name:"50 Cent - Get Rich Or Die Trying", release_date:"2003", amount_sold:"8.5 million"};

  albums.sort(randOrd).toString());

  
});