//przyda sie do przezroczystych menu:

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let scrolled = -(this.pageYOffset / 2);
        //        console.log(scrolled);
        let scrolled2 = -(this.pageYOffset / 4);


        //        po 0 musi byc spacja
        document.getElementById('parallax').style.backgroundPosition = '0 ' + scrolled + 'px';

        document.getElementById('parallax-2').style.backgroundPosition = '0 ' + scrolled + 'px';

        let parallaxHeight = document.getElementById('parallax').offsetHeight;
        console.log(parallaxHeight);

        if (parallaxHeight < this.pageXOffset) {
            document.getElementById('parallax').classList.add('box-2');
        } else {
            document.getElementById('parallax').classList.remove('box-2');

        }
    })
})
