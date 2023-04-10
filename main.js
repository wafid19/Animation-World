const moviesArr = [
    {
        titel: "How To Train Your Dragon",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_.jpg"
    },
    {
        titel: "LUCA",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://featuredanimation.com/wp-content/uploads/2021/06/Luca-waving-half-under-water-Pixar-Movie-Poster-2021.jpg"
    },
    {
        titel: "Rise of The Guardians",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://i.pinimg.com/474x/4c/5a/4d/4c5a4dddbe33d4b3974f87ef90489a90.jpg"
    },
    {
        titel: "Stolen Princess",
        year: 2018,
        ticketPrice: 300,
        posterURL: "https://webneel.com/daily/sites/default/files/images/daily/03-2018/3-poster-stolen-princess-animation-movies-2018.jpg"
    },
    {
        titel: "SCOOB!",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://e1.pxfuel.com/desktop-wallpaper/494/83/desktop-wallpaper-scoob-scoob-movie-thumbnail.jpg"
    },
    {
        titel: "How To Train Your Dragon",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_.jpg"
    },
    {
        titel: "Tom And Jerry",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://i.pinimg.com/236x/92/74/90/927490d8cb4c8bd2f55aeed2a021b7b7.jpg"
    }, 
    {
        titel: "NEMO",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://www.filmposters.com/images/posters/21847.jpg"
    }, 
    {
        titel: "Sprite Fright",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sprite_Fright-movie_poster.jpg/424px-Sprite_Fright-movie_poster.jpg"
    },
     {
        titel: "Kong fu Panda 3",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8X8_z6kSPmJj4SLTP04nrNVXpqHiUfu0e5bpBST5v&s"
    },
    {
        titel: "DALE",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://featuredanimation.com/wp-content/uploads/2022/05/Dale-poster-from-Chip-N-Dale-Rescue-Rangers.jpg"
    },
    {
        titel: "ATLANTIS",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://w0.peakpx.com/wallpaper/40/771/HD-wallpaper-atlantis-the-lost-empire-disney-animated-movies-movie-poster.jpg"
    },
    {
        titel: "RAYA",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://featuredanimation.com/wp-content/uploads/2021/02/Raya-and-the-Last-Dragon-movie-poster-3-min.jpg"
    },
    {
        titel: "The Little Mermaid",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://v5.femalefirst.co.uk/image-library/port/620/t/the-little-mermaid-movie-poster.jpg"
    },
    {
        titel: "Stange World",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3RFzdklugpPrvec1B8el87_Io5OHIt6QsA&usqp=CAU"
    },
    {
        titel: "Zootopia",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeBiT92xWZ8xJWyxeHo_LNOnHbfDL3DT0YA&usqp=CAU"
    },
    {
        titel: "The Night",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://imgix.ranker.com/user_node_img/111/2210369/original/2210369-photo-u38?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375"
    },
    {
        titel: "The Croods",
        year: 2013,
        ticketPrice: 300,
        posterURL: "https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        titel: "MUMMIES",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1674141310/amc-cdn/production/2/movies/65300/65311/PosterDynamic/148047.jpg"
    }, {
        titel: "THE CROODS",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71pQ1PvVlEL._AC_SY679_.jpg"
    },
    {
        titel: "Spirited Away",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2020/09/23170417/Spirited-poster-555x840.jpg"
    },
    {
        titel: "CHANGE",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://i0.wp.com/mediachomp.com/wp-content/uploads/2022/01/honest-disney-movies-01.jpg?resize=641%2C978&ssl=1"
    },
    {
        titel: "Coco",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://hips.hearstapps.com/hmg-prod/images/coco-1529428758.jpg"
    },
    {
        titel: "Scoob",
        year: 2010,
        ticketPrice: 300,
        posterURL: "https://e1.pxfuel.com/desktop-wallpaper/570/377/desktop-wallpaper-fred-looks-very-different-in-new-of-movie-scoob-scoob-movie-thumbnail.jpg"
    },

];



//display movies

function displayMovies() {
    const moviesElement = document.querySelector(".movies");

    for(let i=0; i < moviesArr.length; i++) {
        const movieElement =document.createElement("div")
        movieElement.classList.add(
            "movie",
            "card",
            "p-0",
            "col",
            "shadow",
            "border-0",
            "rounded-3"
        );
        movieElement.innerHTML = `
        <div class="movie-poster">
        <img src="${moviesArr[i].posterURL}"
        class="card-img w-100"
        >
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">${moviesArr[i].titel} (${moviesArr[i].year})</h5>
        <!-- <p class="card-text">How to Train Your Dragon is a 2010 American computer-animated action fantasy film loosely based on the 2003 book of the same name by Cressida Cowell,</p> -->
        <p><strong>Price:</strong> ${moviesArr[i].ticketPrice} taka</p>
        <button class="btn btn-dark fw-bold book-ticket">Book Ticket</button>
      </div>`;
      moviesElement.appendChild(movieElement);
    }
}
displayMovies();


// display modal

function displayModal(){
   const bookTicket = document.querySelectorAll(".book-ticket"); 


   const modalWindow = document.querySelector('.modal-window');

   for(let i=0; i < bookTicket.length; i++){
    bookTicket[i].addEventListener('click', function(){
        for(let j=0; j < moviesArr.length; j++){
            if(i===j){
                const title = moviesArr[j].titel;
                const year = moviesArr[j].year;
                const Price = moviesArr[j].ticketPrice;
                const vat = (Price * 7) / 100;
                const subtotal = Price + vat;

                // show modal window
                  modalWindow.style.opacity = 1;
                  modalWindow.style.visibility = 'visible';

                  modalWindow.innerHTML = ` 
                  <span class="close-btn">❌</span>
                  <h2 class="fw-bold mt-3">${title} (${year})</h2>
                  <h5><strong>Price:</strong> ${Price} Taka</h5>
                  <h5><strong>VAT:</strong> ${vat} Taka</h5>
                  <h3><strong>Subtotal:</strong> ${subtotal} Taka</h3>
                  <button class="btn btn-danger fw-bold mt-4 buy-now">Buy Now</button>
                  `;

                  //hidden modal 

                  const closeBtn = document.querySelector(".close-btn");

                  closeBtn.addEventListener('click', function(){
                   modalWindow.style.opacity = 0;
                   modalWindow.style.visibility = hidden;
                
                })


            }
        }
    })
   }
};

displayModal();