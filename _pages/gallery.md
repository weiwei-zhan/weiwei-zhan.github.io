---
layout: archive
title: "Gallery"
permalink: /gallery/
---

<div class="image-wall">
    <img src="2023Fall.jpg" alt="Image 1">
    <img src="Graduation-Ceremony.jpg" alt="Image 2">
    <!-- <img src="image3.jpg" alt="Image 3">
    <img src="image4.jpg" alt="Image 4">
    <img src="image5.jpg" alt="Image 5">
    <img src="image6.jpg" alt="Image 6"> -->
</div>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
    flex-direction: column;
}

.image-wall {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    width: 80%;
    max-width: 1000px;
    margin: 20px 0;
}

.image-wall img {
    width: 100%;
    height: auto;
    display: block;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.image-wall img:hover {
    transform: scale(1.05);
    border-color: #777;
}
</style>