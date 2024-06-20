let scoreA = document.getElementById("score");
let best = document.getElementById("best");
let worse = document.getElementById("worse");
let score = 0;
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore')) : 0;
let worseScore = localStorage.getItem('worseScore') ? parseInt(localStorage.getItem('worseScore')) : 0;
let card1X = 0;
let card2X = 0;
let card3X = 0;
let cardY = 100;
let changeViewer = 7;
let choose = false;
let waitingTime = 1000;
let shufflingTime = 500;
let shufflingNumber = 5;
let orderOfCards = 213;


(function() {
    setInterval(function() {
        if (score > bestScore) {
            best.innerHTML = score;
            localStorage.setItem('bestScore', score);
            bestScore = score;
        } else {
            best.innerHTML = bestScore;
        }
    }, 100);
})();

(function() {
    setInterval(function() {
        if (score < worseScore) {
            worse.innerHTML = score;
            localStorage.setItem('worstScore', score);
            worseScore = score;
        } else {
            worse.innerHTML = worseScore;
        }
    }, 100);
})();

document.getElementById("card2").onclick = function() {
    if (choose) {
        card2.style.transition = "transform3s ease";
        card2.style.transform = `translate(${card2X}px, 0px) rotateY("180deg")`;
        setTimeout(function() {
            card2.innerHTML = `<img id='img' src='joker.jpg'>`;
        }, 100);

        setTimeout(function() {
            card2.style.transform = `translate(${card2X}px, 0px) rotateY("0deg")`;
            card2.style.transition = "3s ease";
            setTimeout(function() {
                card2.innerHTML = `<div class="inside">
                    <div class="cube"></div>
                </div>`;
            }, 100);
        }, 500);
        setTimeout(function() {
            score = 0;
            scoreA.innerHTML = score;
            rotateForTheWin();
        }, 1000);
    }
}

document.getElementById("card3").onclick = function() {
    if (choose) {
        card3.style.transition = "transform3s ease";
        card3.style.transform = `translate(${card3X}px, 0px) rotateY("180deg")`;
        setTimeout(function() {
            card3.innerHTML = `<img id='img' src='queenofhearts.jpg'>`;
        }, 100);

        setTimeout(function() {
            card3.style.transform = `translate(${card3X}px, 0px) rotateY("0deg")`;
            card3.style.transition = "3s ease";
            setTimeout(function() {
                card3.innerHTML = `<div class="inside">
                    <div class="cube"></div>
                </div>`;
            }, 100);
        }, 500);
        setTimeout(function() {
            score = 0;
            scoreA.innerHTML = score;
            rotateForTheWin();
        }, 1000);
    }
}


function rotateForTheWin() {
    if (choose) {
        card1.style.transform = `translate(${card1X}px, 0px) rotateY(180deg)`;
        card1.style.transition = "transform 0.5s ease";
        setTimeout(function() {
            card1.innerHTML = `<img id='img' src='joker.jpg'>`;
            console.log("Set innerHTML of card1");
        }, 100);
        setTimeout(function() {
            card1.style.transform = `translate(${card1X}px, 0px) rotateY(0deg)`;
            card1.style.transition = "transform 0.5s ease";
            setTimeout(function() {
                card1.innerHTML = `<div class="inside">
                    <div class="cube" onclick="rotate(card1, 'joker.jpg')"></div>
                </div>`;
            }, 100);
        }, 500);
        shufflingNumber *= 1.5;
        console.log("this is", waitingTime);
        console.log(shufflingTime);
        console.log(shufflingNumber);
        if (score == 0) {
            waitingTime = 1000;
            shufflingTime = 500;
            shufflingNumber = 5;
        }
        setTimeout(function() {
            mix();
        }, 1000);
        }
    }


function restart() {
    score = 0;
    scoreA.innerHTML = score;
    card1.style.transform = `translate(${card1X}px, 0px) rotateY(180deg)`;
    card1.style.transition = "transform 0.5s ease";
    setTimeout(function() {
        card1.innerHTML = `<img id='img' src='joker.jpg'>`;
        console.log("Set innerHTML of card1");
    }, 100);
    setTimeout(function() {
        card1.style.transform = `translate(${card1X}px, 0px) rotateY(0deg)`;
        card1.style.transition = "transform 0.5s ease";
        setTimeout(function() {
            card1.innerHTML = `<div class="inside">
                <div class="cube" onclick="rotate(card1, 'joker.jpg')"></div>
            </div>`;
        }, 100);
    }, 500);
    setTimeout(function() {
        mix();
    }, 800);
}

function addDifficulty() {
    waitingTime *= 0.65;
    shufflingTime *= 0.65;
    shufflingNumber *= 1.5;
    console.log(waitingTime);
    console.log(shufflingTime);
    console.log(shufflingNumber);
}


