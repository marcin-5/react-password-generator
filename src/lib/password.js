function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    a[i] = a.splice((Math.random() * (i + 1)) << 0, 1, a[i])[0];
  }
  return a;
}

function getRandomChar(str) {
  return str ? str[(Math.random() * str.length) << 0] : "";
}

export function generatePassword(config) {
  const chars = {
    number: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special: "`!@#$%^&*<>()[]{}|;:,._-~+=?/\\\"'",
  };
  const result = [];
  const { size, ...data } = { lowercase: "on", ...config };
  const keys = Object.keys(data);

  // one char for every category specified in data
  Object.entries(data).forEach((i) => result.push(getRandomChar(chars[i[0]])));

  // complement up to length set in size
  while (result.length < Number(size)) {
    result.push(getRandomChar(chars[keys[(Math.random() * keys.length) << 0]]));
  }

  return shuffle(result).join("");
}
