import React from 'react'

const Lock = ({ className, fill }: { className?: string, fill?: string }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="188" height="214" viewBox="0 0 188 214" fill={fill}>
            <path d="M184.782 41.065C162.108 41.065 143.672 23.6012 143.672 2H44.3279C44.3279 23.6012 25.892 41.065 3.13106 41.065C3.08737 41.065 3.08737 41.065 3 41.065C5.18435 105.564 17.9846 171.412 94 211C170.015 171.412 182.816 105.564 185 41.065H184.782ZM94 188.746C38.3428 157.084 25.892 107.393 22.965 56.7868C40.4834 52.4753 54.3322 39.2359 58.832 22.4253H129.168C133.711 39.2794 147.517 52.5189 165.079 56.8304C162.152 107.393 149.614 157.084 94 188.746Z" fill="#231F20" stroke="#F0B631" stroke-width="4" />
            <path d="M106.198 75.383V77.383H108.198H114.97H116.97V75.383V70.7231C116.97 58.0717 106.676 47.8187 94 47.8187C81.3243 47.8187 71.0303 58.0717 71.0303 70.7231V75.383V77.383H73.0303H79.8018H81.8018V75.383V70.7231C81.8018 64.0379 87.2787 58.5691 94 58.5691C100.721 58.5691 106.198 64.0379 106.198 70.7231V75.383Z" fill="#231F20" stroke="#F0B631" stroke-width="4" />
            <path d="M98.0187 118.589H90.0148L91.3054 109.548L91.4737 108.369L90.5171 107.659C89.1157 106.62 88.18 104.936 88.18 103.038C88.18 99.8439 90.7664 97.2421 94.0437 97.2421C97.2554 97.2421 99.82 99.822 99.82 103.038C99.82 104.951 98.9149 106.632 97.4769 107.707L96.5222 108.421L96.6958 109.6L98.0187 118.589ZM118.334 79.9156H69.6663C64.9416 79.9156 61.1133 83.723 61.1133 88.4482V127.383C61.1133 132.108 64.9416 135.915 69.6663 135.915H118.334C123.058 135.915 126.887 132.108 126.887 127.383V88.4482C126.887 83.723 123.058 79.9156 118.334 79.9156Z" fill="#231F20" stroke="#F0B631" stroke-width="4" />
        </svg>
    )
}

export default Lock