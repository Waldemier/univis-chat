const validationUtils = ({ isAuth, values, errors }) => {

    const utils = {
        email: (errors, value) => { //value is id 'email' in form input
            if (!value) {
                errors.email = 'Введіть email';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Некоректний email';
            }
        },
        username: (errors, value) => {
            if (!value) {
                errors.username = "Ім'я не може бути пустим";
            }
            else if (!isAuth) {
                if (!/^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{3,120}/.test(value)) {
                    errors.username = "Ім'я має містити принаймі одну велику літеру та бути не менше 3 символів";
                }
            }
        },
        password: (errors, value) => {
            if (!value) { //value is id 'password' in form input
                errors.password = 'Введіть пароль';
            }
            else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(value)) {
                errors.password = isAuth ? 'Невірний пароль' : 'Занадто легкий пароль. Довжина має бути не менше 6 символів та містити принаймі одну велику літеру';
            }
        },
        confirm: (errors, value) => {
            if (!value) { //value is id 'password' in form input
                errors.confirm = 'Повторіть пароль';
            }
        }
    }
    const valuesKeys = Object.keys(values);
    return valuesKeys.forEach(key => utils[key] && utils[key](errors, values[key])); //email or another prop of values
};

export default validationUtils;