function mix() {
    let shuffleCount = 0;
    function shuffle() {
        if (orderOfCards === 123) {
            let shuffle1 = Math.floor(Math.random() * 5) + 1;
            if (shuffle1 === 1) {
                card1X = 0;
                card2X = 200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, ${cardY}px)`;
                card2.style.transform = `translate(${card2X}px, ${cardY}px)`;
                card3.style.transform = `translate(${card3X}px, ${cardY}px)`;
                orderOfCards = 132;
            } else if (shuffle1 === 2) {
                card1X = 200;
                card2X = -200;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 213;
            } else if (shuffle1 === 3) {
                card1X = 400;
                card2X = -200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 231;
            } else if (shuffle1 === 4) {
                card1X = 200;
                card2X = 200;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 312;
            } else if (shuffle1 === 5) {
                card1X = 400;
                card2X = 0;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 321;
            }
        }
        if (orderOfCards === 132) {
            let shuffle1 = Math.floor(Math.random() * 5) + 1;
            if (shuffle1 === 1) {
                card1X = 0;
                card2X = 0;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 123;
            } else if (shuffle1 === 2) {
                card1X = 200;
                card2X = -200;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 213;
            } else if (shuffle1 === 3) {
                card1X = 400;
                card2X = -200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 231;
            } else if (shuffle1 === 4) {
                card1X = 200;
                card2X = 200;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 312;
            } else if (shuffle1 === 5) {
                card1X = 400;
                card2X = 0;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 321;
            }
        }
        if (orderOfCards === 213 || orderOfCards === 231) {
            let shuffle1 = Math.floor(Math.random() * 5) + 1;
            if (shuffle1 === 1) {
                card1X = 0;
                card2X = 200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 132;
            } else if (shuffle1 === 2) {
                card1X = 0;
                card2X = 0;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 123;
            } else if (shuffle1 === 3) {
                card1X = 400;
                card2X = -200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 231;
            } else if (shuffle1 === 4) {
                card1X = 200;
                card2X = 200;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 312;
            } else if (shuffle1 === 5) {
                card1X = 400;
                card2X = 0;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 321;
            }
        }
        if (orderOfCards === 231) {
            let shuffle1 = Math.floor(Math.random() * 5) + 1;
            if (shuffle1 === 1 && card1X === 200) {
                card1X = 0;
                card2X = 200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 132;
            } else if (shuffle1 === 2) {
                card1X = 0;
                card2X = 0;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 123;
            } else if (shuffle1 === 3) {
                card1X = 200;
                card2X = -200;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 213;
            } else if (shuffle1 === 4) {
                card1X = 200;
                card2X = 200;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 312;
            } else if (shuffle1 === 5) {
                card1X = 400;
                card2X = 0;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 321;
            }
        }
        if (orderOfCards === 312) {
            let shuffle1 = Math.floor(Math.random() * 5) + 1;
            if (shuffle1 === 1) {
                card1X = 0;
                card2X = 200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 132;
            } else if (shuffle1 === 2) {
                card1X = 200;
                card2X = -200;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 213;
            } else if (shuffle1 === 3) {
                card1X = 400;
                card2X = -200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 231;
            } else if (shuffle1 === 4) {
                card1X = 0;
                card2X = 0;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 123;
            } else if (shuffle1 === 5) {
                card1X = 400;
                card2X = 0;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 321;
            }
        }
        if (orderOfCards === 321) {
            let shuffle1 = Math.floor(Math.random() * 5) + 1;
            if (shuffle1 === 1) {
                card1X = 0;
                card2X = 200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 132;
            } else if (shuffle1 === 2) {
                card1X = 200;
                card2X = -200;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 213;
            } else if (shuffle1 === 3) {
                card1X = 400;
                card2X = -200;
                card3X = -200;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 231;
            } else if (shuffle1 === 4) {
                card1X = 200;
                card2X = 200;
                card3X = -400;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 312;
            } else if (shuffle1 === 5) {
                card1X = 0;
                card2X = 0;
                card3X = 0;
                card1.style.transform = `translate(${card1X}px, 0px)`;
                card2.style.transform = `translate(${card2X}px, 0px)`;
                card3.style.transform = `translate(${card3X}px, 0px)`;
                orderOfCards = 123;
            }
        }
        

        setTimeout(function() {
            shuffleCount++;
            if (shuffleCount <= shufflingNumber) {
                choose = false;
                setTimeout(z = 1, waitingTime);
                shuffle();
                console.log("shuffleCount: " + shuffleCount);
                console.log(orderOfCards);
            } else {
                choose = true;
                console.log("Shuffling complete. Player's turn to find the joker.");
                console.log(orderOfCards);
                document.getElementById("card1").onclick = function() {
                    rotateForTheWin();
                    score++;
                    scoreA.innerHTML = score;
                };
            }
        }, shufflingTime);

    }


    shuffle();
    }
