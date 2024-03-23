import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

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
        const words = ["text", "html", "json", "server", "pdf"];
        const randomIndex = Math.floor(Math.random() * words.length);
        return { word: words[randomIndex], color: getRandomDarkColor() };
    };

    const getRandomDarkColor = () => {
        const darkColors = ["#7b1fa2", "#512da8", "#4527a0", "#311b92", "#673ab7"];
        return darkColors[Math.floor(Math.random() * darkColors.length)];
    };

    const response = `
   
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deno HTML JSON</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
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

        .container {
            text-align: center;
            margin-top: 1px;
        }

        #time {
            font-size: 24px;
            margin-top: 20px;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

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

        .grid-item:hover {
            background-color: #708090;
        }

        .grid-item img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }

        h1 {
            margin-top: 50px; 
            font-size: 3rem; 
        }

    </style>
</head>
<body class="bg-gradient-to-br from-indigo-400 to-violet-700 flex flex-col justify-center items-center font-sans text-base bg-white"> 
    <img src="https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/ddddeno%20copy.png" height="400px" width="400px" alt="Deno Image">
    <h5 class="text-2xl"><code id="url">deno-html-json.deno.dev/<span id="word"></span></code></h5>
    <center><iframe id="myiFrame" src="" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="450px" width="450px" allowfullscreen></iframe></center>
 <div class="grid-item">
            <a href="/" onclick="updateIframe('https://maps/google.com')">
                <img src="https://api.iconify.design/game-icons:barracks-tent.svg" alt="HTML Icon">
                <span>Home</span>
            </a>
  <div class="grid-item">
            <a href="#" onclick="updateIframe('https://tyson.jessejesse.com')">
                <img src="https://api.iconify.design/game-icons:mailed-fist.svg?color=%231a0a53" alt="HTML Icon">
                <span>Games</span>
            </a> 
    <div class="grid-item">
            <a href="#" onclick="updateIframe('https:////clock.sudo-self.com')">
                <img src="https://api.iconify.design/game-icons:alarm-clock.svg?color=%230056d6" alt="Globe Icon">
                <span>Clock</span>
            </a>
      
    <div class="grid-item">
            <a href="#" onclick="updateIframe('https://random.jessejesse.com')">
                <img src="https://api.iconify.design/game-icons:chat-bubble.svg?color=%231a0a53" alt="YouTube Icon">
                <span>Chat</span>
            </a>
    <div class="grid-item">
            <a href="#" onclick="updateIframe('https://www.youtube.com/embed/dQw4w9WgXcQ')">
                <img src="https://api.iconify.design/openmoji:youtube.svg" alt="YouTube Icon">
                <span>YouTube</span>
    </div>
  </div>
<script>
    function updateIframe(url) {
        document.getElementById('myiFrame').src = url;
    }
</script>

</body>
</html>

<script>
    function openRandomRoom() {
        window.open('https://twitter.com', '_blank');
    }
</script>

<script>
    function openRandomRoom() {
        window.open('https://random-room.vercel.app', '_blank');
    }
</script>

<script>
    const getRandomWord = () => {
        const words = ["text", "html", "json", "server", "pdf"];
        const randomIndex = Math.floor(Math.random() * words.length);
        return { word: words[randomIndex], color: getRandomDarkColor() };
    };

    const getRandomDarkColor = () => {
        const darkColors = ["#7b1fa2", "#512da8", "#4527a0", "#311b92", "#673ab7"];
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

    // Initial update
    updateWord();

    // Update word periodically
    setInterval(updateWord, 1000);

    function openGoogleMaps() {
        window.open('https://www.google.com/maps', '_blank');
    }

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
</body>
</html>



        </html>
    `;

    return new Response(response, { headers: { "content-type": "text/html; charset=UTF-8" } });
}

listenAndServe(":8000", handleRequest);
