"use strict";
const start = async () => {
  // let algoValue = Number(document.querySelector(".algo-menu").value);
  let speedValue = Number(document.querySelector(".speed-menu").value);

  if (speedValue === 0) {
    speedValue = 1;
  }
  
  let algorithm = new sortAlgorithms(speedValue);
   algorithm.MergeSort()
};

// function select algo
const RenderScreen = async () => {
  // let algoValue = Number(document.querySelector(".algo-menu").value);
  await RenderList();
};

const RenderList = async () => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");

  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell value-centered";
    node.setAttribute("value", String(element));
    node.style.height = `${4 * element}px`;
    node.innerText = element;
    arrayNode.appendChild(node);

    // Lấy giá trị ban đầu và giá trị cuối cùng của phần tử
    const startValue = 0;
    const endValue = element;

    // Tính toán khoảng thời gian cập nhật giá trị
    const duration = 1000; // Thời gian tổng cộng (ms)
    const updateInterval = 10; // Khoảng thời gian cập nhật (ms)
    const steps = Math.ceil(duration / updateInterval); // Số lần cập nhật

    let currentValue = startValue;
    const valueStep = (endValue - startValue) / steps;

    // Cập nhật giá trị và render liên tục
    const updateValue = () => {
      currentValue += valueStep;
      node.setAttribute("value", String(currentValue));
      node.style.height = `${4 * currentValue}px`;
      node.innerText = currentValue.toFixed(0);

      if (currentValue < endValue) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  }
};




const randomList = async (Length) => {
  let list = new Array(); // init array name "list"
  // let lowerBound = 1;
  // let upperBound = 100;

  for (let counter = 0; counter < Length; ++counter) {
    let randomNumber = Math.floor(
      // Math.random() * (upperBound - lowerBound + 1) + lowerBound
      Math.random() * 100 + 1
    );
    list.push(parseInt(randomNumber));
  }
  return list;
};

const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};

window.onload = RenderScreen;
