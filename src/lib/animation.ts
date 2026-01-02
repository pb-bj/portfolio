export const blurRevealAnimation = {
	initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
	animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
	transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
} as const;
