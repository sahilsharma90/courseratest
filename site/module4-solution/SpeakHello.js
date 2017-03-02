var speakWord = "Hello";
(function(window){
var hellospeaker = {};
hellospeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}
window.hellospeaker = helloSpeaker;
})(window);
console.log("its working");