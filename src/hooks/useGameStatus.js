import { useState, useEffect, useCallback } from "react";

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    // Gained score
    const linePoints = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
        // Scorecheck
        if (rowsCleared > 0) {
            // Score calculation
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared);
        }
    }, [level, linePoints, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];

}