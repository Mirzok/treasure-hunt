
/**
 * The index.js file will call this function with a single map's data at a time
 * and print out the return value to the console.
 * 
 * @param {string[][]} worldMap 
 * @param {number} maxTurns
 * 
 * @returns {string} the steps to take to score the maximum number of points
 */

export default function (worldMap: string[][], maxTurns: number) {
    // Generator function for searching map, caching similar paths / states to make sure each step is new
    function* searchWorld(rowIndex: number, columnIndex: number, turnsRemaining: number, turnsTaken = '', pointsCollected = 0) { 
        // Invalid coordinates, exit this branch of execution
        if (rowIndex < 0 || rowIndex >= worldMap.length || columnIndex < 0 || columnIndex >= worldMap[0].length) {
            return;
        }

        // Check for whirlpool
        const currentLocationCharacter: string = worldMap[rowIndex][columnIndex];
        if (currentLocationCharacter === 'w') { 
            return;
        }

        // Add available points
        if (!isNaN(currentLocationCharacter as any)) { 
            pointsCollected += Number(currentLocationCharacter);
        }

        // consider putting this before the cache
        if (turnsRemaining === 0) { 
            yield { 'turns': turnsTaken, 'points': pointsCollected };
            return;
        }

        // Use modifiers to find the next direction / index, then subtract the turns remaining and go through all possible directions
        for (let rowMod = -1; rowMod < 2; rowMod++) { 
            for (let columnMod = -1; columnMod < 2; columnMod++) { 
                // Skip diagonals and identity element
                if (Math.abs(rowMod) === Math.abs(columnMod)) { continue; }
                    
                let direction: string;
                if (rowMod === 1) { direction = 'd';}
                if (rowMod === -1) { direction = 'u';}
                if (columnMod === 1) { direction = 'r';}
                if (columnMod === -1) { direction = 'l';}

                yield* searchWorld(rowIndex+rowMod, columnIndex+columnMod, turnsRemaining-1, turnsTaken + direction, pointsCollected);
            }
        }
    }

    // Note small assumption: Only one ship on the board
    const findStartCoordinate = () => {
        for (let rowIndex = 0; rowIndex < worldMap.length; rowIndex++) { 
            const row = worldMap[rowIndex];
            for (let columnIndex = 0; columnIndex < row.length; columnIndex++) { 
                if (row[columnIndex] === 's') {
                    return [rowIndex, columnIndex];
                }
            }
        }
    };

    const startCoordinate = findStartCoordinate();
    let result = searchWorld(startCoordinate[0], startCoordinate[1], maxTurns);
    result = Array.from(result).reduce((previous: any, current: any) => previous.points > current.points ? previous : current);
    return result.turns;
}