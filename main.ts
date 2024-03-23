//deno server.ts

import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

async function handleRequest(request) {
  const { pathname } = new URL(request.url);


//GET http /1.1 dynamic



  if (pathname.startsWith("/html")) {
    const html = `
      <html>
        <p><a style="color:green">html<b class="text-blue-500"></b><br><marquee style="1"><img src="https://api.iconify.design/logos:html-5.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1"></a></p>
      </html>`;
    return new Response(html, { headers: { "content-type": "text/html; charset=UTF-8" } });
  }

  if (pathname.startsWith("/json")) {
    const json = JSON.stringify({ "json": "could not find a valid date for my structure" });
    return new Response(json, { headers: { "content-type": "application/json; charset=UTF-8" } });
  }

  if (pathname.startsWith("/text")) {
    const text = "This is plain text. I like to keep things simple around here";
    return new Response(text, { headers: { "content-type": "text/plain; charset=UTF-8" } });
  }

// do not touch this things will break //
const getRandomWord = () => {
    const words = ["text", "html", "json", "server", "pdf"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return { word: words[randomIndex], color: getRandomDarkColor() };
  };

// do not touch this things will break //
 const getRandomDarkColor = () => {
  const darkColors = ["#7b1fa2", "#512da8", "#4527a0", "#311b92", "#673ab7"];
    return darkColors[Math.floor(Math.random() * darkColors.length)];
  };
 // do not touch this things will break //



  function toggleIframe(path) {
    const iframe = document.getElementById('iframe');
    if (path) {
      iframe.src = path;
      iframe.style.display = 'block';
    } else {
      iframe.style.display = 'none';
    }
  }

  setInterval(function () {
    const randomWordElement = document.getElementById('randomWord');
    const randomWord = getRandomWord();
    randomWordElement.textContent = randomWord;
    randomWordElement.style.color = getRandomDarkColor();
  }, 500); //time word changes


//html

  const response = `

    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/daisyui@1.9.1/dist/full.css" rel="stylesheet">
        <script async defer src="https://buttons.github.io/buttons.js"></script> 

<style>

/* Custom HR Style with Purple Color */
hr.custom-hr {
  border: none;
  height: 2px; /* Adjust height as needed */
  background-color: #7e57c2; /* Purple color */
  margin: 20px 0; /* Adjust margin as needed */
}


.emojis {
    font-size: 28px;
    margin-bottom: 1px; 
    margin-top: 1px; 
}

blockquote {
    font-style: italic;
    text-align: center;
    width: 50%;
    padding: 10px;
    border-radius: 20px;
    margin-top: 1px;
    background-image: linear-gradient(to bottom right, #4F46E5, #8F8AE0);
    color: white;
}

</style>


</head>



       <!----script must stay in html to function----->

        <script>

          function rotateWords() {
            const words = ["text", "server", "html", "json", "pdf"];
            let index = 0;

            setInterval(function() {
              const randomWord = words[index];
              const randomColor = "${getRandomDarkColor()}"; 
              document.getElementById("url").innerHTML = "deno-html-json.deno.dev/&nbsp;<a/><span style='color: " + randomColor + ";'>" + randomWord + "</span>";
              index = (index + 1) % words.length;
            }, 500);
          }

          rotateWords();

        </script>
        


        <body class="bg-gradient-to-br from-gray-200 to-gray-500 flex flex-col justify-center items-center">
        <body class="font-sans text-base bg-white flex flex-col justify-center items-center">
        <div class="w-full max-w-lg">
        <center><img src="https://dash.deno.com/assets/logo.svg" hieght="100px" width="100px"</img></center>
         <h1 class="text-3xl text-center my-8"><code><pre>GET HTTP /1.1</pre></code><br><p id="url"><code>deno-html-json.deno.dev/<span style="color: ${getRandomDarkColor()};"><b>${getRandomWord().word}</code></span></b></p></h1>
         <h4 class="text-1xl text-center my-5"><code>Accept-Language: en-us</code></h4>
         <h4 class="text-1xl text-center my-5"><code>Cache-Control: no-cache</code></h4>
         <h6 class="text-1x1 text-center text-green-950 my-8">HTTP /1.1&nbsp;<a style="color: #106b21">200 OK<hr><hr></a></h6>
        
         </div>


     <!-------BUTTONS------->   
       
  <a href="/text" class="inline-flex items-center px-4 py-2 border border-gray-900 text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-200 transition ease-in-out duration-150">
    <span class="inline-block"><img src="https://api.iconify.design/material-symbols:format-color-text-rounded.svg?color=%2353d5fd" alt="HTML Icon" class="h-5 w-5 mr-2"></span>
    <span>text</span>
  </a>
</center>

          <br>
        <center>
  <a href="/html" class="inline-flex items-center px-4 py-2 border border-gray-900 text-sm leading-5 font-medium rounded-md text-yellow-500 bg-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-gray-200 transition ease-in-out duration-150">
    <span class="inline-block"><img src="https://api.iconify.design/logos:html-5.svg?color=%23669c35" alt="HTML Icon" class="h-5 w-5 mr-2"></span>
    <span>html</span>
  </a>
</center>
          <br>
        <center>
  <a href="/json" class="inline-flex items-center px-4 py-2 border border-gray-900 text-sm leading-5 font-medium rounded-md text-green-500 bg-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-gray-200 transition ease-in-out duration-150">
    <span class="inline-block"></span>
    <img src="https://api.iconify.design/logos:json.svg?color=%23669c35" alt="JSON Icon" class="h-5 w-5 mx-2">
    <span>json</span>
  </a>
</center>
          <br>
         <center>
  <a href="/server.ts" class="inline-flex items-center px-4 py-2 border border-gray-900 text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-200 transition ease-in-out duration-150">
    <span class="inline-block"></span>
    <img src="https://api.iconify.design/fa6-solid:server.svg?color=%23669c35" alt="Server Icon" class="h-5 w-5 mx-2">
    <span>server</span>
  </a>
</center>
<br>
</div>
    

         <!----------blockquote-------->
<center>
    <div class="emojis">🙋🏽🙋🏿‍♂️🙋🏻‍♀️🙋🏽🙋🏿🙋🏽🙋🏿‍♂️🙋🏻‍♀️🙋🏽</div>
    <blockquote>
        <p>Imagine you're at a party, and you ask a friend to message the DJ across the room. In HTTP, your browser sends a request to a server asking to drop the bass. The DJ processes your request and sends back the track. This exchange is the essence of an HTTP request.</p>
    </blockquote>
</center>

    </center>







          <!------MP3 PLAYER---->

            <center><audio controls class="my-4">
              <source src="https://pub-090188261ed842a9ac0918908eb278e5.r2.dev/01%20codec%20ninja.mp3" type="audio/mpeg">
              Your browser does not support the audio element.</audio></center>
       
          <!----GITHUB BUTTON------->

       <br>
      <center>
      <a class="github-button" href="https://github.com/sudo-self/http-request" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;" data-icon="octicon-star" data-size="large" aria-label="Star sudo-self/http-request on GitHub">Star</a></centered>

        <!---FOOTER---->

       <footer class="text-zinc-950 text-center mt-auto py-4 w-full">deno-html-json.deno.dev&nbsp;&copy2024.</footer>
      </body> 

  </html>
  `;

//server.ts listener

  return new Response(response, { headers: { "content-type": "text/html; charset=UTF-8" } });
}

listenAndServe(":8000", handleRequest);

