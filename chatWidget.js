let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Widget</title>
    <style>
        * {box-sizing: border-box;}
        .container{
            position: fixed;
            bottom: 23px;
            right: 28px;  
        }
        .open-button {
          background-color: #333;
          border-radius:50%;
          padding: 18px 20px;
          border: none;
          cursor: pointer;
        }
        .open-button img{
            width: 45px;
            height: 45px;
        }
        .pop-up-box{
            width: 200px;
            height: 300px;
            /* background: #c26a6a; */
            position: absolute;
            transition: 0.2s ease all;
            top: -310px;
            left: -100px;
            border-radius: 10px;
            box-shadow: 2px 2px 10px 3px #d2d2d2;
            padding: 10px;
        }
        .message-icons{
            margin: 80px 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .pop-up-box h2{
            margin: 10px;
        }
        .message-icons img{
            width: 60px;
        }
    </style>
</head>
<body>
    

    <div class="container">
        <button class="open-button" id="toggleBtn">
            <!-- <img src="./icons/chat.png" alt="Chat"> -->
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#25d366" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
        </button>

        <div class="pop-up-box" id="popUpBox">
            <h2>Send Message On</h2>
            <div class="message-icons">
                <div>
                    <a target="_blank" href="https://wa.me/4915258782576">
                        <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#0099FF" d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/></svg>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="m.me/abiturma">
                        <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#075e54" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <script>
        let btn = document.querySelector('#toggleBtn');
        let popUpBox = document.querySelector('#popUpBox');
        let toggler = true;

        btn.addEventListener('click', (e) => {
            if(toggler){
                popUpBox.style.display = 'none';
                toggler = false;
            }else{
                popUpBox.style.display = 'block';
                toggler = true;
            }
        })
    </script>
</body>
</html>
`;

document.write(html);
