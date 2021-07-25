import Mock from 'mockjs'

// 设置响应延时
Mock.setup({
    timeout: '100-1000'//可以是整数，也可以是‘-’字符串
})

Mock.mock('/mock/getList/root', 'get', {
    'msg': '操作成功',
    'code': 0,
    'data': [
        {
            name: "父节点",
            id: 0,
            isParent: true,
            // iconSkin: "pIcon01"
        },
        {
            name: "父节点2",
            id: 100,
            isParent: true,
            // iconSkin: "pIcon01"
        },
    ]
})

Mock.mock('/mock/getList/0', 'get', {
    'msg': '操作成功',
    'code': 0,
    'data': [
        {
            name: "模型分组1",
            id: 1,
            pid: 0,
            iconSkin: "icon_model",
            isParent: false,
            nocheck: true
        },
        {
            name: "模型分组2",
            id: 12,
            pid: 0,
            iconSkin: "icon_model",
            isParent: false,
            nocheck: true
        },
    ]
})
export default Mock;