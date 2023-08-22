let filenames = [
    "abagnale.png",
    "amc.png",
    "befake.png",
    "catfriend.png",
    "chamber.png",
    "discord.png",
    "dva.png",
    "dvaAbility.png",
    "dvaPhone.png",
    "dvatablet.png",
    "genji.png",
    "imsg.png",
    "misisonselect.png",
    "missionhistory.png",
    "modeconfirm.png",
    "modeselect.png",
    "muchado.png",
    "projL.png",
    "rein.png",
    "rlteam.png",
    "spotify.png",
]

const body = document.querySelector(".gallery-body")

len = filenames.length

while(len !== 0){
    let rand = Math.floor(Math.random() * (filenames.length))
    const galleryElement = document.createElement("img")
    galleryElement.classList.add("gallery-element")
    galleryElement.src = `../assets/gallery/${filenames[rand]}`
    body.appendChild(galleryElement)
    filenames = filenames.slice(0, rand).concat(filenames.slice(rand+1))
    len--
}