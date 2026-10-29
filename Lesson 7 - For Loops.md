# Lesson 7 - For Loops

In programming we use loops to repeat code, which makes our programs shorter and easier to change. We have already seen one loop in p5.js: the `draw()` function runs over and over.

Imagine we want to draw a row of rectangles like this:

```javascript
rect(50, 350, 100, 100);
rect(200, 350, 100, 100);
rect(350, 350, 100, 100);
rect(500, 350, 100, 100);
rect(650, 350, 100, 100);
```

This isn't too bad with 5 rectangles, but what if you wanted to fill the entire screen?

## For Loops

A for loop uses a pattern to repeat code a set number of times. To write one, we need three things:

- **Initial value** - what value does the pattern start at?
- **Condition** - what is the "rule" to keep the pattern going? This must become `false` at some point.
- **Pattern** - how much does the value increase or decrease each time?

In the example above, only the x-value changes:

- **Initial value** - x starts at 50
- **Condition** - x is less than or equal to 650
- **Pattern** - x increases by 150

Here is the general format, and our example written as a for loop:

```javascript
// general format (i is a general name, always use descriptive names)
for (let i = initialValue; condition; pattern) {

}

// our example
for (let xValue = 50; xValue <= 650; xValue += 150) {
  rect(xValue, 350, 100, 100);
}
```

To understand how the loop works, follow the `xValue` variable:

1. It begins with a value of 50.
2. The loop checks the condition: is `xValue <= 650`? Yes, so it runs the code in the curly braces.
3. At the end of the curly braces it applies the pattern (adds 150).
4. It checks the condition again. Yes, so it runs the code again.
5. This repeats until the answer is **no**, and the loop stops.

Play around with the values of the loop. See if you can make many smaller rectangles.

## Using the Counter Variable

You can put as much code as you like inside the curly braces (like if statements), and you can use the counter variable for anything, not just position.

```javascript
for (let xValue = 0; xValue < width; xValue += 50) {
  // the further right, the more red
  fill(xValue / 3, 0, 0);
  rect(xValue, 100, 50, 50);
  // the counter can also be used in other shapes
  line(xValue, 200, width / 2, height);
}
```

## A Broken Loop

Here is another example, but there's something wrong with it:

```javascript
for (let xValue = 50; xValue > 650; xValue += 150) {
  rect(xValue, 350, 100, 100);
}
```

Nothing is drawn. The condition `xValue > 650` is `false` from the very start, so the loop never runs. The condition must begin as `true` and become `false` at some point.
