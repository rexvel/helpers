type EmailAddress = string & { __brand: 'EmailAddress' };

function isEmailAddress(email: string): email is EmailAddress {
   return email.includes('@gmail.com');
}

function assertEmailAddress(email: string): asserts email is EmailAddress {
   if (!email.includes('@gmail.com')) {
       throw new Error(`InvalidArgument: [${email}] is not an email address`);
   }
}

function sendWelcomeEmail(e: EmailAddress) {
    console.log(`congrats ${e}!`);
}

function signUp(email: string) {
   assertEmailAddress(email);
//    sendWelcomeEmail(email);
}