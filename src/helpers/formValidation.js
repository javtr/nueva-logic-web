export async function getBannedEmail() {
    const url1 = 'https://raw.githubusercontent.com/javtr/Vba/main/rcd.ob'
    const response = await fetch(url1);
    const data = await response.text();
    let bannedEmail = data.trim().split(',');
    return bannedEmail;
}

export function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}