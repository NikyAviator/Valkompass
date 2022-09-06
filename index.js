const prompt = require('prompt-async');

async function example_async() {
  // Available only with `prompt-async`!
  // Start the prompt.
  prompt.start();

  // Get one property from the user: the `userName`
  const { userName } = await prompt.get(['userName']);

  // Log the results.
  console.log(`Ditt namn är: ${userName}`);
}

async function error_handling_async() {
  try {
    await example_async();
  } catch (error) {
    console.error('An error occurred: ', error);
  }
}

error_handling_async();
