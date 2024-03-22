import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

function getRandomDarkColor() {
  const darkColors = ["#2C3E50", "#25b387", "#ffaabb", "#bc13fe", "#e9023a"]; 
  return darkColors[Math.floor(Math.random() * darkColors.length)];
}

function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

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

  const getRandomWord = () => {
    const words = ["text", "audio", "html", "json", "pdf"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return { word: words[randomIndex], color: getRandomDarkColor() };
  };

  const response = `
    <html>
      <head>
        <script>
          function rotateWords() {
            const words = ["text", "audio", "txt", "html", "json", "pdf", "csv"];
            let index = 0;

            setInterval(function() {
              const randomWord = words[index];
              const randomColor = "${getRandomDarkColor()}"; // Get a new random color every rotation
              document.getElementById("url").innerHTML = "deno-html-json.deno.dev/<span style='color: " + randomColor + ";'>" + randomWord + "</span>";
              index = (index + 1) % words.length;
            }, 1000);
          }

          rotateWords();
          </script>

        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <style>
          blockquote p {
            font-style: italic;
            text-align: center;
            width: 50%;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            background-image: linear-gradient(to bottom right, #4F46E5, #8F8AE0);
            color: white;
          }
          blockquote p {
            text-align: center;
          }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/daisyui@1.9.1/dist/full.css" rel="stylesheet">
      </head>
      <body class="font-sans text-base bg-white flex flex-col justify-center items-center">
        <div class="w-full max-w-lg">
          <center><a class="github-button" href="https://github.com/sudo-self/http-request" data-color-scheme="no-preference: light_high_contrast; light: dark; dark: dark_high_contrast;" data-icon="octicon-star" data-size="large" aria-label="Star sudo-self/http-request on GitHub">Star</a></center>
          <h2 class="text-3xl text-center my-8"><code><pre>GET /echo HTTP/1.1
 <p id="url">https://deno-html-json.deno.dev/<span style="color: ${getRandomDarkColor()};">${getRandomWord().word}</span></p>
Accept: */*</pre></code><br>
          </h2></center>
          <center>
            <div></div>
            <div></div>
          </center>
          <div class="container mx-auto text-center" "text-pink-500">
           
          </div>
          
          <center>
          <div id="clock"></div>
          </center>
          <br>
          <center>
            <span class="text-gray-500"><a href="/server.ts">🙋🏿‍♂️</span><img src="https://api.iconify.design/fa6-solid:server.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1">server.ts</a>
          </center>
          <br>
          <center>
            <span class="text-yellow-500"><a href="/html">🙋🏻‍♀️</span><img src="https://api.iconify.design/logos:html-5.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1">html</a>
          </center>
          <br>
          <center>
            <span class="text-green-500"><a href="/json">🙋🏽<img src="https://api.iconify.design/logos:json.svg?color=%23669c35" alt="JSON Icon" class="inline h-5 w-5 mx-1">json</a></span>
          </center>
          <br>
          <center>
            <span class="text-blue"><a href="/text">🙋🏿‍♂️</span><img src="https://api.iconify.design/material-symbols:format-color-text-rounded.svg?color=%2353d5fd" alt="HTML Icon" class="inline h-5 w-5 mx-1">text</a>
          </center>
          <br>
            <center>
            <span class="text-gray-500"><a href="https://pub-090188261ed842a9ac0918908eb278e5.r2.dev/01%20codec%20ninja.mp3">🙋🏻‍♀️<img src="https://api.iconify.design/ic:sharp-speaker.svg" alt="JSON Icon" class="inline h-5 w-5 mx-1">audio</a></span>
          </center>
        </div>
 
        <center>
        <center>
            <audio controls class="my-4">
              <source src="https://pub-090188261ed842a9ac0918908eb278e5.r2.dev/01%20codec%20ninja.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </center>
          <center><blockquote>
              <p>Imagine you're at a party, and you ask a friend to message the DJ across the room. In HTTP, your browser sends a request to a server asking to drop the bass. The DJ processes your request and sends back the track. This exchange is the essence of an HTTP request.</p>
            </blockquote>

          <footer class="text-green-700 text-center mt-auto py-4 w-full">
            <p><span class="text-black" id="wordCount">63 /256</span></p>
          </footer>
        </center>
      </body>    
    </html>
  `;

  return new Response(response, { headers: { "content-type": "text/html; charset=UTF-8" } });
}

listenAndServe(":8000", handleRequest);


