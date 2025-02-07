const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
};

const getTheme = () => {
    const theme = localStorage.getItem("theme");
    theme && setTheme(theme);
};

getTheme();


function getAge(birth) {
    const date = new Date();
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth();

    let birthYear = birth.slice(0, 4);
    let birthMonth = birth.slice(5, 7);

    if (birthMonth >= dateMonth) {
        return dateYear - birthYear - 1;
    } else {
        return dateYear - birthYear;
    }
}


document.getElementById("age").innerHTML = getAge("2003-10");