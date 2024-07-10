const imageSources = ['natue.1.jpeg','nature.2.jpeg','nature.2.jpg','nature.3.jpeg','nature.4.jpeg','nature.5.jpeg','nature.6.jpeg',
    'nature.7.jpeg','nature.9.jpeg','nature.10.jpeg','nature.11.jpeg'];

    function changeBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * imageSources.length);
        document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
    }

    // Change the background image every 5 seconds (1000 milliseconds)
    setInterval(changeBackgroundImage, 1000);