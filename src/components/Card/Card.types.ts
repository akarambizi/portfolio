export interface CardProps {
    data: {
        title: string;
        image: string;
        links: {
            live: string;
            github: string;
        };
        tags: string[];
    };
    large?: boolean;
}
