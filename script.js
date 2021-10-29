// Database
const movies = [
    {
        name: 'Tokyo Revengers',
        censor: '13+',
        image: './img/tokrev.jpg',
        genre: 'Action',
        synopsis: 'BERDASARKAN MANGA TERLARIS<br><br>Untuk menyelamatkan gadis yang dicintainya, Takemichi harus melakukan perjalanan kembali ke masa lalu dan mengalahkan segala rintangan!'
    },
    {
        name: 'The Medium',
        censor: '17+',
        image: './img/the-medium.jpg',
        genre: 'Horror',
        synopsis: 'Sebuah film horror dari Banjong PISANTHANAKUN sutradara Pee Mak, Alone, & Shutter. Dan produser NA, Hong-Jin sutradara pembuat The Wailing & Yellow Sea.<br><br>Saat tim dokumenter mengikuti Nim seorang dukun di daerah Isan - Thailand Utara mereka bertemu dengan keponakannya bernama Mink yang menunjukkan gejala aneh. Nampaknya Mink akan mewarisi bakat dukun dari keturunan keluarga mereka. Tim memutuskan untuk mengikuti Mink, berharap dapat merekam proses penurunan bakat dukun ke generasi berikutnya. Namun perilaku Mink anehnya menjadi lebih ekstrem dan penuh kekuatan gelap.'
    },
    {
        name: 'Nussa',
        censor: 'Semua Umur',
        image: './img/nussa.jpg',
        genre: 'Animation',
        synopsis: 'NUSSA (8), si juara bertahan science fair, ingin kembali memenangkan lomba dengan roket rancangannya didampingi oleh ABBA. Namun, eksperimen roketnya telah gagal, dan teman-teman beralih memperhatikan kecanggihan roket JONNI, anak baru di sekolah sekaligus rival lomba baginya. Berhadapan dengan rival yang lebih unggul, serta kabar bahwa Abba tak bisa pulang membuat Nussa terpukul. Mampukah Nussa mewujudkan mimpinya menjadi juara kembali di tengah situasi seperti ini?'
    },
    {
        name: 'Shang Chi',
        censor: 'Semua Umur',
        image: './img/shang-chi.jpg',
        genre: 'Action',
        synopsis: 'Shang-Chi (Simu Liu) harus menghadapi masa lalunya sebelum ia memilih untuk meninggalkan dan bergabung ke dalam sebuah organisasi bernama Ten Rings.'
    },
    {
        name: 'No Time To Die',
        censor: '13+',
        image: './img/no-time-to-die.jpg',
        genre: 'Action',
        synopsis: 'Dalam No Time To Die, Bond sudah pensiun dan menikmati hidup tenang di Jamaika. Ketenangannya hanya sebentar tatkala teman lamanya Felix Leiter dari CIA datang untuk meminta bantuan. Sebuah misi untuk menyelamatkan ilmuwan yang diculik ternyata jauh lebih berbahaya dari yang diperkirakan, membawa Bond menyusuri jejak seorang penjahat misterius yang dipersenjatai dengan teknologi baru yang berbahaya.'
    },
    {
        name: 'Candyman',
        censor: '17+',
        image: './img/candyman.jpg',
        genre: 'Thriller',
        synopsis: 'Dalam No Time To Die, Bond sudah pensiun dan menikmati hidup tenang di Jamaika. Ketenangannya hanya sebentar tatkala teman lamanya Felix Leiter dari CIA datang untuk meminta bantuan. Sebuah misi untuk menyelamatkan ilmuwan yang diculik ternyata jauh lebih berbahaya dari yang diperkirakan, membawa Bond menyusuri jejak seorang penjahat misterius yang dipersenjatai dengan teknologi baru yang berbahaya.'
    },
    {
        name: 'Hostage: Missing Celebrity',
        censor: '17+',
        image: './img/hostage.jpg',
        genre: 'Thriller',
        synopsis: 'Ketika aktor terkenal, Hwang Jung-min, diculik dan disiarkan ke seluruh dunia, kita akan melihat seberapa jauh para penculiknya menginginkan uang mereka - dan apa pesan dibalik penculikan yang mereka jalankan'
    },
    {
        name: 'Kimetsu Orchestra Concert',
        censor: '13+',
        image: './img/kimetsu.jpg',
        genre: 'Music',
        synopsis: 'The orchestra concert of the TV Anime “Demon Slayer: Kimetsu no Yaiba” is a live performance on the various music used in the anime. Clips from the anime will be shown on a screen, allowing one to enjoy the world of the work.'
    },
    {
        name: 'Roh Mati Paksa',
        censor: '17+',
        image: './img/roh-mati-paksa.jpg',
        genre: 'Horror',
        synopsis: 'Ketika Sepasang Muda Mudi yang terjebak dalam manisnya cinta, harus menerima akibat dari perbuatanya, keangkuhan Boy (Arnold Leonard) mempermainkan perasaan Lastry (Dea Annisa) menjadi penyebab segala teror yang terjadi pada teman-temannya kecuali Vina (Gabriella Larasati) di sebuah villa terpencil milik kakek Boy. Liburan Boy, Salsa, Farah, Alvin, dan Ferry berubah mejadi teror menyeramkan dan sangat mencengkam. Vina yang heran dengan segala teror yang menimpa temannya pada akhirnya mencari tau apa penyebab teror yang hampir merenggut nyawa teman-temanya.<br><br>Kematian yang didasari oleh kemarahan besar, hal itu akan menjadi kutukan, yang akan membuat ia kembali untuk membalaskan dendam. Dimana Kutukan itu akan tetap ada di tempat kejadian tersebut. Apakah Vina berhasil mencari tahu akibat teror tersebut. Apa yang terjadi pada Boy dan teman-teman lainya di villa tersebut dan apa yang harus dipertanggung jawabkan Boy atas perbuatanya, apakah mereka bisa keluar dari teror tersebut.'
    },
    {
        name: 'Malignant',
        censor: '17+',
        image: './img/malignant.jpg',
        genre: 'Horror',
        synopsis: 'Madison dilumpuhkan oleh penglihatan mengejutkan tentang pembunuhan yang mengerikan, dan siksaannya semakin memburuk ketika dia menyadari bahwa mimpi-mimpi ini sebenarnya adalah kenyataan yang menakutkan.'
    },
    {
        name: 'Dune',
        censor: 'Semua Umur',
        image: './img/dune.jpg',
        genre: 'Sci-Fi',
        synopsis: 'Paul Atreides (Timothee Chalamet) adalah seorang putra dari keluarga bangsawan yang dipercaya untuk melindungi aset paling berharga dan elemen paling vital di alam semesta.'
    },
    {
        name: 'Halloween Kills',
        censor: '17+',
        image: './img/halloween-kills.jpg',
        genre: 'Thriller',
        synopsis: 'Beberapa saat setelah Laurie Strode (Jamie Lee Curtis), putrinya Karen (Judy Greer) dan cucu perempuannya Allyson (Andi Matichak) meninggalkan monster bertopeng Michael Myers yang dikurung dan dibakar di ruang bawah tanah Laurie, Laurie dilarikan ke rumah sakit dengan cedera yang sangat parah, dia mengira telah membunuh penyiksa dalam hidupnya. Ternyata Michael berhasil membebaskan dirinya dari jebakan Laurie, dan aksi yang mengundang pertumpahan darah kembali berlanjut.'
    },
    {
        name: 'Free Guy',
        censor: '13+',
        image: './img/freeguy.jpg',
        genre: 'Action',
        synopsis: 'Seorang pria biasa bernama Guy (Ryan Reynolds) tinggal di sebuah kota bernama Free City. Walau hanya bekerja sebagai teller bank, Guy merasa hidupnya sudah sempurna. Anggapan itu seketika berubah saat Guy bertemu dengan wanita bernama Milly (Jodie Comer). Dari pertemuan keduanya, Guy mengetahui bahwa ia sebenarnya tidak lebih dari seorang karakter sampingan dalam sebuah gim. Masalah datang saat pencipta dari gim tersebut ingin menghancurkan dunia Guy. Bersama Milly, Guy berusaha melawan dan menjadi seorang pahlawan bagi kawan-kawannya.'
    },
];

