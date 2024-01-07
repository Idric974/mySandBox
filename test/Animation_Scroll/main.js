console.log('Salut dossier type');

const slidingNewsletter = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        slidingNewsletter.classList.add('active')
    }
})
