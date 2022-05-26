const points = [
    {
        x: 1,
        y: 2
    },
    {
        x: 3,
        y: 4
    },
    {
        x: null,
        y: 4
    },
    {
        x: 3,
        y: undefined
    }
]

let right_points = []

for (i of points) {
    if (Number.isInteger(i.x) && Number.isInteger(i.y)) {
        right_points.push(i)
    }
}

console.log(right_points)
