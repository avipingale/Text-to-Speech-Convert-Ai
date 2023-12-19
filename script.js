function convertText() {
    const text = document.getElementById('inputText').value;
    const voice = document.getElementById('voiceSelect').value;

    const speech = new SpeechSynthesisUtterance();
    speech.text = text;

    const voices = speechSynthesis.getVoices();

    if (voice === 'male') {
        const selectedVoice = voices.find(voice => voice.name === 'Google UK English Male');
        speech.voice = selectedVoice ? selectedVoice : voices[0]; 
    } else if (voice === 'female') {
        const selectedVoice = voices.find(voice => voice.name === 'Google UK English Female');
        speech.voice = selectedVoice ? selectedVoice : voices[0]; 
    }

    speechSynthesis.speak(speech);

    
    speechSynthesis.onvoiceschanged = function() {
        const utterance = new SpeechSynthesisUtterance(text);
        const audio = new Audio(URL.createObjectURL(new Blob([utterance], { type: 'audio/mpeg' }))); 
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.style.display = 'block';
        downloadBtn.onclick = function() {
            const link = document.createElement('a');
            link.href = audio.src;
            link.download = 'speech_audio.mp3'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    };
    document.addEventListener('DOMContentLoaded', function() {
        var h1 = document.getElementById('typewriter');
        var text = h1.innerText;
        h1.innerText = ''; 
        var i = 0;
        function typeWriter() {
          if (i < text.length) {
            h1.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); 
          }
        }
        typeWriter();
      });
      
function toggleTitleText() {
    var titleHeader = document.getElementById('titleHeader');
    var textArray = ["TEXT-TO-SPEECH-AI", "The Ai"];
    var currentIndex = 0;
  
    setInterval(function() {
      titleHeader.innerText = textArray[currentIndex];
      currentIndex = (currentIndex + 1) % textArray.length;
    }, 2000); 
  }
  
  toggleTitleText(); 
  
      
}
