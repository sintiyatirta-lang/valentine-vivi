const app = document.getElementById("app");
let burgerCount = 0;
let balloonCount = 0;
let tulipCount = 0;
/* SAKURA GLOBAL ULTRA LUCU */
function startSakura(){
    setInterval(()=>{
        let sakura=document.createElement("div");
        sakura.className="sakura";
        sakura.style.left=Math.random()*100+"vw";
        sakura.style.animationDuration=(4+Math.random()*4)+"s";
        document.body.appendChild(sakura);

        setTimeout(()=>{ sakura.remove(); },8000);
    },500);
}

startSakura();

function playSound(id){
    document.getElementById(id).play();
}

function confettiPink(){
    playSound("confettiSound");
    confetti({
        particleCount: 200,
        spread: 100,
        colors: ['#ff69b4','#ffc0cb','#ff1493']
    });
}

function nextPage(content){
    app.innerHTML = `<div class="page active">${content}</div>`;
}

/* PAGE 1 */
nextPage(`
<h1>Vivi 💗</h1>
<h2>Mau jadi Valentine aku? 🥺</h2>
<button onclick="yesValentine()">Ya 💕</button>
<button id="noBtn" onclick="moveNo()">Tidak 😝</button>
`);

function moveNo(){
    const btn = document.getElementById("noBtn");
    btn.style.top = Math.random()*80 + "%";
    btn.style.left = Math.random()*80 + "%";
}

function yesValentine(){
    playSound("clickSound");
    nextPage(`
    <h2>Yeeayyy kamu mauu 😍</h2>
    <button onclick="page2()">Lanjut 💖</button>
    `);
}

/* THANK YOU PAGE */
function page2(){
    nextPage(`
    <h2>Terimakasih banyak sudah sejauh ini bersamaku 💗</h2>
    <button onclick="page3()">Lanjut</button>
    `);
}

function page3(){
    nextPage(`
    <h2>Makasih sudah mau jadi Valentine aku sayangkuu 💕</h2>
    <button onclick="gameBurger()">Main Game 🍔</button>
    `);
}

/* GAME BURGER */
function gameBurger(){
    burgerCount = 0;
    nextPage(`
    <h2>Beri makan capybara 10 burger 🍔</h2>
    <div class="capybara">🦫💕</div>
    <div id="burger" class="burger">🍔</div>
    <p id="count">0 / 10</p>
    `);

    const burger = document.getElementById("burger");
    burger.onclick = () => {
    burgerCount++;
    playSound("clickSound");

    document.querySelector(".capybara").innerText="🦫😋";
    setTimeout(()=>{
        document.querySelector(".capybara").innerText="🦫💕";
    },300);

    document.getElementById("count").innerText = burgerCount+" / 10";

    if(burgerCount>=10){
        confettiPink();
        setTimeout(()=>{
            nextPage(`<h2>Selamat Hari Valentine Cantikkuu 💗</h2>
            <button onclick="letterPage()">Buka Surat 💌</button>`);
        },1500);
    }
};

/* LETTER PAGE */
function letterPage(){
    nextPage(`
    <h1>💌</h1>
    <button onclick="balloonGame()">Buka Surat</button>
    `);
}

/* BALLOON GAME */
function balloonGame(){
    balloonCount = 0;
    nextPage(`<h2>Pecahkan balon love sebanyak mungkin 💕</h2>
    <p id="score">0</p>`);

    for(let i=0;i<20;i++){
        let balloon=document.createElement("div");
        balloon.className="balloon";
        balloon.innerText="💗";
        balloon.style.top=Math.random()*90+"%";
        balloon.style.left=Math.random()*90+"%";
        balloon.onclick=()=>{
        balloon.style.transform="scale(1.5)";
            balloon.remove();
            balloonCount++;
            playSound("popSound");
            document.getElementById("score").innerText=balloonCount;
        };
        app.appendChild(balloon);
    }

    setTimeout(()=>{
        if(balloonCount>=10){
            confettiPink();
            nextPage(`<h2>Cantikkuu hebat banget 😍</h2>
            <button onclick="tulipGame()">Game Selanjutnya 🌷</button>`);
        }else{
            nextPage(`<h2>Yuk main lagi sayang 💕</h2>
            <button onclick="balloonGame()">Ulang</button>`);
        }
    },10000);
}

/* TULIP GAME */
function tulipGame(){
    tulipCount=0;
    nextPage(`<h2>Petik 10 bunga tulip untuk capybara 🌷</h2>
    <p id="tulipScore">0 / 10</p>`);

    for(let i=0;i<15;i++){
        let tulip=document.createElement("div");
        tulip.className="tulip";
        tulip.innerText="🌷";
        tulip.style.top=Math.random()*90+"%";
        tulip.style.left=Math.random()*90+"%";
        tulip.onclick=()=>{
        tulip.style.transform="scale(1.5)";
            tulip.remove();
            tulipCount++;
            playSound("clickSound");
            document.getElementById("tulipScore").innerText=tulipCount+" / 10";
            if(tulipCount>=10){
                confettiPink();
                setTimeout(()=>{
                    finalLove();
                },1500);
            }
        };
        app.appendChild(tulip);
    }
}

/* FINAL LETTER */
function finalLove(){
    function finalLove(){
    nextPage(`
    <h2>Surat Cinta Untuk Vivi 💗</h2>
    <p style="font-size:18px; line-height:1.6">
    Aku sayang kamu lebih dari apapun di dunia ini 💕<br><br>
    Aku sangat beruntung punya kamu.<br>
    Segala doa terbaik selalu untuk aku dan kamu.<br>
    Aku harap kita bisa terus bercanda, tertawa, dan bahagia bersama.<br><br>
    Aku akan selalu mendukungmu,<br>
    menjadi support system nomor 1 kamu selamanya 💖<br><br>
    Terimakasih sudah ada sampai saat ini sayangkuuu 🍓🌸
    </p>
    <button onclick="robloxPage()">Halaman Terakhir 🎮</button>
    `);
}

/* ROBLOX PAGE */
function robloxPage(){
    nextPage(`
    <h2>Main Roblox bareng aku malam Valentine ini yuk 🎮💕</h2>
    <h3>Kirim pesan ke aku sekarang yaa 😘</h3>
    `);

    for(let i=0;i<20;i++){
        let sakura=document.createElement("div");
        sakura.className="sakura";
        sakura.style.left=Math.random()*100+"vw";
        sakura.style.animationDuration=(3+Math.random()*5)+"s";
        document.body.appendChild(sakura);
    }
}

