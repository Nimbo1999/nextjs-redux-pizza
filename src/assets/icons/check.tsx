import { IconProps } from '../icons.interface';

function Check({ color = '#0073BC', width = 14, height = 10, ...props }: IconProps) {
    return (
        <svg width={ width } height={ height } viewBox={ `0 0 ${width} ${height}` } fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.0461 0.986006C13.1823 1.13083 13.2555 1.32385 13.2495 1.52263C13.2435 1.72141 13.1588 1.90967 13.0141 2.04601L5.08406 9.52001C4.9224 9.67224 4.70759 9.75518 4.48558 9.75106C4.26356 9.74695 4.05197 9.65612 3.89606 9.49801L1.21606 6.77801C1.14509 6.70828 1.0887 6.62512 1.05019 6.53339C1.01167 6.44165 0.991786 6.34317 0.991699 6.24368C0.991613 6.14418 1.01132 6.04567 1.04968 5.95387C1.08804 5.86207 1.14428 5.77881 1.21513 5.70896C1.28598 5.63911 1.37002 5.58405 1.46235 5.54699C1.55469 5.50993 1.65347 5.49162 1.75296 5.49311C1.85244 5.49461 1.95063 5.51588 2.04181 5.55569C2.13299 5.5955 2.21534 5.65306 2.28406 5.72501L4.51806 7.99201L11.9861 0.954006C12.1309 0.817716 12.3239 0.744524 12.5227 0.750525C12.7215 0.756526 12.9097 0.841228 13.0461 0.986006Z"
                fill={ color }
            />
        </svg>
    );
}

export default Check;