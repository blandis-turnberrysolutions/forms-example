export async function load() {
  console.log(`loading`);
  await fakeApiCall();
}

export async function save(values) {
  console.log(`saving ${values}`);
  await fakeApiCall();
}

export async function print(values) {
  console.log(`printing ${values}`);
  await fakeApiCall();
}

function fakeApiCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}
