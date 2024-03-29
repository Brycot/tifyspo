export const generateRandomString = (length) => {
    let randomString = "";
    const possibleChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        randomString += possibleChars.charAt(
            Math.floor(Math.random() * possibleChars.length)
        );
    }
    return randomString;
};