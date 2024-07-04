---
layout: archive
title: "Gallery"
permalink: /gallery/
---

![Image 1](/images/DGB-top.jpg)
![Image 2](/images/DGB-Deposit.jpg)
<!-- ![Image 3](image3.jpg)
![Image 4](image4.jpg)
![Image 5](image5.jpg)
![Image 6](image6.jpg) -->

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

.image-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    width: 80%;
    max-width: 1000px;
    margin: 20px 0;
}

.image-container img {
    width: 100%;
    height: auto;
    display: block;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.image-container img:hover {
    transform: scale(1.05);
    border-color: #777;
}
</style>

