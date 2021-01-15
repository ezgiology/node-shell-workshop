process.stdout.write("prompt > ");
const pwd = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(`${process.cwd()}`);
    process.stdout.write("\nprompt > ");
    return;
  }
  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});

module.exports = {
  pwd,
};
