// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

import { Time } from "https://denopkg.com/burhanahmeed/time.ts@v2.0.1/mod.ts";

async function handleRequest(request) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/html")) {
        const html = `
            <html>
                <p><a style="color:green">html<b class="text-blue-500"></b><br><marquee style="1"><img src="https://api.iconify.design/logos:html-5.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1"></a></p>
            </html>`;
        return new Response(html, { headers: { "content-type": "text/html; charset=UTF-8" } });
    }

    if (pathname.startsWith("/json")) {
        const json = JSON.stringify({ "json": "what up deno!" });
        return new Response(json, { headers: { "content-type": "application/json; charset=UTF-8" } });
    }

    if (pathname.startsWith("/text")) {
        const text = "plain text, but u can call me txt";
        return new Response(text, { headers: { "content-type": "text/plain; charset=UTF-8" } });
    }

    const getRandomWord = () => {
        const words = ["text", "html", "json", "server", "playground"];
        const randomIndex = Math.floor(Math.random() * words.length);
        return { word: words[randomIndex], color: getRandomDarkColor() };
    };

    const getRandomDarkColor = () => {
        const darkColors = ["fff", "#fff", "#fff", "#fff", "#fff"];
        return darkColors[Math.floor(Math.random() * darkColors.length)];
    };

    const response = `
   
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>denodock</title>
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>

    /* deno dock style */
    
        .close-btn {
            padding: 10px 20px;
            background-color: gray-500;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        body {
            margin: 0;
            padding: 0;
        }

    
        header {
            background-color: gray-900;
            color: #fff;
            text-align: center;
            padding: 5px;
            width: 100%;
        }

        #myiFrame {
            border-radius: 20px;
            display: none; 
        } 
      
        #avatarContainer {
            text-align: center;
        
        }

        #avatarImage {
            margin-bottom: 20px;
        }
 
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 20px;
        }

       /* dock size */

        .grid-item {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 10px;
            border: 1px solid #000;
            border-radius: 5px;
            background-color: #fff;
            text-decoration: none;
            color: #000;
        }

       .grid-item img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
       

        /* dock on hover */
    
        .grid-item:hover {
            background-color: rgba(178, 165, 211, 0.8); 
            background-image: url('https://api.dicebear.com/8.x/adventurer/svg?seed=felix');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }

        h1 {
            margin-top: 50px; 
            font-size: 3rem; 
        }

         /* adjustment for mobile devices */

         @media (max-width: 768px) {
            .grid-container {
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            }
            .grid-item {
                font-size: 0.8rem;
            }
            h1 {
                font-size: 2rem;
            }
        } 

        
        footer {
            background-color: gray-900;
            color: #fff;
            text-align: center;
            padding: 5px;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
        }


       /* prevent time from being over iframe */

        timedisplay {
            top:50px;
            }

    </style>
<script async defer src="https://buttons.github.io/buttons.js"></script>    
</head>



<header>
    <nav>
        <ul>
            <li>
                <h1 class="fixed left-0 right-0 top-0 z-10 text-3xl text-center">
                    <code id="url">
                        deno.dev/<span id="word"></span> <!-- word rotation id=url -->
                    </code>
                </h1>
            </li>
        </ul>
    </nav>
    <div class="flex flex-col items-center">
    </div>
</header>



<!-------dicebear API ----------------->
<!-------tailwind CDN ----------------->

<body class="bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col justify-center items-center font-sans text-base bg-white">
    <img id="avatarImage" src="https://api.dicebear.com/8.x/adventurer/svg?seed=Felix" height="240px" width="300px" alt="Deno Image">
    <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
        <div>
<!--time-date--><div id="timeDisplay" class="text-gray-400 z-20"></div>
              <div class="flex flex-col items-center">
<!-"/" close iframe--->   <a href="/" onclick="updateIframe('https://deno-html-json.deno.dev')">
<!-- svg---->   <img src="https://api.iconify.design/formkit:down.svg?color=%23f5ec00" alt="Caretdown Icon" class="h-6 w-6">
               </a>
         </div>

<!-----Random word and color logic------->

<script>
    const getRandomWord = () => {
        const words = ["htmx", "dock", "json", "server", "playground"];      //can change words here//
        const randomIndex = Math.floor(Math.random() * words.length);
        return { word: words[randomIndex], color: getRandomDarkColor() };
    };

    const getRandomDarkColor = () => {
        const darkColors = ["#25b387", "#25b387", "#25b387", "#25b287", "#25b387"];  //made them green x1 per word//
        return darkColors[Math.floor(Math.random() * darkColors.length)];
    };

    function updateWord() {
        const wordElement = document.getElementById('word');
        const randomWordObject = getRandomWord();
        const randomWord = randomWordObject.word;
        const randomColor = randomWordObject.color;

        wordElement.textContent = randomWord;
        wordElement.style.color = randomColor;
    }

    updateWord();

    setInterval(updateWord, 800); //time for words to rotate 1000= one second//
</script>

<!--------date time ---------------------->

<script>
    function updateTime() {
        const currentTime = new Date();
        const options = { hour12: false, month: 'long', day: 'numeric' };
        const dateString = currentTime.toLocaleDateString('en-US', options);
        const timeString = currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        const timeDisplay = document.getElementById('timeDisplay');
        timeDisplay.textContent = dateString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ' + timeString;
    }

    updateTime(); //display the time

    setInterval(updateTime, 1000); // Update time every second
</script>




 <script>
         
        function closeIframe() {
            var iframe = document.getElementById('myIframe');
            iframe.style.display = 'none';
        }
 </script>


   <script>
        function generateAvatar() {
            const avatarImage = document.getElementById('avatarImage');
            const seed = generateRandomSeed();
            avatarImage.src = 'https://api.dicebear.com/8.x/adventurer/svg?seed=' + seed;
        }

        function generateRandomSeed() {
            const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let seed = '';

            for (let i = 0; i < 10; i++) {
                seed += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            return seed;
        }
    </script>


<!-------iframe logic----------->

<script>

    function updateIframe(url) {
        document.getElementById('myiFrame').src = url;
    }
</script>

   

<!------- iframe hide on start with empty src= ""  --------------->

    <center><iframe id="myiFrame" src="" style="background-color: white;" name="myiFrame" scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="450px" width="450px" allowfullscreen></iframe></center>
            </a>


 <!----- 5 dock apps css class grid-items------App labels place in span------------->
 
   <div class="grid-item">
            <a href="#" onclick="updateIframe('https://nes.jessejesse.com')">
                <img src="https://api.iconify.design/mdi:nintendo-game-boy.svg?color=%2300f900" alt="YouTube Icon">
                <span></span>
            </a>
  <div class="grid-item">
            <a href="#" onclick="updateIframe('https://tunnel.jessejesse.com')">
                <img src="https://api.iconify.design/skill-icons:cloudflare-dark.svg?color=%23aaaaaa" alt="HTML Icon">
                <span></span>
            </a> 
 <div class="grid-item">
            <a href="#" onclick="updateIframe('https://www.google.com/search?igu=1')">
                <img src="https://api.iconify.design/logos:google-icon.svg?color=%2300f900" alt="HTML Icon">
                <span></span>
            </a>
    <div class="grid-item">
            <a href="#" onclick="updateIframe('https://random.jessejesse.com')">
                <img src="https://api.iconify.design/game-icons:chat-bubble.svg?color=%231a0a53" alt="YouTube Icon">
                <span></span>
            </a>
    <div class="grid-item">
            <a href="#" onclick="updateIframe('https://www.youtube.com/embed/CSPlobUn6A0?si=70EReCd3C8cjvock')">
                <img src="https://api.iconify.design/openmoji:youtube.svg" alt="YouTube Icon">
                <span></span>
            </a>

<!-----this button to generate new avatar ------------------------------->


    <div class="grid-item">
            <a href="#" onclick="generateAvatar()">
                <img src="https://api.iconify.design/logos:deno.svg?color=%23aaaaaa" alt="deno Icon">
                <span>deno.dev</span>
            </a>
     </div>

<!-----iframe logic do not touch --------------------------------------->

<script>

    function updateIframe(url) {
        document.getElementById('myiFrame').src = url;
    }
</script>
 
</body>
</html>

<script>
    function openRandomRoom() {
        window.open('https://random-room.vercel.app', '_blank');
    }
</script>

<script>

    function updateIframe(path) {
        const iframe = document.getElementById('myiFrame');
        if (path) {
            iframe.src = path;
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    }
</script>

<!---------footer---------------------------->

 <a class="github-button" href="https://github.com/sudo-self/http-request" data-color-scheme="no-preference: light; light: light; dark: light_high_contrast;" data-icon="octicon-star" data-size="large" aria-label="Star sudo-self/http-request on GitHub">Star</a><footer class="text-center">
    <p>
        <a href="/" class="text-gray-400">denodock.deno.dev&nbsp;&copy2024</a>
    </p>
</footer>

<!---------END html----------------------------->

        </html>
    `;

    //main.ts

    return new Response(response, { headers: { "content-type": "text/html; charset=UTF-8" } });
}

listenAndServe(":8000", handleRequest);
