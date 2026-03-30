class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

            const rows = new Map();
            const cols = new Map();
            const boxes = new Map();

            // Initialize empty Sets for each index (0-8)
            for (let i = 0; i < 9; i++) {
                rows.set(i, new Set());
                cols.set(i, new Set());
                boxes.set(i, new Set());
            }
        for( let i = 0; i < board.length; i++) {
            
            for (let j = 0; j < board.length; j++) {
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                let cell = board[i][j]
                if(board[i][j] !== ".") {
                    if(rows.get(i).has(cell) || cols.get(j).has(cell) || boxes.get(k).has(cell)){
                        return false
                    }

                     {
                        rows.get(i).add(cell)
                        cols.get(j).add(cell)
                        boxes.get(k).add(cell)
                    }
                }
            }
        }
        return true  
    }
}
