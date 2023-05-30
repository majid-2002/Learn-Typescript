import { ReactNode } from "react";


type SectionProps = {
    title?: string;
    children: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}
