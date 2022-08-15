var forceSelected = function(id) {
    element = document.getElementById(id);
    if (element.classList.contains('unselected')) {
        element.classList.remove('unselected')
        element.classList.add('selected');
    }

    toggleFilter();
}

var forceUnselected = function(id) {
    element = document.getElementById(id);
    if (element.classList.contains('selected')) {
        element.classList.remove('selected')
        element.classList.add('unselected');
    }

    toggleFilter();
}

function food_nav() {
    forceSelected('cat_1');
    forceSelected('cat_2');
    forceSelected('cat_3');
    forceSelected('cat_4');
    forceUnselected('cat_5');
    forceUnselected('cat_6');
}

function drink_nav() {
    forceSelected('cat_5');
    forceSelected('cat_6');
}

function toggleFilter() {
    var cat_1 = document.getElementById("cat_1");
    var cat_2 = document.getElementById("cat_3");
    var cat_3 = document.getElementById("cat_5");

    var post_1 = document.getElementById("post-1");
    var post_2 = document.getElementById("post-2");
    var post_3 = document.getElementById("post-3");

    if (cat_1.classList.contains('selected')) {
        post_1.style.display = "flex";
    } else {
        post_1.style.display = "none";
    }
    if (cat_2.classList.contains('selected')) {
        post_2.style.display = "flex";
    } else {
        post_2.style.display = "none";
    }
    if (cat_3.classList.contains('selected')) {
        post_3.style.display = "flex";
    } else {
        post_3.style.display = "none";
    }
}

function toggleClass(id_1, id_2) {
    var element_1 = document.getElementById(id_1);
    if (element_1.classList.contains('unselected')) {
        element_1.classList.remove('unselected');
        element_1.classList.add('selected');
    } else {
        element_1.classList.remove('selected');
        element_1.classList.add('unselected')
    }

    var element_2 = document.getElementById(id_2);
    if (element_2.classList.contains('unselected-reverse')) {
        element_2.classList.remove('unselected-reverse');
        element_2.classList.add('selected-reverse');
    } else {
        element_2.classList.remove('selected-reverse');
        element_2.classList.add('unselected-reverse');
    }

    toggleFilter();
}

toggleFilter();