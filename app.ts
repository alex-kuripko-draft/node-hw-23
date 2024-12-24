// Task 1
function createDelayedPromise(value: string, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

async function processPromisesSequentially() {
  const result1 = await createDelayedPromise('First result', 1000);
  console.log(result1);

  const result2 = await createDelayedPromise('Second result', 2000);
  console.log(result2);

  const result3 = await createDelayedPromise('Third result', 1500);
  console.log(result3);
}

processPromisesSequentially();


// Task 2
function processStringWithDelay(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(str.toUpperCase()), Math.random() * 1000);
  });
}

async function processArrayStrings(arr: string[]) {
  const promises = arr.map((str) => processStringWithDelay(str));
  const results = await Promise.all(promises);
  console.log('Processed Results:', results);
}

processArrayStrings(['hello', 'world', 'async', 'await']);


// Task 3
function createPromiseWithError(value: string, delay: number, shouldReject = false): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`Error in: ${value}`);
      } else {
        resolve(value);
      }
    }, delay);
  });
}

async function processPromisesWithErrorHandling() {
  const promises = [
    createPromiseWithError('Task 1', 1000),
    createPromiseWithError('Task 2', 1500, true),
    createPromiseWithError('Task 2', 1500, true),
    createPromiseWithError('Task 3', 2000),
  ];

  try {
    const results = await Promise.all(promises);
    console.log('All Results:', results);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

processPromisesWithErrorHandling();


// Task 4
function createDynamicDelayPromise(value: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), value);
  });
}

async function processDynamicDelays(arr: number[]) {
  const promises = arr.map((num) => createDynamicDelayPromise(num));
  const results = await Promise.all(promises);
  console.log('All Results:', results);
}

processDynamicDelays([1000, 500, 2000, 1500]);