let progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", myFunction);

function myFunction() {
    let totalHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let totalScrollableHeight = totalHeight - clientHeight;
    let heightScrolled = window.scrollY;
    // let heightScrolled = document.documentElement.scrollTop; Alternative way
    let percentageScrolled = (heightScrolled / totalScrollableHeight) * 100;
    progressBar.style.width = percentageScrolled + "%";
}