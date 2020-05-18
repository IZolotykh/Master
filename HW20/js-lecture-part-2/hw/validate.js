function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;
        
    if (!login || !password || !firstName) {
        alert('Укажите логин/пароль. Не забудьте указать Ваше имя');
    } else if (login == "bee" || login == "beeinterns" || login == "beeline") {
        alert('Данный логин занят, укажите, пожалуйста, другой логин');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (gender == "male"){
        alert(`Уважаемый ${firstName}, заявка создана`);
    } else {
        alert(`Уважаемая ${firstName}, заявка создана`);
    }
}