
// heart value count
function getValue(){

    let countHeart = parseInt(document.getElementById("count-heart").innerText)
    countHeart++ 

    document.getElementById("count-heart").innerText = countHeart

}

let hearts = document.getElementsByClassName('heart')

for(let heart of hearts){
    heart.addEventListener("click",function(e){
        e.preventDefault();
        getValue();
    })
}

// call alert and history

let callButtons = document.getElementsByClassName('call-btn')

let callButton = document.getElementById('callHistoryList')

let clearBtn = document.getElementById('clearHistory')

for(let callButton of callButtons){
    callButton.addEventListener("click",function(e){
        e.preventDefault()

        let cardDiv = this.parentElement.parentElement

        let cardTitle = cardDiv.getElementsByClassName('service')[0].innerText
        let cardNumber = cardDiv.getElementsByClassName('mob-num')[0].innerText

        alert('📞 calling ' + cardTitle+ ' ' + cardNumber)

        let date = new Date()
        let currentTime = date.toLocaleTimeString();

        let historyDiv = document.createElement('div')

        historyDiv.innerHTML = `
                <div  class="flex justify-between items-center w-[290px] bg-gray-100 p-2 mb-3">
                    <div>
                        <h2 class="font-bold">${cardTitle} </h2>
                        <p class="text-[#5c5c5c] text-sm">${cardNumber}</p>
                    </div>
                    <p class="text-[#5c5c5c] text-sm">${currentTime}</p>

                </div>
        
        `
        callHistoryList.appendChild(historyDiv)

    })
}

// call history clear
clearBtn.addEventListener('click',function(e){
    e.preventDefault();

    callHistoryList.innerHTML='';
})

