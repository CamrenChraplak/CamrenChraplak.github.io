window.addEventListener('load', (event) => {
    document.getElementById("wpi").innerHTML = makeTable("<b>Worcester Polytechnic Institute (WPI),</b> Worcester, MA", "5/2025");
    document.getElementById("hub").innerHTML = makeTable("<b>Intern,</b> Circuithub, South Deerfield, MA", "5/2024 to 8/2024");
    document.getElementById("iqp").innerHTML = makeTable("<b>Interactive Qualifying Project,</b> White Mountains National Forest, NH", "8/2023 to 10/2023");
    document.getElementById("weber").innerHTML = makeTable("<b>Intern,</b> Camp Weber, West Springfield, MA", "7/2018 to 8/2018");
    document.getElementById("upe").innerHTML = makeTable("<b>Member,</b> Upsilon Pi Epsilon (Computer Science Honor Society), WPI", "1/2024 to 5/2025");
    document.getElementById("rbe").innerHTML = makeTable("<b>Member,</b> Rho Beta Epsilon (Robotics Honor Society), WPI", "1/2023 to 5/2025");
    document.getElementById("first").innerHTML = makeTable("<b>Member,</b> FIRST Robotics Club, West Springfield High School", "9/2017 to 6/2021");
});