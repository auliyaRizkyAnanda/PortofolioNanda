
window.addEventListener("scroll", function () {
                  const navbar = document.querySelector("nav");
                  if (window.scrollY > 0) {
                    navbar.classList.add("navbar-shadow"); // Tambahkan bayangan saat di-scroll
                  } else {
                    navbar.classList.remove("navbar-shadow"); // Hilangkan bayangan saat di posisi atas
                  }
                });

                var typed = new Typed('.nama', {
                    strings: ["Auliya Rizky Ananda"], 
                    typeSpeed : 150,
                    backSpeed : 50,                    
                    loop: true
                });                


const sliderRow = document.getElementById("sliderRow");

                // Duplikasi gambar pertama untuk looping mulus
                const firstImage = sliderRow.firstElementChild.cloneNode(true);
                sliderRow.appendChild(firstImage);
                
                // Tambahkan animasi looping
                let translateX = 0;
                const imageWidth = 150 + 15; // Lebar gambar + gap antar gambar
                const totalImages = sliderRow.children.length;
                
                setInterval(() => {
                  translateX -= imageWidth; // Geser ke kiri
                  sliderRow.style.transform = `translateX(${translateX}px)`;
                  sliderRow.style.transition = "transform 0.5s ease";
                
                  // Ketika mencapai gambar terakhir, reset tanpa transisi
                  if (Math.abs(translateX) >= imageWidth * (totalImages - 1)) {
                    setTimeout(() => {
                      sliderRow.style.transition = "none"; // Hilangkan transisi sementara
                      translateX = 0; // Kembalikan ke posisi awal
                      sliderRow.style.transform = `translateX(${translateX}px)`;
                    }, 500); // Sesuaikan durasi dengan `transition` di CSS
                  }
                }, 2000); // Interval pergantian gambar
                

            