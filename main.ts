import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

function handleRequest(request) {
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

  const response = `
    <html>
      <head>
        <style>
          body {
            /* Gradient background */
            background-image: linear-gradient(to bottom right, #4F46E5, #8F8AE0);
            /* Ensure text is readable */
            color: white;
          }
          }
          blockquote {
            font-style: italic;
            text-align: center;
            background-color: #e0e0e0;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
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
          <h1 class="text-3xl text-center my-8"><code><pre>http request</pre></code></h1>
          <h3 class="text-xl text-center mb-4">calling a friend with a request&nbsp;🙋🏽🙋🏻‍♀️🙋🏿‍♂️</h3>

          <ol class="text-sm text-left mb-4">
            <li><strong class="text-gray-900">GET:</strong> Fetches data without altering it.</li>
            <li><strong class="text-gray-900">HEAD:</strong> Retrieves only the status line excluding the body content.</li>
            <li><strong class="text-gray-900">POST:</strong> Sends data, usually form submissions or file uploads.</li>
            <li><strong class="text-gray-900">PUT:</strong> Sets out to replace all of a resource. "Mr. Anderson"</li>
            <li><strong class="text-gray-900">DELETE:</strong> Removes all representations of a resource.</li>
            <li><strong class="text-gray-900">CONNECT:</strong> Establishes a tunnel to a server ___/___\\___</li>
            <li><strong class="text-gray-900">OPTIONS:</strong> Retrieves communication options</li>
            <li><strong class="text-gray-900">TRACE:</strong> >--(˚▽˚)--------------<</li>
          </ol>
     <center>
  <div></div>

  <div></div>
</div></center>
          <center><span class="text-gray-900"><a href="/server.ts">🙋🏿‍♂️</span><img src="https://api.iconify.design/fa6-solid:server.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1">server.ts</a></center>
          <br>
           <center><span class="text-yellow-500"><a href="/html">🙋🏻‍♀️</span><img src="https://api.iconify.design/logos:html-5.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1">html</a></center>
          <br>
          <center><span class="text-green-500"><a href="/json">🙋🏽<img src="https://api.iconify.design/logos:json.svg?color=%23669c35" alt="JSON Icon" class="inline h-5 w-5 mx-1">json</a></span></center>
        </div>
        <center>
           <div class="container mx-auto text-center" "text-pink-500">
            <blockquote>
              <p>Imagine you're at a party, and you ask a friend to message the dj across the room. In HTTP, your browser sends a request to a server asking to drop the bass. The dj processes your request and sends back the track. This exchange, is the essence of an HTTP request.</p>
            </blockquote>
          </div>
          <center>
            <audio controls class="my-4">
              <source src="https://pub-090188261ed842a9ac0918908eb278e5.r2.dev/01%20codec%20ninja.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </center>
          </center>
        <footer class="text-green-700 text-center mt-auto py-4 w-full">
        <p><span class="text-pink-900" id="wordCount">126 / 256</p></span>
        </footer>
      </body>
    </html>
  `;

  return new Response(response, { headers: { "content-type": "text/html; charset=UTF-8" } });
}

listenAndServe(":8000", handleRequest);




