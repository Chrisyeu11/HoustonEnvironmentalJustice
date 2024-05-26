document.addEventListener('DOMContentLoaded', function() {
    var topBarHtml = `
    <div class="top-bar">
        <ul class="top-links">
            <li><a href="#">Students</a></li>
            <li><a href="#">Faculty/Staff</a></li>
            <li><a href="#">Alumni</a></li>
            <li><a href="#">Visitors</a></li>
        </ul>
        <ul class="top-icons">
            <li><a href="#">MyTSU</a></li>
            <li><a href="#">Apply</a></li>
            <li><a href="#">Give</a></li>
            <li><a href="#">Search</a></li>
        </ul>
    </div>`;

    var navbarHtml = `
    <nav class="navbar">
        <div class="left-menu">
            <ul>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">ADMISSIONS</a></li>
                <li><a href="#">ACADEMICS</a></li>
                <li><a href="#">ATHLETICS</a></li>
                <li><a href="#">CAMPUS LIFE</a></li>
                <li><a href="discussion-board.html">DISCUSSION BOARD</a></li> <!-- Added link to Discussion Board -->
            </ul>
        </div>
        <div class="logo">
            <a href="#"><img src="images/TSU LOGO.png" alt="TSU Logo"></a>
        </div>
        <div class="right-menu">
            <ul>
                <li><a href="#">TSU ONLINE</a></li>
                <li><a href="#">INSTITUTIONAL EVENTS</a></li>
            </ul>
        </div>
    </nav>`;

    // Inserts the top bar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', topBarHtml + navbarHtml);
});
