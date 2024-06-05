import inquirer from "inquirer";

let account_balance = 10000;
const pin_code = 1234;

let user_pin_code = await inquirer.prompt({
    name: "EnteredPinCode",
    type: "input",
    message: "Enter Your Pin Code"
});

if (parseInt(user_pin_code.EnteredPinCode) === pin_code) {
    let atmQuestions = await inquirer.prompt([{
        name: "Account_Type",
        type: "list",
        choices: ["Current Account", "Saving Account"],
        message: "Select your account type"
    },
    {
        name: "Trans_Method",
        type: "list",
        choices: ["Cash Withdrawl", "Fast Cash"],
        message: "Select Transaction Method",
    }
    ]);

    if (atmQuestions.Account_Type == "Current Account") {
        console.log(`Your Account Type is ${atmQuestions.Account_Type}`);
    } else if (atmQuestions.Account_Type == "Saving Account") {
        console.log(`Your Account Type is ${atmQuestions.Account_Type}`);
    }

    if (atmQuestions.Trans_Method == "Cash Withdrawl") {
        let withdrawl_ammount = await inquirer.prompt({
            name: "Amount_to_withdraw",
            type: "number",
            message: "Enter the amount you want to withdraw",
        });

        if (account_balance >= withdrawl_ammount.Amount_to_withdraw) {
            account_balance -= withdrawl_ammount.Amount_to_withdraw; // Update the balance
            console.log(`The total amount left after withdrawal is ${account_balance}`);
        } else {
            console.log("Insufficient Balance");
        }
    } else if (atmQuestions.Trans_Method == "Fast Cash") { // Changed `else` to `else if`
        let fast_cash_withdrawl = await inquirer.prompt({
            name: "fastcash",
            type: "list",
            choices: ["1000", "5000", "8000"],
            message: "Select the amount you want to withdraw"
        });

        let fast_cash_amount = parseInt(fast_cash_withdrawl.fastcash); // Convert string to number

        if (account_balance >= fast_cash_amount) {
            account_balance -= fast_cash_amount; // Update the balance
            console.log(`The total amount left after withdrawal is ${account_balance}`);
        } else {
            console.log("Insufficient Balance");
        }
    }
} else {
    console.log("Incorrect Pin Code");
}
