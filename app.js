let secondHand = document.querySelector('#second-hand')
let minuteHand = document.querySelector('#minute-hand')
let hourHand = document.querySelector('#hour-hand')

const setDate = () => {
    const now = new Date()

    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secondDegrees = ((seconds/60)*360 + 90)
    const minuteDegrees = ((minutes/60)*360 + 90)
    const hoursDegrees = ((hours/12)*360 + 90)

    secondHand.style.transform = `rotateZ(${secondDegrees}deg)`
    minuteHand.style.transform = `rotateZ(${minuteDegrees}deg)`
    hourHand.style.transform = `rotateZ(${hoursDegrees}deg)`


    console.log(seconds)
}

setInterval(setDate,1000)