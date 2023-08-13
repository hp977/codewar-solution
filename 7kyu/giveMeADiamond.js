function diamond(n) {
    if (n <= 0 || n % 2 === 0) {
        return null;
    }

    let diamondStr = '';

    for (let i = 0; i < n; i++) {
        const spaces = Math.abs((n - 1) / 2 - i);
        const asterisks = n - 2 * spaces;

        diamondStr += ' '.repeat(spaces) + '*'.repeat(asterisks) + '\n';
    }

    return diamondStr;
}

// Example usage:
console.log(diamond(3));
console.log(diamond(5));
