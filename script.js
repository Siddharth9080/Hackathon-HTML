let movieArr = [
    {
        name: "Top Gun: Maverick" ,
        year: "2022",
        coverImage: `url(TopGunMaverickcopy.jpg)`,
    },
    {
        name: "Top Gun" ,
        year: "1986",
        coverImage: `url(TopGun.jpg)`,
    },
    {
        name: "Jurrasic Park Series" ,
        year: "1993-present",
        coverImage: `url(JurrasicPark.jpeg)`,
    },
    {
        name: "Baby's Day Out" ,
        year: "1994",
        coverImage: `url(BabysDayOot.jpeg)`,
    },
    {
        name: "Fast and Furious: Tokyo Drift" ,
        year: "2006",
        coverImage: `url(TokyoDrift.jpeg)`,
    },
    {
        name: "Interstellar" ,
        year: "2014",
        coverImage: `url(Interstellar.jpeg)`,
    },
    {
        name: "Speed" ,
        year: "1994",
        coverImage: `url(Speed.jpeg)`,
    },
    {
        name: "Fast X" ,
        year: "2023",
        coverImage: `url(FastX.jpeg)`,
    }
]
function Thumbnail (){
    let movie = Math.ceil(Math.floor(Math.random()*8));
    let name = movieArr[movie].name;
    let year = movieArr[movie].year;
    document.getElementById("TopTitle").innerHTML= name;
    document.getElementById("TopYear").innerHTML= year;
    document.getElementById("TopImage")
    document.getElementById("TopImage").style.backgroundImage=movieArr[movie].coverImage;
    console.log(movie + " " +name + " " +year + " " );
}
Thumbnail()