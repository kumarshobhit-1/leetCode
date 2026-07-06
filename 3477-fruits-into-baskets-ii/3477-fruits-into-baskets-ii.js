function numOfUnplacedFruits(fruits, baskets) {
    let used = new Array(baskets.length).fill(false);
    let unplaced = 0;

    for (let fruit of fruits) {
        let placed = false;
        for (let i = 0; i < baskets.length; i++) {
            if (!used[i] && baskets[i] >= fruit) {
                used[i] = true;
                placed = true;
                break;
            }
        }
        if (!placed) {
            unplaced++;
        }
    }
    return unplaced;
}