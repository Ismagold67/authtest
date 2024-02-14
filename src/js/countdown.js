export function countDown(){
    const targetDate = new Date('February 16, 2024 17:00:00').getTime();

    const interval = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeDifference = 0//targetDate - currentDate

    if (timeDifference <= 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'Tempo esgotado!';
        document.querySelector('.carde').remove()
        document.querySelector('.popup').style.display = 'flex' 
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;}
    }, 1000);
}