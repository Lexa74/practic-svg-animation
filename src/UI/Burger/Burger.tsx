interface BurgerProps {
    width?: number;
    color?: string;
    isActive: boolean;
}

export const Burger = ({width = 30, color = 'black', isActive}: BurgerProps) => {
    return (
        <svg className={`svg ${isActive ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 20 20">
            <path d="M0,0.5 L20,0.5 M0,9 L10,9 M10,9 L20,9  M0,18 L20,18"/>
        </svg>
    )
}