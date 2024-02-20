import GameContainer from "../Widgets/GameContainer";
import LeafGroup from "./LeafGroup";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence } from "framer-motion";
import { useTimer } from "use-timer";
import TopGameBoard from "../Widgets/TopGameBoard";

const GameCard = () => {
    const [gameContainerRef, bounds] = useMeasure();
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
    const [numberOfMoves, setNumberOfMoves] = useState(0);

    const { time, start, pause, reset, status } = useTimer({
        endTime: 0,
        initialTime: 59,
        timerType: "DECREMENTAL",
    });

    // pausing the game
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            pause();
            setIsPaused(true);
        }
    };
    useEffect(() => {
        !isPaused && isPlaying && start();
        isPlaying && document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setIsPaused, isPlaying, isPaused]);

    return (
        <div className="bg-light-green-50 h-lvh">
            <div className="overflow-hidden text-center md:pt-20">
                <GameContainer ref={gameContainerRef} className="relative isolate mx-auto">
                    {isPlaying && (
                        <TopGameBoard isPlaying={isPlaying} time={time} numberOfCorrectAnswers={numberOfCorrectAnswers} />
                    )}
                    {/* Game */}
                    <AnimatePresence>
                        {isPlaying && time > 0 && (
                            <LeafGroup
                                gameBounds={bounds}
                                isPaused={isPaused}
                                setNumberOfCorrectAnswers={setNumberOfCorrectAnswers}
                                setNumberOfMoves={setNumberOfMoves}
                            />
                        )}
                    </AnimatePresence>
                </GameContainer>
            </div>
        </div>
    );
};

export default GameCard;
