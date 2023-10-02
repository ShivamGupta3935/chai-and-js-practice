// document.getElementById('pixel1').addEventListener('click', function(e){
//         alert("image 1 is clicked")
// },false)

// document.getElementById("images").addEventListener('click',function(e){
//     console.log("clicked in ul item");
// },false)

// document.getElementById('pixel3').addEventListener('click',function(e){
//      console.log("image 3 clicked");
//      e.stopPropagation();
// })

//for stop any function redirection
// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
// },false)

//in real life example
document.querySelector('#images').addEventListener('click',function(e){
    // console.log(e);
    console.log(e.target.tagName);
    // const targetEle = e.target.parentNode
    // const targetEle = e.target.tagName


    //correct but when we click ul then he delete all li item
    // targetEle.remove()

    //so we are check 
    if (e.target.tagName === 'IMG') {
        const removeItem = e.target.parentNode
        removeItem.remove()
    }

    // //second method 
    // let removeItem = e.target.parentNode
    // removeItem.parentNode.removeChild(removeItem)


},false)
