let z = 0
let w = 0
let x = 'x'
let y = 'o'
let arr = ['','','','','','','','','']
let rest = document.getElementById('restart')



// --------------Победная--------------
let cdd = function(){
    if (arr[0]+arr[1]+arr[2]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_1.innerHTML = 'o'
        block_2.innerHTML = 'o' 
        block_3.innerHTML = 'o'
        rest.style.display = 'block'
        }
    if (arr[3]+arr[4]+arr[5]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_4.innerHTML = 'o'
        block_5.innerHTML = 'o' 
        block_6.innerHTML = 'o'
        rest.style.display = 'block'
        }
    if (arr[6]+arr[7]+arr[8]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_7.innerHTML = 'o'
        block_8.innerHTML = 'o' 
        block_9.innerHTML = 'o'
        rest.style.display = 'block'
        }
    if (arr[0]+arr[3]+arr[6]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_1.innerHTML = 'o'
        block_4.innerHTML = 'o' 
        block_7.innerHTML = 'o'
        rest.style.display = 'block'
        }
    if (arr[1]+arr[4]+arr[7]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_2.innerHTML = 'o'
        block_5.innerHTML = 'o' 
        block_8.innerHTML = 'o'
        rest.style.display = 'block'
        }
    if (arr[2]+arr[5]+arr[8]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_3.innerHTML = 'o'
        block_6.innerHTML = 'o' 
        block_9.innerHTML = 'o'
        rest.style.display = 'block'
        }
    if (arr[0]+arr[4]+arr[8]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_1.innerHTML = 'o'
        block_5.innerHTML = 'o' 
        block_9.innerHTML = 'o'
        rest.style.display = 'block'
        }
    if (arr[2]+arr[4]+arr[6]===0){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_3.innerHTML = 'o'
        block_5.innerHTML = 'o' 
        block_7.innerHTML = 'o'
        rest.style.display = 'block'
        }

    if (arr[0]+arr[1]+arr[2]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_1.innerHTML = 'x'
        block_2.innerHTML = 'x' 
        block_3.innerHTML = 'x'
        rest.style.display = 'block'
        }
    if (arr[3]+arr[4]+arr[5]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_4.innerHTML = 'x'
        block_5.innerHTML = 'x' 
        block_6.innerHTML = 'x'
        rest.style.display = 'block'
        }
    if (arr[6]+arr[7]+arr[8]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_7.innerHTML = 'x'
        block_8.innerHTML = 'x' 
        block_9.innerHTML = 'x'
        rest.style.display = 'block'
        }
    if (arr[0]+arr[3]+arr[6]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_1.innerHTML = 'x'
        block_4.innerHTML = 'x' 
        block_7.innerHTML = 'x'
        rest.style.display = 'block'
        }
    if (arr[1]+arr[4]+arr[7]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_2.innerHTML = 'x'
        block_5.innerHTML = 'x' 
        block_8.innerHTML = 'x'
        rest.style.display = 'block'
        }
    if (arr[2]+arr[5]+arr[8]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_3.innerHTML = 'x'
        block_6.innerHTML = 'x' 
        block_9.innerHTML = 'x'
        rest.style.display = 'block'
        }
    if (arr[0]+arr[4]+arr[8]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_1.innerHTML = 'x'
        block_5.innerHTML = 'x' 
        block_9.innerHTML = 'x'
        rest.style.display = 'block'
        }
    if (arr[2]+arr[4]+arr[6]===3){
        block_counter.forEach((pusto)=>{pusto.innerHTML = ' '})
        block_3.innerHTML = 'x'
        block_5.innerHTML = 'x' 
        block_7.innerHTML = 'x'
        rest.style.display = 'block'
        }

    if(arr[0]+arr[1]+arr[2] 
        +arr[3]+arr[4]+arr[5]
        +arr[6]+arr[7]+arr[8]===4
        ){
        // alert('No winner...')
        block_counter.forEach((pusto)=>{pusto.innerHTML = '-'})  
        rest.style.display = 'block'             
        }    
    
}


// -------------Счетчик--------------------
let block_counter = document.querySelectorAll('div.block');
console.log(block_counter)

block_counter.forEach((block_counter_click)=>{
    block_counter_click.addEventListener('click', count)
    
    function count(){
        if (block_counter_click.innerHTML === ''){
            z = z+1
        } 
    }

});



// ----------------------Работа с блоками----------------------

(function stop(){

let block_1_event = document.getElementById('block_1')

block_1_event.addEventListener('click', add_1)

function add_1(){
    w = z/2
    console.log(arr)
    
    if (block_1.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_1.innerHTML = x
            arr[0]=1
        }
        else {block_1.innerHTML = y
            arr[0]=0}

        console.log(arr)
        cdd()
    } 
};


let block_2_event = document.getElementById('block_2')

block_2_event.addEventListener('click', add_2)

function add_2(){
    w = z/2
    console.log(arr)
    
    if (block_2.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_2.innerHTML = x
            arr[1]=1
        }
        else {block_2.innerHTML = y
            arr[1]=0}

        console.log(arr)
        cdd()
    } 
};

let block_3_event = document.getElementById('block_3')

block_3_event.addEventListener('click', add_3)

function add_3(){
    w = z/2
    console.log(arr)
    
    if (block_3.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_3.innerHTML = x
            arr[2]=1
        }
        else {block_3.innerHTML = y
            arr[2]=0}

        console.log(arr)
        cdd()
    } 
};


let block_4_event = document.getElementById('block_4')

block_4_event.addEventListener('click', add_4)

function add_4(){
    w = z/2
    console.log(arr)
    
    if (block_4.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_4.innerHTML = x
            arr[3]=1
        }
        else {block_4.innerHTML = y
            arr[3]=0}

        console.log(arr)
        cdd()
    } 
};


let block_5_event = document.getElementById('block_5')

block_5_event.addEventListener('click', add_5)

function add_5(){
    w = z/2
    console.log(arr)
    
    if (block_5.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_5.innerHTML = x
            arr[4]=1
        }
        else {block_5.innerHTML = y
            arr[4]=0}

        console.log(arr)
        cdd()
    } 
};


let block_6_event = document.getElementById('block_6')

block_6_event.addEventListener('click', add_6)

function add_6(){
    w = z/2
    console.log(arr)
    
    if (block_6.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_6.innerHTML = x
            arr[5]=1
        }
        else {block_6.innerHTML = y
            arr[5]=0}

        console.log(arr)
        cdd()
    } 
};


let block_7_event = document.getElementById('block_7')

block_7_event.addEventListener('click', add_7)

function add_7(){
    w = z/2
    console.log(arr)
    
    if (block_7.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_7.innerHTML = x
            arr[6]=1
        }
        else {block_7.innerHTML = y
            arr[6]=0}

        console.log(arr)
        cdd()
    } 
};


let block_8_event = document.getElementById('block_8')

block_8_event.addEventListener('click', add_8)

function add_8(){
    w = z/2
    console.log(arr)
    
    if (block_8.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_8.innerHTML = x
            arr[7]=1
        }
        else {block_8.innerHTML = y
            arr[7]=0}

        console.log(arr)
        cdd()
    } 
};


let block_9_event = document.getElementById('block_9')

block_9_event.addEventListener('click', add_9)

function add_9(){
    w = z/2
    console.log(arr)
    
    if (block_9.innerHTML === ''){
        
        if (Number.isInteger(w)){
            block_9.innerHTML = x
            arr[8]=1
        }
        else {block_9.innerHTML = y
            arr[8]=0}

        console.log(arr)
        cdd()
    } 
};

})()




