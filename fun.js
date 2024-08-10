 // For overlay
      /* Open */
      
      function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }

      /* Close */
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }

      function currentPage() {
        document.getElementById("myNav").style.width = "0%";
      }

      // for cards   
      //let mid = document.getElementById('#mid'); 
      let decorate = document.querySelector('.cont0')

      let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            decorate.classList.remove('hidden')
            decorate.classList.add('show')
          }
        });
      })

      observer.observe(decorate)    
      



      //For image
      let pics = document.querySelector(".pics")

      let changeimg = () => {
        if (pics.src.includes("Page3one")) {
          pics.src = "Assets/Page3two.jpg";
        }
        else {
          pics.src = "Assets/Page3one.jpg";
        }
      }
     