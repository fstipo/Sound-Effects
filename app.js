const loadItems = () => {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'gasp'];

  const stopPlayingSounds = () => {
    sounds.forEach((sound) => {
      const playingSound = document.getElementById(sound);
      playingSound.pause();
      sound.currentTime = 0;
    });
  };

  sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
      stopPlayingSounds();
      document.getElementById(sound).play();
    });
    document.querySelector('.container').append(btn);
  });
};

window.addEventListener('load', loadItems);
