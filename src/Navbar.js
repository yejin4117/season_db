export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                SEASON
            </a>
            <ul>
                <li className='active'>
                    <a href="/home">HOME</a>
                </li>
                <li>
                    <a href="/view">VIEW</a>
                </li>
                <li>
                    <a href="/login">LOGIN</a>
                </li>
                <li>
                    <a href="/signup">SIGN UP</a>
                </li>
            </ul>
        </nav>
    )
}