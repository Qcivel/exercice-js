let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


import { v4 as uuidv4 } from 'uuid';

uuidv4(); // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'

console.log(uuidv4());