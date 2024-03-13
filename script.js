function speak()
{
    let sync  = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(`${textbox.value}`);
    sync.speak(voice);
}