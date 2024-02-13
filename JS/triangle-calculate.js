/**
 ** Onjective: Get base & height of a triangle. Calculate the area by using the provided formula. And then display the area.
 ** step-1: get base value of the triangle
 ** step-2: added an id in the base input field
 ** step-3: use getElementId to access the input field
 ** step-4: get value from the input field. (value is string now)
 ** step-5: convert the string value to number using parseFloat.
 */

//* 1. --> Triangle
function calculateTriangleArea() {
  //* get triangle base value
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseText);

  //* get triangle height value
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const triangleHeight = parseFloat(triangleHeightText);

  //* calculate triangle area
  const area = 0.5 * triangleBase * triangleHeight;

  //*  display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area');
  if (Number.isNaN(area)) {
    triangleAreaSpan.innerText = 'Please provide number value in cm';
    document.getElementById('triangle-secret-text').innerText = '';
  } else {
    triangleAreaSpan.innerText = area;
    document.getElementById('triangle-secret-text').innerText = 'cm²';
  }
}

//* 2. --> Rectangle
function calculateRectangleArea() {
  //* get rectangle width value
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthText);

  //* get rectangle lengtht value
  const rectangleLengthInput = document.getElementById('rectangle-length');
  const rectangleLengthText = rectangleLengthInput.value;
  const rectangleLength = parseFloat(rectangleLengthText);

  //* calculate rectangle area
  const area = rectangleWidth * rectangleLength;

  //*  display rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  if (Number.isNaN(area)) {
    rectangleAreaSpan.innerText = 'Please provide number value in cm';
    document.getElementById('rectangle-secret-text').innerText = '';
  } else {
    rectangleAreaSpan.innerText = area;
    document.getElementById('rectangle-secret-text').innerText = 'cm²';
  }
}

//* 3. --> Parallelogram
function calculateParallelogramArea() {
  //* get parallelogram base value
  const parallelogramBaseInput = document.getElementById('parallelogram-base');
  const parallelogramBaseText = parallelogramBaseInput.value;
  const parallelogramBase = parseFloat(parallelogramBaseText);

  //* get parallelogram height value
  const parallelogramHeightInput = document.getElementById(
    'parallelogram-height'
  );
  const parallelogramHeightText = parallelogramHeightInput.value;
  const parallelogramHeight = parseFloat(parallelogramHeightText);

  //* calculate parallelogram area
  const area = parallelogramBase * parallelogramHeight;

  //*  display parallelogram area
  const parallelogramAreaSpan = document.getElementById('parallelogram-area');
  if (Number.isNaN(area)) {
    parallelogramAreaSpan.innerText = 'Please provide number value in cm';
    document.getElementById('parallelogram-secret-text').innerText = '';
  } else {
    parallelogramAreaSpan.innerText = area;
    document.getElementById('parallelogram-secret-text').innerText = 'cm²';
  }
}

//* 4. --> Rhombus
function calculateRhombusArea() {
  //* get rhombus d₁ value
  const rhombusD1Input = document.getElementById('rhombus-d₁');
  const rhombusD1Text = rhombusD1Input.value;
  const rhombusD1 = parseFloat(rhombusD1Text);

  //* get rhombus d₂ value
  const rhombusD2Input = document.getElementById('rhombus-d₂');
  const rhombusD2Text = rhombusD2Input.value;
  const rhombusD2 = parseFloat(rhombusD2Text);

  //* calculate rhombus area
  const area = 0.5 * rhombusD1 * rhombusD2;

  //*  display rhombus area
  const rhombusAreaSpan = document.getElementById('rhombus-area');
  if (Number.isNaN(area)) {
    rhombusAreaSpan.innerText = 'Please provide number value in cm';
    document.getElementById('rhombus-secret-text').innerText = '';
  } else {
    rhombusAreaSpan.innerText = area;
    document.getElementById('rhombus-secret-text').innerText = 'cm²';
  }
}


//* 5. --> Pentagon
function calculatePentagonArea() {
  //* get pentagon-p value
  const pentagonPInput = document.getElementById('pentagon-p');
  const pentagonPText = pentagonPInput.value;
  const pentagonP = parseFloat(pentagonPText);

  //* get pentagon-b value
  const pentagonBInput = document.getElementById('pentagon-b');
  const pentagonBText = pentagonBInput.value;
  const pentagonB = parseFloat(pentagonBText);

  //* calculate pentagon area
  const area = 0.5 * pentagonP * pentagonB;

  //*  display pentagon area
  const pentagonAreaSpan = document.getElementById('pentagon-area');
  if (Number.isNaN(area)) {
    pentagonAreaSpan.innerText = 'Please provide number value in cm';
    document.getElementById('pentagon-secret-text').innerText = '';
  } else {
    pentagonAreaSpan.innerText = area;
    document.getElementById('pentagon-secret-text').innerText = 'cm²';
  }
}


//* 6. --> Ellipse
function calculateEllipseArea() {
  //* get ellipse-a value
  const ellipseAInput = document.getElementById('ellipse-a');
  const ellipseAText = ellipseAInput.value;
  const ellipseA = parseFloat(ellipseAText);

  //* get ellipse-b value
  const ellipseBInput = document.getElementById('ellipse-b');
  const ellipseBText = ellipseBInput.value;
  const ellipseB = parseFloat(ellipseBText);

  //* calculate ellipse area
  const area = Math.PI * ellipseA * ellipseB;

  //*  display ellipse area
  const ellipseAreaSpan = document.getElementById('ellipse-area');
  if (Number.isNaN(area)) {
    ellipseAreaSpan.innerText = 'Please provide number value in cm';
    document.getElementById('ellipse-secret-text').innerText = '';
  } else {
    ellipseAreaSpan.innerText = area;
    document.getElementById('ellipse-secret-text').innerText = 'cm²';

  }
}

//! ----------------------------- Fully Dynamic Way --------------------

function calculateParallelogramArea() {
  const base = getInputValueById('parallelogram-base');
  const height = getInputValueById('parallelogram-height');
  area = base * height;
  return setInnerTextById('parallelogram-area', area,'parallelogram-secret-text');
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputText = inputField.value;
  const input = parseFloat(inputText);
  return input;
}

function setInnerTextById(elementId, area, secretTextId,) {
  const inputAreaSpan = document.getElementById(elementId);

  if (Number.isNaN(area)) {
    inputAreaSpan.innerText = 'Please provide number value in cm';
    document.getElementById(secretTextId).innerText = '';
  } else {
    inputAreaSpan.innerText = area;
    document.getElementById(secretTextId).innerText = 'cm²';
  }
}