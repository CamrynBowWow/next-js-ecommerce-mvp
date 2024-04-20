export function useWait(duration: number) {
	return new Promise((resolve) => setTimeout(resolve, duration));
}
