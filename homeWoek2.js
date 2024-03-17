/*create tree1 and tree2 from nodes (function, which will take argument nodes and returns the tree1/tree2)
создать дерево1 и дерево2 из узлов (функция, которая принимает узлы аргументов и возвращает дерево1/дерево2)

nodes = [
    {id: 1, parentId: null},
    {id: 2, parentId: 1},
    {id: 3, parentId: 1},
    {id: 4, parentId: 2},
    {id: 5, parentId: 2},
    {id: 6, parentId: 3},
    {id: 7, parentId: 4},
    {id: 8, parentId: 7},
    {id: 9, parentId: 8},
]

tree1 = {
    1:{
        2: {
            4: {
                7: {
                    8: {
                        9: {}
                    }
                }
            },
            5: {}
        },
        3: {
            6: {}
        }
    }
}

tree2 = {
    id: 1,
    children: [
        {
            id: 2,
            children: [
                {id: 4, children: [
                    {id: 7, children: [
                        {id: 8, children: [
                            {id: 9, children: []}
                        ]}
                    ]}
                ]},
                {id: 5, children: []}
            ]
        },
        {
            id: 3,
            children: [
                {id: 6, children: []}
            ]
        }
    ]
}*/





const nodes = [
    {id: 1, parentId: null},
    {id: 2, parentId: 1},
    {id: 3, parentId: 1},
    {id: 4, parentId: 2},
    {id: 5, parentId: 2},
    {id: 6, parentId: 3},
    {id: 7, parentId: 4},
    {id: 8, parentId: 7},
    {id: 9, parentId: 8},
]
// здесь каждый обьект содержит свои обьекты
function createTree1(nodes) {
    const tree = {}
    const map = new Map()

    nodes.forEach(node => {
        map.set(node.id, {...node, children: {}})
    })

    nodes.forEach(node => {
        if (node.parentId === null) {
            tree[node.id] = map.get(node.id).children
        } else {
            const parent = map.get(node.parentId).children
            parent[node.id] = map.get(node.id).children
        }
    })

    return tree
}



// 2. функция для дерева 2, где каждый массив содержит свои массивы

function createTree2(nodes) {
    const map = new Map
    nodes.forEach(node => {
        map.set(node.id, {...node, children: []})
    })

    const tree = Array.from(map.values()).filter(node => node.parentId === null)[0]

    nodes.forEach(node => {
        if (node.parentId !== null) {
            const parent = map.get(node.parentId)
            parent.children.push(map.get(node.id))
        }
    })

    return tree
}



//3.дополнирельная функция 

function sum(a, b) {
    console.log('asd', this)
    return a + b
  }
    function decorator(func) {
    return function(...args) {
      console.log('asd', this)
      return func.apply(this, args)
    }
  }
  
