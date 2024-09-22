const movies = {
    all: [
        { title: "John Wick 2 (2017)", image: "http://127.0.0.1:5500/Image/johnwick.png" },
        { title: "Godzilla vs Kong (2021)", image: "http://127.0.0.1:5500/Image/godzilla.png" },
        { title: "SpiderMan: Homecoming (2017)", image: "http://127.0.0.1:5500/Image/spidermanhomecoming.png" },
        { title: "Kingmans The Golden Circle (2017)", image: "http://127.0.0.1:5500/Image/Kingsman.png" },
        { title: "The Matrix Resurrections (2021)", image: "http://127.0.0.1:5500/Image/matrix.png" },
        { title: "In time (2011)", image: "http://127.0.0.1:5500/Image/Intime.png" },
        { title: "Extraction (2020)", image: "http://127.0.0.1:5500/Image/Extraction.png" },
        { title: "Rampage (2018)", image: "http://127.0.0.1:5500/Image/rampage.png" },
        { title: "The Batman (2022)", image: "http://127.0.0.1:5500/Image/Thebatman.png" },
        { title: "Spider-Man: No Way Home (2021)", image: "http://127.0.0.1:5500/Image/Nowayhome.png" },
        { title: "หลานม่า (2024)", image: "https://www.posterman2000.com/wp-content/uploads/2024/04/%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B9%88%E0%B8%B2-2-690x1035.jpg" },
        { title: "Titanic (1997)", image: "http://127.0.0.1:5500/Image/Titanic.png" },
        { title: "The Green Miles (1999)", image: "http://127.0.0.1:5500/Image/Green%20miles.png" },
        { title: "The Tearsmith (2024)", image: "http://127.0.0.1:5500/Image/The%20tearsmith.png" },
        { title: "Wonderland (2024)", image: "http://127.0.0.1:5500/Image/Wonderland.png" },
        { title: "Purple Heart (2023)", image: "http://127.0.0.1:5500/Image/purple%20heart.png" },
        { title: "Call Me Chihiro (2023)", image: "http://127.0.0.1:5500/Image/Callmechihiro.png" },
        { title: "A Dog's Way Home (2019)", image: "https://th.bing.com/th/id/OIP.mXgbfEZAmfoCUohDng3kngHaLH?rs=1&pid=ImgDetMain" },
        { title: "The Two Popes (2019)", image: "http://127.0.0.1:5500/Image/Twopopes.png" },
        { title: "Fantastic Beasts: The Secrets of Dumbledore (2022)", image: "http://127.0.0.1:5500/Image/Doubledores.png" },
        { title: "Green Book (2018)", image: "http://127.0.0.1:5500/Image/Green%20book.png" },
        { title: "เเหยมยโสธร (2005)", image: "https://th.bing.com/th/id/R.c7cbb45f93af34ce1adc7b6230a139ec?rik=56OZ5G5P%2fJ2WUQ&riu=http%3a%2f%2fsiamzone.com%2fmovie%2fpic%2f2005%2fhelloyasothorn%2fposter1.jpg&ehk=j3yOuTc4DCAJRuy3um7lOCNiKLKRWVflvYKidUVf4oM%3d&risl=&pid=ImgRaw&r=0" },
        { title: "ไทบ้านเดอะซีรีส์ 2.1 (2018)", image: "https://konmongnangetc.files.wordpress.com/2018/03/e0b984e0b897e0b89ae0b989e0b8b2e0b899-4.jpg?w=900" },
        { title: "Hotel Transylvania 2 (2024)", image: "https://th.bing.com/th/id/OIP.3-_iZQK3OmLkNgGF2F5t9QHaLH?rs=1&pid=ImgDetMain" },
        { title: "Family Switch (2023)", image: "http://127.0.0.1:5500/Image/Family%20swicth.png" },
        { title: "Mission Cross (2024)", image: "http://127.0.0.1:5500/Image/Mission%20cross.png" },
        { title: "The Gentleman (2024)", image: "http://127.0.0.1:5500/Image/The%20gentleman.png" },
        { title: "Johnny English (2003)", image: "http://127.0.0.1:5500/Image/Mrbean.png" },
        { title: "Wonka (2023)", image: "http://127.0.0.1:5500/Image/wonka.png" },
        { title: "Minions The Rise of Gru (2022)", image: "http://127.0.0.1:5500/Image/Minions%20the%20rise%20of%20gru.png" },
        { title: "ร่างทรง (2021)", image: "https://www.siamzone.com/movie/pic/2021/themedium/poster1.jpg" },
        { title: "ลัดดาแลนด์ (2011)", image: "https://www.siamzone.com/movie/pic/2011/thelosthome/poster2.jpg" },
        { title: "ชัตเตอร์ กดติดวิญญาณ Shutter (2004)", image: "https://www.posterman2000.com/wp-content/uploads/2021/07/%E0%B8%8A%E0%B8%B1%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%81%E0%B8%94%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%A7%E0%B8%B4%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88-4-768x1096.jpg" },
        { title: "บ้านปลดวิญญาณ The deliverance (2024)", image: "https://www.mp4moviez.qa/cover/the-deliverance-(2024)-hindi-dubbed-movie.jpg" },
        { title: "Sweet Home (2020)", image: "https://kdramadiary.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-04-at-1.43.14-PM.png" },
        { title: "คืนเดือดเชือดขาช็อป Thanksgiving (2023)", image: "https://s359.kapook.com/pagebuilder/96ae6836-2bc3-4c49-9aca-2d129035b8d4.jpg" },
        { title: "ปิดฉากฮาโลวีน Halloween Ends (2023)", image: "https://doomovie.win/wp-content/uploads/2022/10/Halloween-Ends-2022-1.jpg" },
        { title: "ห้องเก็บศพ Cadaver (2018)", image: "https://lh3.googleusercontent.com/eIyJuFvni5AqQMeQhC5rvCEgJa6GcNEZtzFBI0Hv3zUxTm_RM-ZgLaasc5yvXjctAeRtDp7OdkOZBQy_u5s=s0" },
        { title: "เดอะ คอนเจอริง คนเรียกผี The Conjuring (2013)", image: "https://image.tmdb.org/t/p/w780/rMPrmj4eWAt1191YNvWHKQI53tj.jpg" },
        { title: "จับมือผี talk to me (2023)", image: "https://lh3.googleusercontent.com/4vPfdiua2dnWfcWGNHaGXjc13P9zgE3Q1AqkWN_wJ6rUjghLhQY089SwYDY7yHEXc7vI_UCWsJ5wMWQZfGSsnKrUjOaJ25PQ9g=s0" },
        { title: "Rebel moon (2023)", image: "http://127.0.0.1:5500/Image/Rebelmoon.png" },
        { title: "Dune (2021)", image: "http://127.0.0.1:5500/Image/dune.png" },
        { title: "Resident Evil (2002)", image: "http://127.0.0.1:5500/Image/Resident%20evil.png" },
        { title: "Venom: Let There Be Carnage (2021)", image: "http://127.0.0.1:5500/Image/Venom.png" },
        { title: "Paradise (2023)", image: "http://127.0.0.1:5500/Image/Paradise.png" },
        { title: "Life (2017)", image: "http://127.0.0.1:5500/Image/Life.png" },
        { title: "ปิดฉากฮาโลวีน Halloween Ends (2023)", image: "http://127.0.0.1:5500/Image/Teenage%20turtle.png" },
        { title: "Warcraft (2016)", image: "http://127.0.0.1:5500/Image/warcraft.png" },
        { title: "The Day After Tomorrow (2004)", image: "http://127.0.0.1:5500/Image/Thedatafter.png" },
        { title: "Jurassic World: Fallen Kingdom (2017)", image: "http://127.0.0.1:5500/Image/Jurassicworld.png" },
        { title: "Flipped (2010)", image: "http://127.0.0.1:5500/Image/flipped.png" },
        { title: "กวนมึนโฮ (2010)", image: "https://th.bing.com/th/id/R.4c4eee17e6462af8cb88c88c6669c518?rik=3a452QixS8DwzA&riu=http%3a%2f%2fwww.thaicinema.org%2fimages%2falltitles%2fknowingyou%2fposter02.jpg&ehk=wYB%2bsIpt%2bgBQNNm%2bj68O8YQej89yzymyDwnVAvt%2bxsk%3d&risl=&pid=ImgRaw&r=0" },
        { title: "Eclipse (2010)", image: "http://127.0.0.1:5500/Image/eclipse.png" },
        { title: "Even If This Love Disappears Tonight (2022)", image: "https://m.media-amazon.com/images/M/MV5BMDhlNDljOTMtOTRmOS00MjYxLWI3ZDktYTk5YWQ5YmNlNWM5XkEyXkFqcGdeQXVyNDAzNDkxNTU@._V1_.jpg" },
        { title: "Friend Zone (2019)", image: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/219595/LINK_POSTER_FRIENDEAT-INTER-NA-incinemas.jpg" },
        { title: "คิดถึงวิทยา (2014)", image: "https://www.themoviedb.org/t/p/original/OKKjIP0U3pzgcNF6MPfRdqA8dV.jpg" },
        { title: "แฟนฉัน (2003)", image: "https://www.themoviedb.org/t/p/original/nB8ZoBGz1Ax0cfao2gDGGWv4g9T.jpg" },
        { title: "Forrest gump (2018)", image: "http://127.0.0.1:5500/Image/forrest%20gump.png" },
        { title: "สิ่งเล็กๆที่เรียกว่ารัก (2010)", image: "https://th.bing.com/th/id/R.93f4532d21f6c0cfe7b150ed836b16ff?rik=3XaOeqH8jJPQ9Q&riu=http%3a%2f%2flh6.ggpht.com%2f_FAI1ouY6Frs%2fTNlqfnaauOI%2fAAAAAAAAA34%2f3AQdDFxCvSM%2fsingleklek2.jpg&ehk=mFy042J3J2zqsa9r9xsXSRn78ykcm4kb0IR5YXZhD1M%3d&risl=&pid=ImgRaw&r=0" },
        { title: "Long Live Love! (2023)", image: "https://th.bing.com/th/id/OIP.g1BCzbXoQxFXDDI3MPVYtwAAAA?rs=1&pid=ImgDetMain" },
        { title: "Night Teeth (2021)", image: "http://127.0.0.1:5500/Image/Night%20teeth.png" },
        { title: "Super Me (2021)", image: "http://127.0.0.1:5500/Image/Superme.png" },
        { title: "The Yin-Yang Master (2021)", image: "http://127.0.0.1:5500/Image/Yinyang.png" },
        { title: "Wukong (2017)", image: "http://127.0.0.1:5500/Image/Wukong.png" },
        { title: "Bright (2017)", image: "http://127.0.0.1:5500/Image/Bright.png" },
        { title: "Wednesday (2022)", image: "http://127.0.0.1:5500/Image/Wednesday.png" },
        { title: "The Secrets of Dumbledore (2022)", image: "http://127.0.0.1:5500/Image/Doubledores.png" },
        { title: "Troll (2022)", image: "http://127.0.0.1:5500/Image/troll.png" },
        { title: "จอมขมังเวทย์ (2019)", image: "https://sahamongkolfilm.com/wp-content/uploads/2019/10/Necromancer2020-Theme-Poster.jpg" },
        { title: "The School for Good and Evil (2022)", image: "http://127.0.0.1:5500/Image/The%20school%20good%20and%20evil.png" },
        { title: "Kung Fu Panda: The Dragon Knight (2022)", image: "http://127.0.0.1:5500/Image/PANDA.png" },
        { title: "My Little Pony (2014)", image: "http://127.0.0.1:5500/Image/Mylittlepony.png" },
        { title: "Ben 10 (2005)", image: "http://127.0.0.1:5500/Image/Ben10.png" },
        { title: "Wish Dragon (2021)", image: "http://127.0.0.1:5500/Image/wishdragon.png" },
        { title: "Hotel Transylvania (2012)", image: "http://127.0.0.1:5500/Image/Hotel.png" },
        { title: "Adventure Time (2010)", image: "http://127.0.0.1:5500/Image/Adventuretime.png" },
        { title: "The Mitchells vs. the Machines (2021)", image: "http://127.0.0.1:5500/Image/Mitchell.png" },
        { title: "Ice age (2002)", image: "http://127.0.0.1:5500/Image/Iceage.png" },
        { title: "ก้านกล้วย (2006)", image: "https://www.siamzone.com/movie/pic/2009/khankluayii/poster1.jpg" },
        { title: "Scooby-doo (2023)", image: "https://th.bing.com/th/id/R.20ade4272e9320ed3ead8e6007840edd?rik=CBeoDgi2tg2u7w&riu=http%3a%2f%2fwww.toonopolis.com%2fwp-content%2fuploads%2f2011%2f07%2fscoobydoomysteryincorporated.jpg&ehk=uTDv6b%2bNJSeHdPMvHzBON3nfwfDbWmOQsPKHhxyucQY%3d&risl=&pid=ImgRaw&r=0" },
    ],
    action: [
        { title: "John Wick 2 (2017)", image: "http://127.0.0.1:5500/Image/johnwick.png" },
        { title: "Godzilla vs Kong (2021)", image: "http://127.0.0.1:5500/Image/godzilla.png" },
        { title: "SpiderMan: Homecoming (2017)", image: "http://127.0.0.1:5500/Image/spidermanhomecoming.png" },
        { title: "Kingmans The Golden Circle (2017)", image: "http://127.0.0.1:5500/Image/Kingsman.png" },
        { title: "The Matrix Resurrections (2021)", image: "http://127.0.0.1:5500/Image/matrix.png" },
        { title: "In time (2011)", image: "http://127.0.0.1:5500/Image/Intime.png" },
        { title: "Extraction (2020)", image: "http://127.0.0.1:5500/Image/Extraction.png" },
        { title: "Rampage (2018)", image: "http://127.0.0.1:5500/Image/rampage.png" },
        { title: "The Batman (2022)", image: "http://127.0.0.1:5500/Image/Thebatman.png" },
        { title: "Spider-Man: No Way Home (2021)", image: "http://127.0.0.1:5500/Image/Nowayhome.png" },
    ],
    drama: [
        { title: "หลานม่า (2024)", image: "https://www.posterman2000.com/wp-content/uploads/2024/04/%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B9%88%E0%B8%B2-2-690x1035.jpg" },
        { title: "Titanic (1997)", image: "http://127.0.0.1:5500/Image/Titanic.png" },
        { title: "The Green Miles (1999)", image: "http://127.0.0.1:5500/Image/Green%20miles.png" },
        { title: "The Tearsmith (2024)", image: "http://127.0.0.1:5500/Image/The%20tearsmith.png" },
        { title: "Wonderland (2024)", image: "http://127.0.0.1:5500/Image/Wonderland.png" },
        { title: "Purple Heart (2023)", image: "http://127.0.0.1:5500/Image/purple%20heart.png" },
        { title: "Call Me Chihiro (2023)", image: "http://127.0.0.1:5500/Image/Callmechihiro.png" },
        { title: "A Dog's Way Home (2019)", image: "https://th.bing.com/th/id/OIP.mXgbfEZAmfoCUohDng3kngHaLH?rs=1&pid=ImgDetMain" },
        { title: "The Two Popes (2019)", image: "http://127.0.0.1:5500/Image/Twopopes.png" },
        { title: "Fantastic Beasts: The Secrets of Dumbledore (2022)", image: "http://127.0.0.1:5500/Image/Doubledores.png" },
    ],
    comedy: [
        { title: "Green Book (2018)", image: "http://127.0.0.1:5500/Image/Green%20book.png" },
        { title: "เเหยมยโสธร (2005)", image: "https://th.bing.com/th/id/R.c7cbb45f93af34ce1adc7b6230a139ec?rik=56OZ5G5P%2fJ2WUQ&riu=http%3a%2f%2fsiamzone.com%2fmovie%2fpic%2f2005%2fhelloyasothorn%2fposter1.jpg&ehk=j3yOuTc4DCAJRuy3um7lOCNiKLKRWVflvYKidUVf4oM%3d&risl=&pid=ImgRaw&r=0" },
        { title: "ไทบ้านเดอะซีรีส์ 2.1 (2018)", image: "https://konmongnangetc.files.wordpress.com/2018/03/e0b984e0b897e0b89ae0b989e0b8b2e0b899-4.jpg?w=900" },
        { title: "Hotel Transylvania 2 (2024)", image: "https://th.bing.com/th/id/OIP.3-_iZQK3OmLkNgGF2F5t9QHaLH?rs=1&pid=ImgDetMain" },
        { title: "Family Switch (2023)", image: "http://127.0.0.1:5500/Image/Family%20swicth.png" },
        { title: "Mission Cross (2024)", image: "http://127.0.0.1:5500/Image/Mission%20cross.png" },
        { title: "The Gentleman (2024)", image: "http://127.0.0.1:5500/Image/The%20gentleman.png" },
        { title: "Johnny English (2003)", image: "http://127.0.0.1:5500/Image/Mrbean.png" },
        { title: "Wonka (2023)", image: "http://127.0.0.1:5500/Image/wonka.png" },
        { title: "Minions The Rise of Gru (2022)", image: "http://127.0.0.1:5500/Image/Minions%20the%20rise%20of%20gru.png" },
    ],
    horror: [
        { title: "ร่างทรง (2021)", image: "https://www.siamzone.com/movie/pic/2021/themedium/poster1.jpg" },
        { title: "ลัดดาแลนด์ (2011)", image: "https://www.siamzone.com/movie/pic/2011/thelosthome/poster2.jpg" },
        { title: "ชัตเตอร์ กดติดวิญญาณ Shutter (2004)", image: "https://www.posterman2000.com/wp-content/uploads/2021/07/%E0%B8%8A%E0%B8%B1%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%81%E0%B8%94%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%A7%E0%B8%B4%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88-4-768x1096.jpg" },
        { title: "บ้านปลดวิญญาณ The deliverance (2024)", image: "https://www.mp4moviez.qa/cover/the-deliverance-(2024)-hindi-dubbed-movie.jpg" },
        { title: "Sweet Home (2020)", image: "https://kdramadiary.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-04-at-1.43.14-PM.png" },
        { title: "คืนเดือดเชือดขาช็อป Thanksgiving (2023)", image: "https://s359.kapook.com/pagebuilder/96ae6836-2bc3-4c49-9aca-2d129035b8d4.jpg" },
        { title: "ปิดฉากฮาโลวีน Halloween Ends (2023)", image: "https://doomovie.win/wp-content/uploads/2022/10/Halloween-Ends-2022-1.jpg" },
        { title: "ห้องเก็บศพ Cadaver (2018)", image: "https://lh3.googleusercontent.com/eIyJuFvni5AqQMeQhC5rvCEgJa6GcNEZtzFBI0Hv3zUxTm_RM-ZgLaasc5yvXjctAeRtDp7OdkOZBQy_u5s=s0" },
        { title: "เดอะ คอนเจอริง คนเรียกผี The Conjuring (2013)", image: "https://image.tmdb.org/t/p/w780/rMPrmj4eWAt1191YNvWHKQI53tj.jpg" },
        { title: "จับมือผี talk to me (2023)", image: "https://lh3.googleusercontent.com/4vPfdiua2dnWfcWGNHaGXjc13P9zgE3Q1AqkWN_wJ6rUjghLhQY089SwYDY7yHEXc7vI_UCWsJ5wMWQZfGSsnKrUjOaJ25PQ9g=s0" },
    ],
    sci_fi: [
        { title: "Rebel moon (2023)", image: "http://127.0.0.1:5500/Image/Rebelmoon.png" },
        { title: "Dune (2021)", image: "http://127.0.0.1:5500/Image/dune.png" },
        { title: "Resident Evil (2002)", image: "http://127.0.0.1:5500/Image/Resident%20evil.png" },
        { title: "Venom: Let There Be Carnage (2021)", image: "http://127.0.0.1:5500/Image/Venom.png" },
        { title: "Paradise (2023)", image: "http://127.0.0.1:5500/Image/Paradise.png" },
        { title: "Life (2017)", image: "http://127.0.0.1:5500/Image/Life.png" },
        { title: "ปิดฉากฮาโลวีน Halloween Ends (2023)", image: "http://127.0.0.1:5500/Image/Teenage%20turtle.png" },
        { title: "Warcraft (2016)", image: "http://127.0.0.1:5500/Image/warcraft.png" },
        { title: "The Day After Tomorrow (2004)", image: "http://127.0.0.1:5500/Image/Thedatafter.png" },
        { title: "Jurassic World: Fallen Kingdom (2017)", image: "http://127.0.0.1:5500/Image/Jurassicworld.png" },
    ],
    romance: [
        { title: "Flipped (2010)", image: "http://127.0.0.1:5500/Image/flipped.png" },
        { title: "กวนมึนโฮ (2010)", image: "https://th.bing.com/th/id/R.4c4eee17e6462af8cb88c88c6669c518?rik=3a452QixS8DwzA&riu=http%3a%2f%2fwww.thaicinema.org%2fimages%2falltitles%2fknowingyou%2fposter02.jpg&ehk=wYB%2bsIpt%2bgBQNNm%2bj68O8YQej89yzymyDwnVAvt%2bxsk%3d&risl=&pid=ImgRaw&r=0" },
        { title: "Eclipse (2010)", image: "http://127.0.0.1:5500/Image/eclipse.png" },
        { title: "Even If This Love Disappears Tonight (2022)", image: "https://m.media-amazon.com/images/M/MV5BMDhlNDljOTMtOTRmOS00MjYxLWI3ZDktYTk5YWQ5YmNlNWM5XkEyXkFqcGdeQXVyNDAzNDkxNTU@._V1_.jpg" },
        { title: "Friend Zone (2019)", image: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/219595/LINK_POSTER_FRIENDEAT-INTER-NA-incinemas.jpg" },
        { title: "คิดถึงวิทยา (2014)", image: "https://www.themoviedb.org/t/p/original/OKKjIP0U3pzgcNF6MPfRdqA8dV.jpg" },
        { title: "แฟนฉัน (2003)", image: "https://www.themoviedb.org/t/p/original/nB8ZoBGz1Ax0cfao2gDGGWv4g9T.jpg" },
        { title: "Forrest gump (2018)", image: "http://127.0.0.1:5500/Image/forrest%20gump.png" },
        { title: "สิ่งเล็กๆที่เรียกว่ารัก (2010)", image: "https://th.bing.com/th/id/R.93f4532d21f6c0cfe7b150ed836b16ff?rik=3XaOeqH8jJPQ9Q&riu=http%3a%2f%2flh6.ggpht.com%2f_FAI1ouY6Frs%2fTNlqfnaauOI%2fAAAAAAAAA34%2f3AQdDFxCvSM%2fsingleklek2.jpg&ehk=mFy042J3J2zqsa9r9xsXSRn78ykcm4kb0IR5YXZhD1M%3d&risl=&pid=ImgRaw&r=0" },
        { title: "Long Live Love! (2023)", image: "https://th.bing.com/th/id/OIP.g1BCzbXoQxFXDDI3MPVYtwAAAA?rs=1&pid=ImgDetMain" },
    ],
    fantasy: [
        { title: "Night Teeth (2021)", image: "http://127.0.0.1:5500/Image/Night%20teeth.png" },
        { title: "Super Me (2021)", image: "http://127.0.0.1:5500/Image/Superme.png" },
        { title: "The Yin-Yang Master (2021)", image: "http://127.0.0.1:5500/Image/Yinyang.png" },
        { title: "Wukong (2017)", image: "http://127.0.0.1:5500/Image/Wukong.png" },
        { title: "Bright (2017)", image: "http://127.0.0.1:5500/Image/Bright.png" },
        { title: "Wednesday (2022)", image: "http://127.0.0.1:5500/Image/Wednesday.png" },
        { title: "The Secrets of Dumbledore (2022)", image: "http://127.0.0.1:5500/Image/Doubledores.png" },
        { title: "Troll (2022)", image: "http://127.0.0.1:5500/Image/troll.png" },
        { title: "จอมขมังเวทย์ (2019)", image: "https://sahamongkolfilm.com/wp-content/uploads/2019/10/Necromancer2020-Theme-Poster.jpg" },
        { title: "The School for Good and Evil (2022)", image: "http://127.0.0.1:5500/Image/The%20school%20good%20and%20evil.png" },
    ],
    animation: [
        { title: "Kung Fu Panda: The Dragon Knight (2022)", image: "http://127.0.0.1:5500/Image/PANDA.png" },
        { title: "My Little Pony (2014)", image: "http://127.0.0.1:5500/Image/Mylittlepony.png" },
        { title: "Ben 10 (2005)", image: "http://127.0.0.1:5500/Image/Ben10.png" },
        { title: "Wish Dragon (2021)", image: "http://127.0.0.1:5500/Image/wishdragon.png" },
        { title: "Hotel Transylvania (2012)", image: "http://127.0.0.1:5500/Image/Hotel.png" },
        { title: "Adventure Time (2010)", image: "http://127.0.0.1:5500/Image/Adventuretime.png" },
        { title: "The Mitchells vs. the Machines (2021)", image: "http://127.0.0.1:5500/Image/Mitchell.png" },
        { title: "Ice age (2002)", image: "http://127.0.0.1:5500/Image/Iceage.png" },
        { title: "ก้านกล้วย (2006)", image: "https://www.siamzone.com/movie/pic/2009/khankluayii/poster1.jpg" },
        { title: "Scooby-doo (2023)", image: "https://th.bing.com/th/id/R.20ade4272e9320ed3ead8e6007840edd?rik=CBeoDgi2tg2u7w&riu=http%3a%2f%2fwww.toonopolis.com%2fwp-content%2fuploads%2f2011%2f07%2fscoobydoomysteryincorporated.jpg&ehk=uTDv6b%2bNJSeHdPMvHzBON3nfwfDbWmOQsPKHhxyucQY%3d&risl=&pid=ImgRaw&r=0" },
    ]
};

const selectedMovies = {};

function getRandomMovie() {
    const genreSelect = document.getElementById('genre');
    const selectedGenre = genreSelect.value;

    if (!selectedMovies[selectedGenre]) {
        selectedMovies[selectedGenre] = [...movies[selectedGenre]]; // ทำสำเนาอาเรย์
    }

    const movieList = selectedMovies[selectedGenre];

    if (movieList.length === 0) {
        // รีเซ็ตเมื่อครบแล้ว
        selectedMovies[selectedGenre] = [...movies[selectedGenre]];
    }

    const randomIndex = Math.floor(Math.random() * movieList.length);
    const randomMovie = movieList[randomIndex];

    document.getElementById('movie-title').textContent = `หนังที่สุ่มได้: ${randomMovie.title}`;
    const movieImage = document.getElementById('movie-image');
    movieImage.src = randomMovie.image;
    movieImage.alt = randomMovie.title;
    movieImage.style.display = 'block'; // แสดงภาพ

    // ลบหนังที่สุ่มไปแล้ว
    movieList.splice(randomIndex, 1);
}