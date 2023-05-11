// Constants

const containerGradient = document.querySelector(".container-gradient");
const boxSample = document.querySelector(".box-sample");
const colorInputs = document.querySelectorAll(".colors-sample input");
const selectBox = document.querySelector(".select-box select");
const textarea = document.querySelector(".textarea");
const randomBtn = document.querySelector(".random");
const copyBtn = document.querySelector(".copy");

// Functions

const getRandomColor = () => {
    // Generate a Random Color in Hexadecimal format. Ex. #542874
    const randomHex = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
    return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${selectBox.value}, ${colorInputs[0].value}, ${colorInputs[1].value}`;

    boxSample.style.background = gradient;
    containerGradient.style.background = gradient;
    textarea.value = `background: ${gradient}`;
};

const copyGradient = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Gradient Copied";
    copyBtn.style.background = "#00b7ab51"
    setTimeout(() => copyBtn.innerText = "Copy Gradient", 1600)
    setTimeout(() => copyBtn.style.background = "#00b7aa", 1600)
};
// Add Envent Listener

colorInputs.forEach((input) => {
    //Calling generateGradient function on each color input clicks
    input.addEventListener("input", () => generateGradient(false));
});

selectBox.addEventListener("change", () => generateGradient(false));

randomBtn.addEventListener("click", () => generateGradient(true));

copyBtn.addEventListener("click", copyGradient);
