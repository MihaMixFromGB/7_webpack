const ITEM_TYPE = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo,
    title: drawTitle
}

function drawImage(item) {
    const imgElement = document.createElement('div');
    imgElement.classList = "gallery-item__image";
    imgElement.style.backgroundImage = `url(${item.resource})`;

    return imgElement;
}
function drawAudio(item) {
    const audioElement = document.createElement("audio");
    audioElement.classList = "gallery-item__audio";
    audioElement.src = item.resource;
    audioElement.controls = true;

    return audioElement;
}
function drawVideo(item) {
    const videoElement = document.createElement("video");
    videoElement.classList = "gallery-item__video";
    videoElement.src = item.resource;
    videoElement.controls = true;

    return videoElement;
}
function drawTitle(item) {
    const titleElement = document.createElement('p');
    titleElement.classList = "gallery-item__title";
    titleElement.textContent = item.title;

    return titleElement;
}

export function drawGalleryItem(item) {
    const container = document.createElement('div');
    container.classList = "gallery-item";

    const drawItem = ITEM_TYPE[item.type];
    container.appendChild(drawItem(item));

    container.appendChild(drawTitle(item));

    return container;
}