class User {
    constructor(username, password) {
        this.username = username;
        this._password = ''; // Use a private field to store the password
        this.setPassword(password); // Set the initial password
    }

    // Getter method for password
    get password() {
        return '*'.repeat(this._password.length);
    }

    // Setter method for password with validation
    setPassword(newPassword) {
        if (this.isValidPassword(newPassword)) {
            this._password = newPassword;
        } else {
            console.log('Error: Password must be at least 8 characters long and include at least one number and one uppercase letter.');
        }
    }

    // Helper method to validate password
    isValidPassword(password) {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasUpperCase = /[A-Z]/;
        return password.length >= minLength && hasNumber.test(password) && hasUpperCase.test(password);
    }
}

// Instantiate an instance of the User class
const user = new User('john_doe', 'SecureP@ss1');

// Access the password via the getter method
console.log(user.password); // Output: ***********

// Attempt to set a new password
user.setPassword('newpass');  // Output: Error: Password must be at least 8 characters long and include at least one number and one uppercase letter.
user.setPassword('NewPass1'); // Valid password

// Access the updated password via the getter method
console.log(user.password); // Output: **********
