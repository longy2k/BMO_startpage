var searchBar = document.getElementById("search");

searchBar.addEventListener("keyup", function(event) {
  if (event.code === "Enter") {
    var searchValue = searchBar.value;
    var splitValue = searchValue.split(" ");

    if(splitValue[0].charAt(0) == "/") {
      alert("YEAH");
    }
    else {
      window.open("https://www.google.com/search?q=" + searchValue, "_self")
    }

    console.log(searchValue.substring(1));

    // switch (splitValue[0].substring(1)) {
    //   case 'a':
    //     !searchValue.includes(" ") ? window.open("https://www.amazon.com/", "_blank") : window.open("https://www.amazon.com/s?k=" + splitValue[1], "_blank");
    //     break;
    //   default:
    //     window.open("https://www.google.com/search?q=" + splitValue[0], "_self");
    // }
  }
});
