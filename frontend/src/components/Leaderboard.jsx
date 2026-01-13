import { useEffect } from "react"
import useAppStore from "../store/useAppStore"

const leaderboard = () => {
    const { leaderboard, setLeaderboard } = useAppStore()

    const updateLeaderboard = async () => {
        try {
            const res = await fetch("https://zany-sniffle-7vpq56j7rww5frgp4-3000.app.github.dev/leaderboard")
            const data = await res.json()
            setLeaderboard(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        updateLeaderboard()
        const interval = setInterval(() => {
            updateLeaderboard()
        }, 5000)

        return () => {clearInterval(interval)}
    }, [])

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