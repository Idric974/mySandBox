console.log('Salut dossier type');

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // console.log(scrollTop, clientHeight, scrollHeight);
    window.onwheel = e => {
        if (e.deltaY >= 0) {
            // Scrolling Down with mouse
            console.log('Scroll Down');
        } else {
            // Scrolling Up with mouse
            console.log('Scroll Up');
        }
    }

    scrollDown = scrollTop;
})