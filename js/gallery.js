const RANDOM_GALLERY = document.getElementById("random-gallery");
const GALLERY_CONTAINER = document.getElementById("gallery");

const fetchAllImages = async (count = 6) => {
  const urls = await Promise.all(
    Array.from({ length: count }, async () => {
      try {
        const res = await fetch("https://api.waifu.pics/sfw/megumin");
        const { url } = await res.json();
        return url;
      } catch {
        return null;
      }
    })
  );
  return urls.filter(Boolean);
};

RANDOM_GALLERY.addEventListener("click", async () => {
  const urls = await fetchAllImages(18);

  GALLERY_CONTAINER.innerHTML = urls
    .map(
      (url) => `<a href="${url}" target="_blank"
          ><img src="${url}" alt="Megumin" /></a>`
    )
    .join("");
});
