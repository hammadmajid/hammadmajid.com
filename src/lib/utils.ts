/**
 * Slugifies the string by replacing whitespace characters with a dash (-).
 * 
 * @param {string} s - The string to slugify.
 * @return {string} The slugified string.
 */
export const slugify = (s: string): string => {
    return s.trim().toLowerCase().replace(/\s+/g, '-');
};
