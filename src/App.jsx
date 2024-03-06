import "./App.css";

//1. Create a React component called RandomNumber, which shows a random number between 1 to 100.

const RandomNumber = () => {
  return <p>Random Number: {Math.floor(Math.random() * 100) + 1}</p>;
};

//2. Create a React component called AbsoluteValue, which shows the absolute value of a given number.

const AbsoluteValue = () => {
  const number = -10;
  const absoluteValue = Math.abs(number);
  return <p>Absolute Value: {absoluteValue}</p>;
};

//3. Create a React component called SumOfEvenNumbers, to calculate the sum of all even numbers present in an array.

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const sumOfEvenNums = numbers.reduce(
    (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
    0,
  );
  return <p>Sum of even numbers: {sumOfEvenNums}</p>;
};

//4. Create a React component, to find the perimeter of a square. The sides of square is 5 cm in length.

const PerimeterOfSquare = () => {
  const sideLength = 5;
  const perimeter = 4 * sideLength;

  return (
    <div>
      <h2>Square Perimeter Calculator</h2>
      <p>Side Length: {sideLength} cm</p>
      <p>Perimeter: {perimeter} cm</p>
    </div>
  );
};

//5. Create a React component named CurrencyConverter to convert an amount from US Dollars (USD) to Indian Rupee (INR). The amount is $50. Assuming an exchange rate of 1 USD = 74.5.

const CurrencyConverter = () => {
  const Usd = 74.5;
  const amount = 50;
  const usdToInr = Usd * amount;
  return (
    <div>
      <h2>Currency Converter</h2>
      <p>Amount in USD: ${amount}</p>
      <p>Exchange Rate: 1 USD = {Usd} INR</p>
      <p>Amount in INR: INR {usdToInr}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <RandomNumber />
      <AbsoluteValue />
      <SumOfEvenNumbers />
      <PerimeterOfSquare />
      <CurrencyConverter />
    </main>
  );
}
