// const scrollContainer = document.querySelector('main');

// scrollContainer.addEventListener('wheel', (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += 900;
// });

// console.log('butts');

// JS code used to scroll horizontally is not my own. I was struggling with the event listeners --and was pretty confused about the functions-- so the base of this JS can be found at this article: https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/.

const scrollContainer = document.getElementById('main');
if (scrollContainer != null) {
    console.log(`${scrollContainer} is not null`)
} else {
    console.log(`${scrollContainer} is a null`)
}


