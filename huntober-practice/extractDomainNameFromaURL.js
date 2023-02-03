
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
    let matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    let domain = matches && matches[1];  // domain will be null if no match is found
      domain = domain.split('.')
    return console.log(domain[domain.length - 2])
}


// Other solution

function extractDomain(url) {
  var domain;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
      domain = url.split('/')[2];
  }
  else {
      domain = url.split('/')[0];
  }

  //find & remove port number
  domain = domain.split(':')[0];

  domain = domain.split('.')[1]

  return domain;
}

// test the function with an example URL
var url = "https://www.example.com/some/path";
var domain = extractDomain(url);

console.log("The domain of the URL is: " + domain);



// test to confirm that our program works
domainName('https://twitter.com')  
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"



// I am surprised that this works but this need to work on better solution