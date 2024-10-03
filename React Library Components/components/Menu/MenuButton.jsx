import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children, variant, size }) {
    const { toggleOpen } = React.useContext(MenuContext)
    return (
        <Button onClick={toggleOpen} variant={variant} size={size}>{children}</Button>
    )
}