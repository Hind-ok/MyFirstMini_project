// LA boite newsletter
        function afficher(){
            var boite = document.querySelector(".boite");
            boite.classList.toggle('active');
        }


// images annimation 
   var i=0;
            var images=['images/natural-oils1Avec.jpg','images/img1.jpg','images/4824-9.jpg','images/20160921-740-1.jpg'];
            var time=4000;
            function changeImg(){
                document.slider.src=images[i];
                if(i<images.length-1){
                    i++;
                }
                else{
                    i=0;
                }
                setTimeout('changeImg()',time);
            }
            window.onload = changeImg;
     
