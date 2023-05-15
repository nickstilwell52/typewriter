const sentence = "hello there from lighthouse labs";
let i = 0;

const typewriter = function(sentence, index) {
  if (i < sentence.length) {
    process.stdout.write(sentence.charAt(index));
    setTimeout(() => typewriter(sentence,++i), 50);
    }
    if (i === sentence.length) {
      process.stdout.write('\n');
  }
};
typewriter(sentence, i);