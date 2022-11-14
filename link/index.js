function countdown(n) {
	if (n <= 0) {
		return []
	} else {
		const out = countdown(n - 1)
		out.unshift(n)
		return out;
	}
}