

document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.getElementById("c3"));
});

function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}




document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.getElementById("c1"));
});

function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    // Select all elements with the 'div4' id
    var elements = document.querySelectorAll("#div4");

    var observer = new IntersectionObserver(handleIntersect, options);

    elements.forEach(function(element) {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.getElementById("c2"));
});

function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.getElementById("span3"));
});

function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    // Select all elements with the 'div4' id
    var elements = document.querySelectorAll("#work");

    var observer = new IntersectionObserver(handleIntersect, options);

    elements.forEach(function(element) {
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.getElementById("c4"));
});

function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    // Select all elements with the 'div4' id
    var elements = document.querySelectorAll("#data1");

    var observer = new IntersectionObserver(handleIntersect, options);

    elements.forEach(function(element) {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    // Select all elements with the 'div4' id
    var elements = document.querySelectorAll("#data2");

    var observer = new IntersectionObserver(handleIntersect, options);

    elements.forEach(function(element) {
        observer.observe(element);
    });
});

