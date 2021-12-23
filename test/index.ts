import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("LearningToken", () => {
  it("Create LearningToken", async () => {
    const tokenSupply = 1000;
    const tokenName = "LT";

    const LearningToken = await ethers.getContractFactory("LearningToken");
    const learningToken = await LearningToken.deploy(tokenName, tokenSupply);

    await learningToken.deployed();

    expect(await learningToken.totalSupply()).to.equal(tokenSupply);

    //
  });
});
