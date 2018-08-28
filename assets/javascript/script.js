$(window).scroll(function() {
    parallax();
});

function parallax() {
    var wScroll = $(window).scrollTop();
    $(".parallax--bg").css('background-position', 
'center ' +(wScroll*0.55) +'px');
    $('.parallax--box').css('top', 
    -5+(wScroll*0.01101)+'em');


}


























/* <section id="port" class="portfolio"> 
        <h1>Projects</h1>
        <!-- Portfolio item 1 -->
        <figure class="port-item">
            <img src="assets/images/starwarsTrivia.jpeg" alt="project1">
            <!-- <img src="Bootstrap-Portfolio/assets/images/starwarsTrivia.jpeg" alt="project1"> -->
            <figcaption class="port-desc">
                <p>Star Wars Trivia</p>
                <a href="https://martttizzle.github.io/TriviaGame/" class="button button-accent button-small">Project Details</a>
            </figcaption>
        </figure>

        <!-- Portfolio item 2 -->
        <figure class="port-item">
            <img src="assets/images/hangmanplanets.png" alt="project1">
            <!-- <img src="Bootstrap-Portfolio/assets/images/hangmanplanets.png" alt="project1"> -->
            <figcaption class="port-desc">
                <p>Hangman Planet Edition</p>
                <a href="https://martttizzle.github.io/Hangman-Game/" class="button button-accent button-small">Project Details</a>
            </figcaption>
        </figure>
        <!-- Portfolio item 3 -->
        <figure class="port-item">
            <img src="assets/images/anightout.jpg" alt="project1">
            <!-- <img src="Bootstrap-Portfolio/assets/images/anightout.jpg" alt="project1"> -->
            <figcaption class="port-desc">
                <p>A Night Out</p>
                <a href="https://jkampa3.github.io/Team_Project_1/" class="button button-accent button-small">Project Details</a>
            </figcaption>
        </figure>
        <!-- Portfolio item 4 -->
        <figure class="port-item">
            <img src="assets/images/placeHolder4.jpeg" alt="project1">
            <!-- <img src="Bootstrap-Portfolio/assets/images/placeHolder4.jpeg" alt="project1" > -->
            <figcaption class="port-desc">
                <p>Bamazon MySQL</p>
                <a href="https://martttizzle.github.io/Bamazon/" class="button button-accent button-small">Project Details</a>
            </figcaption>
        </figure>
        <!-- Portfolio item 5 -->
        <figure class="port-item">
            <img src="assets/images/placeHolder5.jpg" alt="project1">
            <!-- <img src="Bootstrap-Portfolio/assets/images/placeHolder5.jpg" alt="project1"> -->
            <figcaption class="port-desc">
                <p>Project Title 5</p>
                <a href="" class="button button-accent button-small">Project Details</a>
            </figcaption>
        </figure>
        <!-- Portfolio item 6 -->
        <figure class="port-item">
            <img src="assets/images/placeHolder6.jpg" alt="project1">
            <!-- <img src="Bootstrap-Portfolio/assets/images/placeHolder6.jpg" alt="project1"> -->
            <figcaption class="port-desc">
                <p>Project Title 6</p>
                <a href="" class="button button-accent button-small">Project Details</a>
            </figcaption>
        </figure>


    </section>  

    <section id="skill" class="skills">
        <div class="container">
            <h1>Skills</h1>

            <ul class="left">
                <li>HTML5 & CSS3</li>
                <li>Bootstrap 4</li>
            </ul>
            <ul class="center">
                <li>JavaScript & jQuery</li>
                <li>Express & Node.js</li>
            </ul>
            <ul class="right">
                <li>Mongo DB & MySQL </li>
                <li>React & Java</li>
            </ul>
        </div>
    </section>*/