// Get Element
const movielist = document.getElementById("movielist");

// Create element
for (let movie of movies) {
    var moviecard = document.createElement("div");
    moviecard.className = "card";

    var cardimg = document.createElement("div");
    cardimg.className = "card-image";
    cardimg.innerHTML = "<img src=\"" + movie.image + "\" alt=\"" + movie.name + "\"/>";
    moviecard.appendChild(cardimg);

    var carddesc = document.createElement("div");
    carddesc.className = "card-text";

    var cardtitle = document.createElement("h4");
    cardtitle.innerHTML = "<b>" + movie.name + "</b>";
    carddesc.appendChild(cardtitle);

    var cardsub = document.createElement("p");
    cardsub.innerHTML = movie.censor;
    carddesc.appendChild(cardsub);

    moviecard.appendChild(carddesc);
    moviecard.onclick = function() { showDetails(movie) };

    movielist.appendChild(moviecard);
}

function showDetails(movie) {
    document.getElementById("details").style.visibility = "visible";
    document.getElementById("details").style.height = "325px";
    document.getElementById("details").style.margin = "30px auto";
    document.getElementById("btn").style.visibility = "visible";
    document.getElementById("btn").style.height = "var(--btn-height)";
    document.getElementById("movieimg").src = movie.image;
    document.getElementById("titledetails").innerHTML = movie.name;
    document.getElementById("censordetails").innerHTML = "Censor rating: " + movie.censor;
    document.getElementById("genredetails").innerHTML = "Genre: " + movie.genre;
    document.getElementById("synopsis").innerHTML = movie.synopsis;
}

document.getElementById("btn").onclick = function() { 
    document.getElementById("details").style.visibility = "hidden";
    document.getElementById("details").style.height = "0px";
    document.getElementById("details").style.margin = "0 auto";
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("btn").style.height = "0px";
 };
