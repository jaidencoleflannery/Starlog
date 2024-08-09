//add color styling to title on hover and cause it to link back to the homescreen
function title(){

    const starlog = document.getElementsByClassName('starlog');

    let counter = 0;

    for(const span of starlog){

        //point at current letter in loop
        let cursor = starlog[counter];

        //change to a random color on hover
        cursor.addEventListener("mouseover", (event) => {
            var colors = ['#555bff', '1fc11b', '#ffd913', '#ff9c55', '#ff5555'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            cursor.style.color = randomColor;
        });

        //change to a random color on click and redirect to the homepage
        cursor.addEventListener("click", (event) => {
            var colors = ['#555bff', '1fc11b', '#ffd913', '#ff9c55', '#ff5555'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            cursor.style.color = randomColor;

            window.location.href = "/index.html";
        });

        //reset letter color to white
        cursor.addEventListener("mouseout", (event) => {
            cursor.style.color = ['#FFF'];
        });

        counter = counter + 1;
    }
}

export { title };