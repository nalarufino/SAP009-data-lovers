export function filterRole(champions, role) {
    return champions.filter(champion => champion.tags.includes(role))
}

export const order = (champion) => {
    const alphabeticOrder = [...champion]
    alphabeticOrder.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })
    return alphabeticOrder
}

export function calculatePercent(champions, allChampions) {
    const percentage = (champions.length / allChampions.length) * 100;
    return percentage.toFixed(2)
}
