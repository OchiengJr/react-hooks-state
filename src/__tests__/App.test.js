test("Test passing", async () => {
  // Add a comment to explain the purpose of the test
  // This test always passes and resolves with true
  
  // Using async/await syntax for cleaner code
  const result = await new Promise((resolve, reject) => {
    resolve(true);
  });

  // Assertion to ensure the test passes
  expect(result).toBe(true);
});
