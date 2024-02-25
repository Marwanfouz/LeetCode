/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        if (stack.length === 0 || asteroid > 0 || stack[stack.length - 1] < 0) {
            stack.push(asteroid);
        } else {
            while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -asteroid) {
                stack.pop();
            }
            if (!stack.length || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            } else if (stack[stack.length - 1] === -asteroid) {
                stack.pop();
            }
        }
    }

    return stack;
};
