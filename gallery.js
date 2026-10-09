const artworks = {
    fanart: {
        prefix: "F",
        count: 29
    },
    original: {
        prefix: "O",
        count: 22
    }
};

let currentCategory = null;

function showGallery(category) {

    // ギャラリー本体を取得
    const gallery = document.getElementById("gallery");

    // 説明文を取得
    const description = document.getElementById("gallery-description");
    const originalDescription = document.getElementById("original-description");
    const fanartDescription = document.getElementById("fanart-description");
    
    // 同じカテゴリーなら閉じる
    if (currentCategory === category) {
        gallery.replaceChildren();
        currentCategory = null;

        description.hidden = true;
        originalDescription.hidden = true;
        fanartDescription.hidden = true;

        return;
    }

    description.hidden = false;

    originalDescription.hidden = category !== "original";
    fanartDescription.hidden = category !== "fanart";

    // 開いているカテゴリーを記録
    currentCategory = category;

    const data = artworks[category];

    gallery.replaceChildren();

    // 以下のfor文は今のまま！

    for (let i = data.count; i >= 1; i--) {

        const img = document.createElement("img");

        img.src = `images/${category}/${data.prefix}${i}.png`;
        img.alt = `${category} ${i}`;
        img.loading = "lazy";

        gallery.appendChild(img);
    }
}

const profileToggle = document.getElementById("profile-toggle");
const profileDetails = document.getElementById("profile-details");

profileToggle.addEventListener("click", () => {
    profileDetails.classList.toggle("is-open");
});
