// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count: Record<string, number> = {};

    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

console.log(isAnagram("ana", "naa"))