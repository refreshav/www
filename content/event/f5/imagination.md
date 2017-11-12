+++
banner = "images/event/f5/imagination/banner"
images = ["images/event/f5/imagination/banner.png"]
date = "2017-12-17T13:00:00-03:00"
PublishDate = "2017-06-01T19:00:00-03:00"
draft = false
#event_facebook = "https://www.facebook.com/events/336588213425907/"
event_location = "TBA, Annapolis Valley, NS"
project = "meetups"
event_sponsors = ["Innovacorp", "Acadia Entrepreneurship Centre"]
title = "f5://imagination"
topics = ["Art", "Makers", "Hardware Hacking"]
organizations = ["Refresh Annapolis Valley"]
people = ["Ian Mckay", "Max Caplan", "Michael Caplan"]
+++

f5://imagination is a pop up exhibit focused on digital creativity.  This one day temporary exhibit is seeking submissions from digital artists, makers, scratchers, computer scientists, engineers and pretendgineer, hardware hackers, lego robotics warriors, indy game developers, new media innovators, VR and AR pioneers...  digital builders of all shapes, sizes, and credentials.

We are accepting submissions in the following categories:

* Computer generated art
* Digital games
* Interactive story
* Digital gadgets and gizmos
* VR / AR environments
* Animation
* AI investigations
* Miscellaneous computer experiments

f5://imagination serves as a platform for digital artistic experimentation. It promotes exploration in all forms of new media art, providing the public with an opportunity to experience your innovative work. f5://imagination is committed to making this extraordinary form, at the intersection of art and technology, available to everyone.

Submissions are being accepted until midnight December 13.  To submit, fill out the below form.

<div style="margin:0px;padding:0px;overflow:hidden">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSco_QD5Lo5vCD_FDwCZT5BlUX78t9QbdeSWv4h4QYIyQ_Sy1g/viewform?embedded=true" frameborder="0" style="overflow:hidden;height:100vh;width:100%; border: 1px solid hsla(0,0%,4%,.25)">Loading...</iframe>
</div>




<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js" integrity="sha256-bXPU+HvtR3tP1IYHZVEFHzEZ9p5zkY8GLPnOnJXW67k=" crossorigin="anonymous"></script>
<script
   type="text/javascript"
   src="https://rawgit.com/IDMNYU/p5.js-speech/master/lib/p5.speech.js"
></script>

<script>

var isInit = 0;
var lines =  3;

var lineProps = [];
var lx = [];
var ly = [];

var myVoice = new p5.Speech();
var welcome = [];

function getIP(json) {
    welcome = [
        'Hello ' + json.ip + '. Annapolis Valley festival of computer based art. refresh imagination.  A digital art exhibit',
        'Hello ' + json.ip + '. Come explore digital imagination with us.  refresh imagination.  A digital art exhibit',
        'How do you express your creativity digitally? ' + json.ip + '?  refresh imagination.  A digital art exhibit'
    ];
    
    isInit++;
}

function setup() {
  var header = document.querySelector('main article header');

  canvas = createCanvas(header.offsetWidth, header.offsetHeight);
  canvas.parent(header);
  
  lines = Math.floor(random(3, 10));
  
  for (var li = 0; li < lines; li++) {
    lx[li] = [];
    ly[li] = [];
    lineProps[li] = {
        num: Math.floor(random(10, 500)),
        range: Math.floor(random(5, 20))
    };
  
    var w = random(0, width);
    var h = random(0, height);
  
    for ( var i = 0; i < lineProps[li].num; i++ ) {
      lx[li][i] = w;
      ly[li][i] = h;
    }
  }
  
  frameRate(30);
  isInit++;
}

function draw() {
  background('#0a0a0a');

  // Shift all elements 1 place to the left
  for ( var li = 0; li < lines; li++) {
      for ( var i = 1; i < lineProps[li].num; i++ ) {
        lx[li][i - 1] = lx[li][i];
        ly[li][i - 1] = ly[li][i];
      }
      
      // Put a new value at the end of the array
      lx[li][lineProps[li].num - 1] += random(-lineProps[li].range, lineProps[li].range);
      ly[li][lineProps[li].num - 1] += random(-lineProps[li].range, lineProps[li].range);
      
      // Constrain all points to the screen
      lx[li][lineProps[li].num - 1] = constrain(lx[li][lineProps[li].num - 1], 0, width);
      ly[li][lineProps[li].num - 1] = constrain(ly[li][lineProps[li].num - 1], 0, height);

  }

  // Draw a line connecting the points
  for ( var li = 0; li < lines; li++) {
    for ( var j = 1; j < lineProps[li].num; j++ ) {
        var val = j / lineProps[li].num * 204.0 + 51;
        stroke(val);
        line(lx[li][j - 1], ly[li][j - 1], lx[li][j], ly[li][j]);
    }
  }

}

var intervalId = setInterval(function(){

    if (isInit > 1) {
        clearInterval(intervalId);
        talk();
    }
    
}, 2000);


function talk() {
    var voices = [];
    
    for (var i = 0; i < myVoice.voices.length; i++) {
        if (myVoice.voices[i].lang.substr(0,2) == 'en') {
            voices.push(i);
        }
    }

    myVoice.setVoice(random(voices));
    myVoice.setRate(0.7);
    myVoice.speak(random(welcome));
}
</script>

<script src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
