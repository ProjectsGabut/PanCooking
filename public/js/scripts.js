var Post = {
    "makanan_berat": {
        "daging": [
            "rendang",
        ],
        "kue": [
            "martabak_manis",
        ],
    },
    "makanan_ringan": {
        "kripik":[
            "sanjai"
        ]
    },
    "minuman": {
        "juice": [
            "juice_mangga",
        ],
    },
};

var forceSelected = function(id) {
    element = document.getElementById(id);
    if (element.classList.contains('unselected')) {
        element.classList.remove('unselected')
        element.classList.add('selected');
    }
    else if (element.classList.contains('unselected-reverse')) {
        element.classList.remove('unselected-reverse')
        element.classList.add('selected-reverse');
    }

    var element1 = element.querySelector("button");
    if (element1.classList.contains('unselected')) {
        element1.classList.remove('unselected')
        element1.classList.add('selected');
    }
    else if (element1.classList.contains('unselected-reverse')) {
        element1.classList.remove('unselected-reverse')
        element1.classList.add('selected-reverse');
    }

    toggleFilter();
}

var forceUnselected = function(id) {
    element = document.getElementById(id);
    if (element.classList.contains('selected')) {
        element.classList.remove('selected')
        element.classList.add('unselected');
    }
    else if (element.classList.contains('selected-reverse')) {
        element.classList.remove('selected-reverse')
        element.classList.add('unselected-reverse');
    }

    var element1 = element.querySelector("button");
    if (element1.classList.contains('selected')) {
        element1.classList.remove('selected')
        element1.classList.add('unselected');
    }
    else if (element1.classList.contains('selected-reverse')) {
        element1.classList.remove('selected-reverse')
        element1.classList.add('unselected-reverse');
    }

    toggleFilter();
}

function makanan_berat_nav() {
    for (var i in Post['makanan_berat']) {
        forceSelected(i)
    }
    for (var i in Post['makanan_ringan']) {
        forceUnselected(i)
    }
    for (var i in Post['minuman']) {
        forceUnselected(i)
    }
}

function makanan_ringan_nav() {
    for (var i in Post['makanan_berat']) {
        forceUnselected(i)
    }
    for (var i in Post['makanan_ringan']) {
        forceSelected(i)
    }
    for (var i in Post['minuman']) {
        forceUnselected(i)
    }
}

function minuman_nav() {
    for (var i in Post['makanan_berat']) {
        forceUnselected(i)
    }
    for (var i in Post['makanan_ringan']) {
        forceUnselected(i)
    }
    for (var i in Post['minuman']) {
        forceSelected(i)
    }
}

function resetFilter() {
    for (var i in Post) {
        for (var j in Post[i]) {
            forceUnselected(j);
        }
    }
}

function toggleFilter() {
    for (var i in Post) {
        for (var j in Post[i]) {
            var categories = document.getElementById(j)
            var posts = document.getElementById(Post[i][j][0])

            if (categories.classList.contains('selected')) {
                posts.style.display = "flex";
            } else {
                posts.style.display = "none";
            }
        }
    }
}

function toggleClass(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('unselected')) {
        element.classList.remove('unselected');
        element.classList.add('selected');
    } else {
        element.classList.remove('selected');
        element.classList.add('unselected')
    }

    var element1 = element.querySelector("button");
    if (element1.classList.contains('unselected-reverse')) {
        element1.classList.remove('unselected-reverse');
        element1.classList.add('selected-reverse');
    } else {
        element1.classList.remove('selected-reverse');
        element1.classList.add('unselected-reverse');
    }
}

toggleFilter();