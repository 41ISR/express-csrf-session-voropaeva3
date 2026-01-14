import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(undefined)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            const res = await fetch("https://zany-sniffle-7vpq56j7rww5frgp4-3000.app.github.dev/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
                credentials: "include"
            })

            if (!res.ok) throw new Error(res.statusText)

            const data = await res.json()
            
            if (!res.ok) throw new Error(data)

            navigate("/")

        } catch (error) {
            console.error(error)
            setError(error.message)
        }
    }

    return (
        <div className="container">

            <h1>🎮 Кликер Игра</h1>
            <p className="subtitle">Демонстрация CSRF + CORS + Sessions</p>

            <div className="forms">
                <div className="form-card">
                    <h2>Вход</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <input name="email" type="text" placeholder="Имя пользователя" required />
                        <input name="password" type="password" placeholder="Пароль" required />
                        {error && <p className="form-error">{error}</p>}
                        <button type="submit">Войти</button>
                    </form>
                   <p className="form-p">Нет аккаунта? <Link to={"/signup"} className="form-link">Зарегистироваться</Link> </p>
                </div>  
            </div>
        </div>
    )
}

export default SignIn