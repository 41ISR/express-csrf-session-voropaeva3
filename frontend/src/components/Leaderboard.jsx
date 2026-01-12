import useAppStore from "../store/useAppStore"

const leaderboard = () => {
    const { leaderboard } = useAppStore()
    return (
        <div className="leaderboard">
                    <h2>🏆 Топ-10 игроков</h2>
                    <ol>
                        {leaderboard.sort((a, b) => b.clicks - a.clicks).map((el, i) => (
                            <li>
                                <span className="rank">#{i + 1}</span>
                                <span className="username">{el.email}</span>
                                <span className="score">{el.clicks}</span>
                            </li>
                        ))}
                     
                    </ol>
                </div>
    )
}

export default leaderboard