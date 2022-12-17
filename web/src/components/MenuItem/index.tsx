import { Link, useLocation } from "react-router-dom";

import { LinkArea, LinkIcon } from './styled'

interface MenuItemProps {
    icon: string;
    link: string;
    title: string;
}

export const MenuItem = ({ icon, link, title }: MenuItemProps) => {
    const location = useLocation()

    const isActive = location.pathname === link

    return(
        <Link to={link} data-tip={title} data-for="tip-right">
            <LinkArea active={isActive}>
                <LinkIcon src={icon} />
            </LinkArea>
        </Link>
    )
}