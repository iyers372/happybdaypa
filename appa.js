const images = {
    "A": { src: "imgs/appaA.jpg", title: "A for Arey ya sushi messed up the brio settings again" },
    "B": { src: "imgs/appaB.jpg", title: "B for 'Basanti aadha cup coffee aur ek cream cracker" },
    "C": { src: "imgs/appaC.jpg", title: "C for COME OFF IT NOW" },
    "D": { src: "imgs/appaD.jpg", title: "D for DAAAANKEY" },
    "E": { src: "imgs/appaE.jpg", title: "E for Eh I didn't do that ha" },
    "F": { src: "imgs/appaF.jpg", title: "F for five minutes im in the bathroom" },
    "G": { src: "imgs/appaG.jpg", title: "G for GO TO THE GYM" },
    "H": { src: "imgs/appaH.jpg", title: "H for HAALLOOO" },
    "I": { src: "imgs/appaI.jpg", title: "I for ID10T" },
    "J": { src: "imgs/appaJ.jpg", title: "J for Jhaadu and jack reacher" },
    "K": { src: "imgs/appaK.jpg", title: "K for Kannamma / Kannappa / Kutti pappu" },
    "L": { src: "imgs/appaL.jpg", title: "L for legos with rahul" },
    "M": { src: "imgs/appaM.jpg", title: "M for 'mom is waiting up for mads I'm going to sleep'" },
    "N": { src: "imgs/appaN.jpg", title: "N for no." },
    "O": { src: "imgs/appaO.jpg", title: "O for oh no." },
    "P": { src: "imgs/appaP.jpg", title: "P for photoshop me standing next to me" },
    "Q": { src: "imgs/appaQ.jpg", title: "Q for queen's gambit" },
    "R": { src: "imgs/appaR.jpg", title: "R for RAJU AISA NAHI CHALANE KA" },
    "S": { src: "imgs/appaS.jpg", title: "S for 'send bank statement'" },
    "T": { src: "imgs/appaT.jpg", title: "T for temple on Saturdays" },
    "U": { src: "imgs/appaU.jpg", title: "U for 'Uhhh.. what did mom say??'" },
    "V": { src: "imgs/appaV.jpg", title: "V for VIDYAAAAAAA" },
    "W": { src: "imgs/appaW.jpg", title: "W for WHAT ARE THE OPTIONS?????" },
    "X": { src: "imgs/appaX.jpg", title: "X for Xerox leke koi aa raha hai" },
    "Y": { src: "imgs/appaY.jpg", title: "Y for 'yeah I left my phone at home'" },
    "Z": { src: "imgs/appaZ.jpg", title: "Z for ZZZZZZZZ" }
};


const invalidImage = {
    src: "imgs/inclasslol.png",
    title: "back to kindergarten"
};

setTimeout(() => {
    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
}, 3000);


function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
    const titleElement = document.getElementById("imageTitle");

    if (images[input]) {
        imgElement.src = images[input].src;
        titleElement.textContent = images[input].title;
    } else {
        imgElement.src = invalidImage.src;
        titleElement.textContent = invalidImage.title;
    }

    imgElement.style.display = "block";
}


// TypeText Animation for "Happy Birthday Appa!!"
function typeTextAnimation(text, speed, callback) {
    let i = 0;
    const typeTextElement = document.getElementById("typeText");
    
    function type() {
        if (i < text.length) {
            typeTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                deleteTextAnimation(callback);
            }, 5000); // Wait for 5 seconds before deleting
        }
    }
    type();
}

// Delete Text Animation
function deleteTextAnimation(callback) {
    let typeTextElement = document.getElementById("typeText");
    let text = typeTextElement.innerHTML;
    let i = text.length;

    function deleteLetter() {
        if (i > 0) {
            typeTextElement.innerHTML = text.substring(0, i - 1);
            i--;
            setTimeout(deleteLetter, 50);
        } else {
            callback(); // Call the next function after deletion
        }
    }
    deleteLetter();
}

// Show main content after the type animation is done
function showMainContent() {
    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
}

// Start the animation
document.addEventListener("DOMContentLoaded", function () {
    typeTextAnimation("Happy Birthday Appa!!", 100, showMainContent);
});

// Function to display image and title
function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
    const titleElement = document.getElementById("imageTitle");

    if (images[input]) {
        imgElement.src = images[input].src;
        titleElement.textContent = images[input].title;
        imgElement.style.display = "block";
    } else {
        imgElement.src = invalidImage.src;
        titleElement.textContent = invalidImage.title;
        imgElement.style.display = "block";
    }
}

// Event listener for button click
document.getElementById("submitButton").addEventListener("click", displayImage);