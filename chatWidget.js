let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Widget</title>
    <style>
        * { 
            box-sizing: border-box; 
            font-family: sans-serif;
        }
        .container{
            position: fixed;
            bottom: 28px;
            right: 28px;  
        }
        .open-button {
          background-color: #333;
          border-radius:50%;
          padding: 12px 14px;
          border: none;
          cursor: pointer;
        }
        .pop-up-box{
            width: 300px;
            height: 250px;
            background: url(./background.png);
            background-size: cover;
            position: absolute;
            transition: 0.2s ease all;
            top: -260px;
            left: -210px;
            border-radius: 10px;
            box-shadow: 2px 2px 10px 3px #d2d2d2;
            padding: 10px;
            color: #fff;
        }
        .message-icons{
            margin: 20px 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .message-icons img,.container img{
            width: 42px;
        }
        
    </style>
</head>
<body>
    

    <div class="container">
        <button class="open-button" id="toggleBtn">
            <img src="./icons/chat.png" alt="Chat">
        </button>

        <div class="pop-up-box" id="popUpBox">
            <p>
                HALLO! 👋 <br><br>
                Hast du Fragen? Wir helfen gerne! <br><br>
                Schreibe uns über WhatsApp oder Facebook Messenger deine Frage.
            </p>
            <div class="message-icons">
                <div>
                    <!-- WhatsApp -->
                    <a target="_blank" href="https://wa.me/4915258782576">
                        <img src="./icons/whatsapp.png" alt="Whatsapp">
                    </a>
                </div>
                <div>
                    <!-- Messenger -->
                    <a target="_blank" href="https://m.me/abiturma">
                        <img src="./icons/messenger.png" alt="Messenger">
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