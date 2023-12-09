export default function Auth(){
    return(
        <div>
            <h1>Авторизация</h1>
            <form>
                <input text="text" placeholder="Введите логин:" />
                <input text="text" placeholder="Введите пароль:" />
                <p>Нет аккаунта?<a href="/register">Создай его!</a></p>
                <button>Войти</button>
            </form>
        </div>
    )
}