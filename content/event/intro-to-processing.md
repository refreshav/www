+++
banner = "images/event/intro-to-processing/banner"
images = ["images/event/intro-to-processing/banner-medium.jpg"]
date = "2018-04-21T12:30:00-03:00"
PublishDate = "2018-01-01T19:00:00-03:00"
draft = false
event_facebook = "https://www.facebook.com/events/578963472460851/"
event_eventbright = "https://www.eventbrite.ca/e/bring-your-visual-art-alive-with-computers-intro-to-processing-tickets-44960256337"
event_location = "Acadia Entrepreneurship Centre Rural Innovation Centre, 24 University Avenue, Wolfville, NS"
project = "hoist"
event_sponsors = ["launchbox", "Acadia Entrepreneurship Centre"]
title = "Bring your Visual Art Alive with Computers - Intro to Processing"
topics = ["Processing"]
+++

Do you enjoy painting or drawing?  In this Hoist workshop, teens will learn how to program a computer to build generative art.  We will learn how how simple math equations can be used to create beautiful and engaging outcomes.  No coding experience?  No worries.  This fun introductory workshop is meant for the beginner coder with a visual arts interest.  Using OpenProcessing, participants will be exposed to an international community of coder-artists making a wide range of digital creations. 

Build your skills for <a href="/event/scratchfest-2018">#ScratchFest - a digital builders competition</a>.  June 23 to 24.  Over $500 in prizes to be won.

We'll order some pizza to keep us going - come hungry.

First time Hoisters need to get a parent or guardian to <a href="https://form.jotform.ca/71164477795267">fill out the consent form</a>.


<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js" integrity="sha256-GDuv15eqQpLqWvLkRnd+EvvsHLngEUnerY5BDSYfLuM=" crossorigin="anonymous"></script>
<script
   type="text/javascript"
   src="https://rawgit.com/IDMNYU/p5.js-speech/master/lib/p5.speech.js"
></script>

<script>
var system = [];
var myVoice = new p5.Speech();
var isInit = 0;
var welcome = [];

function getIP(json) {
    welcome = [
        'Hello ' + json.ip + '. Bring your Visual Art Alive with Computers - Introduction to Processing',
        'Bring your Visual Art Alive with Computers - Intro to Processing. ' + json.ip + ' Come build with us'
    ];
    
    isInit++;
}

function setup() {
  var header = document.querySelector('main article header');
  
  if (Math.random() > .4) {
  
      canvas = createCanvas(header.offsetWidth, header.offsetHeight);
      canvas.parent(header);
    
      background(0)
    
      system.push(new ParticleSystem(createVector(width/1.5, 20)));
      system.push(new ParticleSystem(createVector(width/3, 20)));
  }
  
  isInit++;
}

function draw() {
  background(51);
  
  for (var i = 0; i < system.length; i++) {
  
    system[i].addParticle();
    system[i].run();
  }
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

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