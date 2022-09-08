import { drawGalleryItem } from "./item"
import items from "./items";

document.addEventListener("DOMContentLoaded", loadImages)

function loadImages() {
    const gallery = document.getElementById("gallery");

    items.map(item => {
        gallery.appendChild(drawGalleryItem(item))
    })
}