import { IconProps } from './icons.interface';

function PizzaLogo({ color = 'white', width = 46, height = 54 }: IconProps) {
    return (
        <svg
            width={ width }
            height={ height }
            viewBox={ `0 0 ${width} ${height}` }
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0)">
                <path
                    d="M10.6773 23.9755C11.3846 23.9755 12.0629 23.6946 12.563 23.1945C13.0631 22.6944 13.344 22.0161 13.344 21.3089C13.344 20.6016 13.0631 19.9233 12.563 19.4232C12.0629 18.9231 11.3846 18.6422 10.6773 18.6422C9.97009 18.6422 9.29181 18.9231 8.79172 19.4232C8.29162 19.9233 8.01067 20.6016 8.01067 21.3089C8.01067 22.0161 8.29162 22.6944 8.79172 23.1945C9.29181 23.6946 9.97009 23.9755 10.6773 23.9755ZM24.0107 29.3035C24.0107 30.0108 23.7297 30.689 23.2296 31.1891C22.7295 31.6892 22.0512 31.9702 21.344 31.9702C20.6368 31.9702 19.9585 31.6892 19.4584 31.1891C18.9583 30.689 18.6773 30.0108 18.6773 29.3035C18.6773 28.5963 18.9583 27.918 19.4584 27.4179C19.9585 26.9178 20.6368 26.6369 21.344 26.6369C22.0512 26.6369 22.7295 26.9178 23.2296 27.4179C23.7297 27.918 24.0107 28.5963 24.0107 29.3035ZM10.6773 39.9649C11.3846 39.9649 12.0629 39.6839 12.563 39.1838C13.0631 38.6837 13.344 38.0054 13.344 37.2982C13.344 36.5909 13.0631 35.9127 12.563 35.4126C12.0629 34.9125 11.3846 34.6315 10.6773 34.6315C9.97009 34.6315 9.29181 34.9125 8.79172 35.4126C8.29162 35.9127 8.01067 36.5909 8.01067 37.2982C8.01067 38.0054 8.29162 38.6837 8.79172 39.1838C9.29181 39.6839 9.97009 39.9649 10.6773 39.9649ZM0.0106681 7.09553C0.0106681 3.10353 3.29067 -0.384473 7.53067 0.0341932C21.3371 1.40262 34.128 7.8999 43.376 18.2422C46.2293 21.4235 45.3413 26.1462 42.0987 28.4955C37.88 31.5569 31.592 36.1142 28.0107 38.7169C28.0053 39.8822 28.0053 40.6395 28.008 41.6289V43.3035C28.0084 43.9857 27.8592 44.6596 27.571 45.2779C27.2828 45.8961 26.8625 46.4437 26.3398 46.882C25.8171 47.3203 25.2047 47.6386 24.5456 47.8147C23.8866 47.9907 23.197 48.0201 22.5253 47.9009C21.9813 50.1035 20.04 51.9729 17.3413 51.9729C15.4747 51.9729 13.976 51.0795 13.0507 49.7995L9.51733 52.3515C5.54933 55.2155 -0.00266571 52.3809 9.60253e-07 47.4822L0.0106681 7.09819V7.09553ZM7.13867 4.01553C5.51467 3.85553 4.008 5.19686 4.008 7.09553V8.48219C18.0187 9.07153 30.4373 15.8129 38.6347 26.0662L39.752 25.2555C41.2933 24.1355 41.4907 22.1275 40.3973 20.9089C31.8162 11.3141 19.9483 5.2869 7.13867 4.01819V4.01553ZM4 47.4822C4 49.1142 5.85067 50.0609 7.17334 49.1035L12.848 45.0129C13.147 44.7978 13.4996 44.6694 13.8669 44.6419C14.2342 44.6145 14.6019 44.689 14.9296 44.8572C15.2572 45.0254 15.532 45.2809 15.7237 45.5954C15.9154 45.9099 16.0166 46.2712 16.016 46.6395C16.016 47.3595 16.5733 47.9729 17.3413 47.9729C17.5172 47.9746 17.6916 47.9414 17.8545 47.8751C18.0173 47.8088 18.1654 47.7107 18.29 47.5866C18.4146 47.4625 18.5132 47.3149 18.5802 47.1523C18.6471 46.9897 18.6811 46.8154 18.68 46.6395V43.3009C18.68 42.7704 18.8907 42.2617 19.2658 41.8866C19.6409 41.5116 20.1496 41.3009 20.68 41.3009C21.2104 41.3009 21.7191 41.5116 22.0942 41.8866C22.4693 42.2617 22.68 42.7704 22.68 43.3009C22.68 43.6742 22.976 43.9675 23.3413 43.9675C23.5181 43.9675 23.6877 43.8973 23.8127 43.7723C23.9378 43.6472 24.008 43.4777 24.008 43.3009V41.6422C24.0053 40.3889 24.0027 39.4875 24.0213 37.6715C24.0238 37.3592 24.0994 37.0518 24.242 36.774C24.3846 36.4961 24.5903 36.2556 24.8427 36.0715C27.248 34.3222 31.4987 31.2395 35.392 28.4182C31.5899 23.6882 26.8248 19.8214 21.4133 17.0748C16.0017 14.3281 10.0677 12.7644 4.00534 12.4875L4 47.4822Z"
                    fill={ color }
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="45.0945" height="53.497" fill={ color } />
                </clipPath>
            </defs>
        </svg>
    );
}

export default PizzaLogo;