
// function heart value count
function getValue(){

    let countHeart = parseInt(document.getElementById("count-heart").innerText)
    countHeart++ 

    document.getElementById("count-heart").innerText = countHeart

}

// function count coin
function getCountCoin(){
    let countCoin = parseInt(document.getElementById('count-coin').innerText)
    
    if(countCoin >=20){
        countCoin= countCoin - 20;
        document.getElementById('count-coin').innerText=countCoin
        return true;
    }
    else{
        alert('❌ You don’t have enough coins. To make a call, you need at least 20 coins.')
        return false;
    }
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

let coins = document.getElementById('count-coin')

for(let callButton of callButtons){
    callButton.addEventListener("click",function(e){
        e.preventDefault()

        if(getCountCoin()){

        let cardDiv = this.parentElement.parentElement

        let cardTitle = cardDiv.getElementsByClassName('service')[0].innerText
        let cardNumber = cardDiv.getElementsByClassName('mob-num')[0].innerText

        alert('📞 calling ' + cardTitle+ ' ' + cardNumber)


        // call history

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
        }

    })
}

// call history clear
clearBtn.addEventListener('click',function(e){
    e.preventDefault();

    callHistoryList.innerHTML='';
})


// copy and count

function getCountCopy(){
    let countCopy = parseInt(document.getElementById('count-copy').innerText)
    countCopy++
    
    document.getElementById('count-copy').innerText= countCopy
}

const copyButtons= document.getElementsByClassName('copy-btn')

for(const copyButton of copyButtons){
    copyButton.addEventListener('click',function(){

        getCountCopy();

        let div = this.parentElement.parentElement

        let copyValue = div.getElementsByClassName('mob-num')[0].innerText

        navigator.clipboard.writeText(copyValue)
        .then(() =>{
            alert('The number has been copied ' +copyValue)
        })
        .catch(() => {
            alert('copy failed')
        })
        
    })
}

