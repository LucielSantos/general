import { useState } from "react";
import _ from "lodash";
import { Input } from "./components/Input";

interface Players {
  name: string;
  scoreboard: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    lowSeq: string;
    highSeq: string;
    full: string;
    poker: string;
    general: string;
  };
}

export default function App() {
  const [players, setPlayers] = useState<Players[]>([]);
  const [playerName, setPlayerName] = useState<string>("");
  const [showTotal, setShowTotal] = useState<boolean>(false);

  const handleAddPlayer = () => {
    if (!playerName) return;

    setPlayers([
      ...players,
      {
        name: playerName,
        scoreboard: {
          1: "0",
          2: "0",
          3: "0",
          4: "0",
          5: "0",
          6: "0",
          lowSeq: "0",
          highSeq: "0",
          full: "0",
          poker: "0",
          general: "0",
        },
      },
    ]);
  };

  const handleChangeScore =
    (playerIndex: number, scoreToSet: keyof Players["scoreboard"]) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPlayers = _.cloneDeep(players);

      newPlayers[playerIndex].scoreboard[scoreToSet] = e.target.value;

      setPlayers(newPlayers);
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-scree">
      <h1 className="text-4xl font-bold mb-10">General</h1>

      <div className="flex items-center justify-center">
        <Input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />

        <button
          onClick={handleAddPlayer}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Player
        </button>
      </div>

      <button
        onClick={() => setShowTotal(!showTotal)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 "
      >
        Mostrar pontuação
      </button>

      <div className="flex w-full px-20 mt-10 gap-20">
        {players.map((player, index) => (
          <div key={index}>
            <h2>{player.name}</h2>
            <div>
              <h3>Scoreboard</h3>
              <ul>
                <li className="mb-2">
                  1:
                  <Input
                    value={player.scoreboard[1]}
                    onChange={handleChangeScore(index, 1)}
                  />
                </li>
                <li className="mb-2">
                  2:
                  <Input
                    value={player.scoreboard[2]}
                    onChange={handleChangeScore(index, 2)}
                  />
                </li>
                <li className="mb-2">
                  3:
                  <Input
                    value={player.scoreboard[3]}
                    onChange={handleChangeScore(index, 3)}
                  />
                </li>
                <li className="mb-2">
                  4:
                  <Input
                    value={player.scoreboard[4]}
                    onChange={handleChangeScore(index, 4)}
                  />
                </li>
                <li className="mb-2">
                  5:
                  <Input
                    value={player.scoreboard[5]}
                    onChange={handleChangeScore(index, 5)}
                  />
                </li>
                <li className="mb-2">
                  6:
                  <Input
                    value={player.scoreboard[6]}
                    onChange={handleChangeScore(index, 6)}
                  />
                </li>
                <li className="mb-2">
                  Low Seq:
                  <Input
                    value={player.scoreboard.lowSeq}
                    onChange={handleChangeScore(index, "lowSeq")}
                  />
                </li>
                <li className="mb-2">
                  High Seq:
                  <Input
                    value={player.scoreboard.highSeq}
                    onChange={handleChangeScore(index, "highSeq")}
                  />
                </li>
                <li className="mb-2">
                  Full:
                  <Input
                    value={player.scoreboard.full}
                    onChange={handleChangeScore(index, "full")}
                  />
                </li>
                <li className="mb-2">
                  Poker:
                  <Input
                    value={player.scoreboard.poker}
                    onChange={handleChangeScore(index, "poker")}
                  />
                </li>
                <li className="mb-2">
                  General:
                  <Input
                    value={player.scoreboard.general}
                    onChange={handleChangeScore(index, "general")}
                  />
                </li>

                {showTotal && (
                  <li className="mb-2">
                    Total:{" "}
                    {Object.values(player.scoreboard).reduce(
                      (acc, score) =>
                        acc + (!_.isNaN(parseInt(score)) ? parseInt(score) : 0),
                      0
                    )}
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
