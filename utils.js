

function formatPercentage(value) {
    return value + "%";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function currentYear() {
    return new Date().getFullYear();
}

export {
    formatPercentage,
    scrollToSection,
    currentYear
};