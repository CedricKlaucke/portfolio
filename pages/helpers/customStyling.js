export const container = {
    hidden: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.75,
            staggerChildren: 0.25,
            staggerDirection: -1
        }
    },
    show: {
        height: 134,
        opacity: 1,
        transition: {
            duration: 0.75,
            staggerChildren: 0.25
        }
    }
}

export const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}