let searchBar = document.getElementById("search");

searchBar.addEventListener("keyup", function(event) {
  if (event.code === "Enter") {
    let searchValue = searchBar.value;
    let splitValue = searchValue.split(" ");

    // COMMANDS
    if (splitValue[0].charAt(0) == "/") {
      let command = splitValue.shift();
      let searchText = splitValue.join(" ");
      switch (command.substring(1)) {
        case 'a': //Amazon
          window.open("https://www.amazon.com/s?k=" + searchText, "_self") // Working on this part ATM!
          break;
        case 'yt': //YouTube
          window.open("https://www.youtube.com/results?search_query=" + searchText, "_self");
          break;
        case 'g': //Google
          window.open("https://www.google.com/search?q=" + searchText, "_self");
          break;
        case 'github': //Github Search
          window.open("https://github.com/search?q=" + searchText, "_self");
          break;
        case 'ddg': //DuckDuckGo
          window.open("https://duckduckgo.com/?q=" + searchText, "_self");
          break;
        case 'steam': //Steam
          window.open("https://store.steampowered.com/search/?term=" + searchText, "_self");
          break;
        case 'sof': //StackOverFlow
          window.open("https://stackoverflow.com/search?q=" + searchText, "_self");
          break;
        case 'reddit':
          window.open("https://old.reddit.com/search/?q=" + searchText, "_self");
          break;
        case 'subreddit':
          window.open("https://old.reddit.com/r/" + searchText, "_self");
          break;
        case 'umb': //University of Massachusetts Boston Search
          window.open("https://www.umb.edu/search?q=" + searchText, "_self");
          break;

      }
    }
    else {
      window.open("https://www.google.com/search?q=" + searchValue, "_self")
    }
  }
});
