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

  if (pathname.startsWith("/image")) {
  // Base64 encoded image data
    const base64ImageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAQAAABFABhkAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5gENCzgzZ9mRXgAABkhJREFUaN7tm1tsFFUYx38z222hpeVa5LKUpFw0gKm0i5IooA9AQ4yaKBBJTCBq9EF48MEXMGpM5IUQUoNiNAIPaqAxEU2Ui9EEDIRuW6mAyEWKFuTSQku729u2+/kwu4fT3S2dWeheyP7n5Zsz38z5/nPOdy7fOccAAAGDabxAJWU8hIv0Rh/XOM1B9nERMQAwwjRGsYo3KSM31TY6QJBTVFFNwKKCIMWyVfySifDLNikWwBDI5yPesqpTiA4ChFL9r4eAwSiKCJdDP1W8S8AQg7VUMQqgiT3sp5GeVFs6BNzMZAUrmWqR6WQ9XyIzpN4qJZ8sFlPIkCtHlogvUsGOyzTkbekREWmSp1NunNNrifxrEemWDSbLrJaqmiOprjGOcZg9lpBHpclcgNv8RH+q7XIM4SC3LbHMZBKAn/OptiohXCRgCRNNcixuwVTblBC6I11FjplqU+4NhpIynMgdZImkG7JE0g1ZIumGLJF0Q5ZIuuGBIZJjT83NCmYNCEoYhAhwiRM0I1Hak1iMByMm3SDEIU4xgZXkI4BBgL3cislvBC8ymRBg0Md+zg5tojVXbJKpd51UFsi+mEhMSILSLnWySUoG6FbIL9IlobjRm6C8LshUOalSOuTZOPnNkkal0SJPDmqXR5rCWvdQtQxyKKSc9/mKhSq1mM08wwhtgB39FjTzu7ofRUUcrTImKvlvO+VxP3zExVNsV+Z4eWLIN3o5rk2sF1ixqAHwkq/kelqTQwSgnA8oBsCjmTA46jTj5mp/30IRXiUH8dmKJth0dh1BOhHAJF97fSkv8Sn6nE3ojJlA99MLwHkuMCGcNpH5XByg5WGOkm9SZ8uqBIic5D38GOTgZR2zwqm5LGU3nZpeN5s5EhXYl3CQo5V65Vf5ePl2gNZjjFXyGS4NF5E2joSDMIc4wk5mhtPLmcIFTa+fPzg8yDdC1PCaCv1XUES7emawgBHqzhcJ+AyBe/SR3/heyUVMdvBmHc1KnsM07ckYzUO6bFas++Ds/ynJcFS8TVqjOp4y7cl0VV3hOvXJIiIJvnebWiWPwKs1EhWMU/IpriWLSOKo0ZoGL2PCkosFuFV6Lf50IHL30jqheclsSsLSOMpVagc1tvNKoNWyi1zWMF/9qYMci3p+jQamK/MraABgBqVK4yon04PIy9pdIIZIAB/PhWU3FewihF7JoJ4W27klzUfirUse1/oIL2MBN17VhQo1dKcfkXj4U2u8S5kJjNc8pM12H5JUIvGG9S1aLzGWcuARrWu8xF/pQSREK9fUFYij0UOtatlcPI5JueYhNdx0kNswOns3G/lZ1fgbcXVqaVXdXzkl2iSrjzpHi4HDSCTE5SEX9M7SqIh4WKQNVW458pCUR1F0cwt5hSnq7hyNmUSknxo1+XKzhNHqiY+25BLR";
  
 // Decode base64 data
    const rawImageData = atob(base64ImageData.split(",")[1]);
    const imageBytes = new Uint8Array(rawImageData.length);

    for (let i = 0; i < rawImageData.length; i++) {
      imageBytes[i] = rawImageData.charCodeAt(i);
    }

    // Create a response with image data
    return new Response(imageBytes, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  }

  if (pathname.startsWith("/text")) {
    const text = "This is plain text. I like to keep thinds simple around here";
    return new Response(text, { headers: { "content-type": "text/plain; charset=UTF-8" } });
}

  const response = `
    <html>
      <head>
       <script async defer src="https://buttons.github.io/buttons.js"></script>
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
          
     <center>
  <div></div>

  <div></div>
</div></center>
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
          <center><span class="text-gray-900"><a href="/text">🙋🏻‍♀️</span><img src="https://api.iconify.design/material-symbols:format-color-text-rounded.svg?color=%2353d5fd" alt="HTML Icon" class="inline h-5 w-5 mx-1">text</a></center>
          <br>
           <center><span class="text-gray-900"><a href="/server.ts">🙋🏿‍♂️</span><img src="https://api.iconify.design/fa6-solid:server.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1">server.ts</a></center>
          <br>
           <center><span class="text-yellow-500"><a href="/html">🙋🏻‍♀️</span><img src="https://api.iconify.design/logos:html-5.svg?color=%23669c35" alt="HTML Icon" class="inline h-5 w-5 mx-1">html</a></center>
          <br>
          <center><span class="text-green-500"><a href="/json">🙋🏽<img src="https://api.iconify.design/logos:json.svg?color=%23669c35" alt="JSON Icon" class="inline h-5 w-5 mx-1">json</a></span></center>
        </div>

        <center>
        <footer class="text-green-700 text-center mt-auto py-4 w-full">
        <center><a class="github-button" href="https://github.com/sudo-self/http-request" data-color-scheme="no-preference: light_high_contrast; light: dark; dark: dark_high_contrast;" data-icon="octicon-star" data-size="large" aria-label="Star sudo-self/http-request on GitHub">Star</a></center>
        <p><span class="text-pink-900" id="wordCount">126 / 256</p></span>
        </footer>
      </body>
    </html>
  `;

  return new Response(response, { headers: { "content-type": "text/html; charset=UTF-8" } });
}

listenAndServe(":8000", handleRequest);




