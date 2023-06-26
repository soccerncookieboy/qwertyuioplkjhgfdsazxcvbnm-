x="0"
y="0"
draw_circle=""
draw_rect=""

var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak."
    recognition.start()
    console.log("AI has started")
}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
        document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;
        if(content=="Circle"){
            x = Math.floor(Math.random() *900)
            y = Math.floor(Math.random() *600)
            document.getElementById("status").innerHTML = "Stared drawing a circle"
            draw_circle = "set"
        }
        if(content=="rectangle"){
            x = Math.floor(Math.random() *900)
            y = Math.floor(Math.random() *600)
            document.getElementById("status").innerHTML = "Stared drawing a rectangle"
            draw_rect = "set"
        }
}
function setup(){
    Canvas = createCanvas(900,600)
}
function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random() *111)
        circle(x,y,radius)
        draw_circle=""
        document.getElementById("status").innerHTML = "Circle is drawn"
    }
    if(draw_rect == "set"){
        h = Math.floor(Math.random() *90)
        l = Math.floor(Math.random() *90)
        rect(x,y,l,h)
        draw_rect=""
        document.getElementById("status").innerHTML = "Rectangle is drawn"
    }
}