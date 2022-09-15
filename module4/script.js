
(function () {
  const names = [
    "Yaakov",
    "John",
    "Jen",
    "jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "jim",
  ];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const firstLetter = name.charAt(0).toUpperCase();
    
    firstLetter === "J"
      ? byeSpeaker.sayGoodBye(name)
      : helloSpeaker.sayHello(name);
  }
})();
