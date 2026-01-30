const cubeCanvas = document.getElementById("cube-canvas")

const ctx = cubeCanvas.getContext("2d")
const [ W, H ] = [ cubeCanvas.width, cubeCanvas.height ]

function toScreenCoordinates({x, y}) {
    return {
        x: ((x + 1) / 2) * W,
        y: (((y * -1) + 1) / 2) * H
    }
}
function project({x, y, z}) {
    return {
        x: x / Math.max(0,z),
        y: y / Math.max(0,z)
    }
}
function normalizeAxisVector(v) {
    const len = Math.hypot(v.x, v.y, v.z);
    return { x: v.x / len, y: v.y / len, z: v.z / len };
}

function rotatePointAxisAndOrigin(point, axis, origin, angle) {
    axis = normalizeAxisVector(axis);

    const half = angle / 2;
    const s = Math.sin(half);
    const c = Math.cos(half);

    // rotation quaternion
    const q = { w: c, x: axis.x * s, y: axis.y * s, z: axis.z * s };
    // inverse quaternion
    const qc = { w: q.w, x: -q.x, y: -q.y, z: -q.z };
    // point as quaternion (just set w to 0)
    const p = { w: 0, x: point.x - origin.x, y: point.y - origin.y, z: point.z - origin.z };

    // quaternion multiplication (a * b)
    function mul(a, b) {
        return {
            w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
            x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
            y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
            z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w
        };
    }

    const qp = mul(q, p);
    const qpq = mul(qp, qc);

    return { x: qpq.x + origin.x, y: qpq.y + origin.y, z: qpq.z + origin.z };
}
function rotateWireframeAxisAndOrigin(wireframe, axis, origin, angle) {
    const copy = {
        vertices: wireframe.vertices.map(v => ({ x: v.x, y: v.y, z: v.z })),
        edges: wireframe.edges
    }
    copy.vertices.forEach((vertex, i) =>
        copy.vertices[i] = rotatePointAxisAndOrigin(copy.vertices[i], axis, origin, angle))
    return copy
}
function translateWireframe(wireframe, translation) {
    const copy = {
        vertices: wireframe.vertices.map(v => ({ x: v.x, y: v.y, z: v.z })),
        edges: wireframe.edges
    }
    copy.vertices.forEach(vertex => {
        vertex.x += translation.x;
        vertex.y += translation.y;
        vertex.z += translation.z;
    })
    return copy
}

function clear() {
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("background-color")
    ctx.fillRect(0, 0, W, H)
}
function drawLine(start, end) {
    const s = toScreenCoordinates(project(start))
    const e = toScreenCoordinates(project(end))
    ctx.beginPath()
    ctx.moveTo(s.x, s.y)
    ctx.lineTo(e.x, e.y)
    ctx.stroke()
}
function drawWireframe({vertices, edges}) {
    edges.forEach(edge => {
        let last = vertices[edge[0]]
        for (let i = 1; i < edge.length; i++) {
            const vertex = vertices[edge[i]]
            drawLine(last, vertex)
            last = vertex
        }
    })
}


let test_wireframe = {
    vertices: [
        {x:.5,y:.5,z:1},
        {x:-.5,y:.5,z:1},
        {x:.5,y:-.5,z:1},
        {x:-.5,y:-.5,z:1},
        {x:.5,y:.5,z:2},
        {x:-.5,y:.5,z:2},
        {x:.5,y:-.5,z:2},
        {x:-.5,y:-.5,z:2},
    ],
    edges: [
        [0,1,3,2,0],[4,5,7,6,4],
        [0,4],[1,5],[2,6],[3,7]
    ]
}

function frame(time) {
    clear()

    drawWireframe(
        rotateWireframeAxisAndOrigin(test_wireframe, {x: .5, y: 1, z: .25}, { x: 0, y: 0, z: 1.5 }, (.001 * time))
    )
}


const target_fps = 24
ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue("color")
ctx.lineWidth = 2.5
setInterval(_ => frame(Date.now()), 1000/target_fps)