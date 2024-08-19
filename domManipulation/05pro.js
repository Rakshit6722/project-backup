var arr = [
    {
        dp: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
    }
]
var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `      <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
document.querySelector(".stories").innerHTML = clutter;
document.querySelector(".stories").addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display = "block";
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none";
    },2000);
})