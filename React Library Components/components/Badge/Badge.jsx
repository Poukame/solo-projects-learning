import React from "react";
import classNames from "classnames";


export default function Badge({children = 'Badge Default', variant = 'square', color = 'gray', ...rest}) {

    // variant: square, pill
    // color: gray, red, yellow, green, blue

    const variantClass = variant && `badge badge-${variant}`
    const colorClass = color && `badge badge-${color}`
    const allClasses = classNames(variantClass, colorClass)

    return (
        <div className={allClasses} {...rest}>{children}</div>
    )
}