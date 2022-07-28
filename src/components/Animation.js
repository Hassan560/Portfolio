export const titleAnimation = {
    hidden: {
        y: 200,
        opacity: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
    }
}

export const imageAnimation = {
    hidden: {
        opacity: 0,
        scale: 2
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
    },
};


export const javascriptAnimation = {
    hidden: {
        width: 0,
    },
    visible: {
        width: "60%",
        transition: { duration: 0.75, ease: "easeOut" },
    }
}
export const firebaseAnimation = {
    hidden: {
        width: 0,
    },
    visible: {
        width: "50%",
        transition: { duration: 0.75, ease: "easeOut" },
    }
}
export const mernAnimation = {
    hidden: {
        width: 0,
    },
    visible: {
        width: "50%",
        transition: { duration: 0.75, ease: "easeOut" },
    }
}
export const reactAnimation = {
    hidden: {
        width: 0,
    },
    visible: {
        width: "60%",
        transition: { duration: 0.75, ease: "easeOut" },
    }
}
export const reduxAnimation = {
    hidden: {
        width: 0,
    },
    visible: {
        width: "60%",
        transition: { duration: 0.75, ease: "easeOut" },
    }
}
export const fadeAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,

    },
    transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
}

export const productsAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
    }

}