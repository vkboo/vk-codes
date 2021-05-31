const Mock = require('mockjs');
module.exports = {
    url: 'api/student/list',
    res: {
        errcode: 0,
        errmessage: '',
        data: Mock.mock({
            'list|10-100': [{
                'id': '@ID',
                'name': '@cname',
                'email': '@email',
                'age|10-50': 1,
            }]
        })
    }
}
