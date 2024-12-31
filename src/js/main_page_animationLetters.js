export const splitWords = () => {
    const title = document.querySelector('.letters')

    const text = title.textContent.replace(/(-|#|@){1}/g, (findSymbolInStr) => {
        findSymbolInStr[1] + findSymbolInStr[0]
    })
    title.innerHTML = text.replace(/(\S)/g, '<span class="letter">$&</span>')

    title.querySelectorAll('.letter').forEach((letter, i) => {
        letter.style.zIndex = -i
        letter.style.transitionDuration = `${i / 10 + 1}s`
    })
}
