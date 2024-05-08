import './NavButton.css'

export default function NavButton({children, active, onClick}) {
    return (
        <button className={active ? 'navButton active' : 'navButton'} onClick={onClick}>
            {children}
        </button>
    )
}