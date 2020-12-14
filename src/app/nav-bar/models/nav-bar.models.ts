export interface IOptionNavigate {
    name: string;
    route: string;
    icon: string;
    type: string;
    children?: Children[];
    open?: boolean;
}

interface Children {
    name: string;
    route: string;
}
