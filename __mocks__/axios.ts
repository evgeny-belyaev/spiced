// load our test.json file. This can be copied to the local
// folder. Can be a short version of your actual data set.
// const testJson = require('../../test.json')
//
// // Our mocked response
// const axiosResponse: AxiosResponse = {
//     data: testJson,
//     status: 200,
//     statusText: 'OK',
//     config: {},
//     headers: {}
// }

module.exports = {
    // Typescript requires a 'default'
    defaults: {},
    get: jest.fn(() => (Promise.resolve())),
    post: jest.fn(() => (Promise.resolve()))
}
