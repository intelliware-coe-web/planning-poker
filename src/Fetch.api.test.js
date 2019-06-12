import {getData, postData, putData, deleteData} from './Fetch.api';

describe('FetchApi', () => {
    const url = 'http://test.test';

    describe('getData', () => {  
        it('should return data when server returns ok response', (done) => {
            const SUCCESS_RESPONSE = {
                ok: true,
                status: 200,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(SUCCESS_RESPONSE));

            getData(url).then(response => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalledTimes(1);
                done();               
            });
        });

        it('should throw error when server returns not ok response', (done) => {
            const ERROR_RESPONSE = {
                ok: false,
                status: 404,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(ERROR_RESPONSE));

            getData(url).catch(error => {
                expect(ERROR_RESPONSE.json).toHaveBeenCalledTimes(0);
                expect(error.message).toBe('HTTP status ' + ERROR_RESPONSE.status);
                done();               
            });
        });
    
        it('should throw error when server throws an error', (done) => {
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject());
            getData(url).catch(error => {
                expect(error.message).toBe('Get data failed from url ' + url);
                done();
            });
        });
    });

    describe('postData', () => { 
        const data = {};

        it('should return data when server returns ok response', (done) => {
            const SUCCESS_RESPONSE = {
                ok: true,
                status: 200,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(SUCCESS_RESPONSE));

            postData(url, data).then(response => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalledTimes(1);
                done();               
            });
        });

        it('should throw error when server returns not ok response', (done) => {
            const ERROR_RESPONSE = {
                ok: false,
                status: 404,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(ERROR_RESPONSE));

            postData(url, data).catch(error => {
                expect(ERROR_RESPONSE.json).toHaveBeenCalledTimes(0);
                expect(error.message).toBe('HTTP status ' + ERROR_RESPONSE.status);
                done();               
            });
        });
    
        it('should throw error when server throws an error', (done) => {
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject()); 
            postData(url, data).catch(error => {
                expect(error.message).toBe('Post data failed to url ' + url);
                done();
            });
        });
    });

    describe('putData', () => {
        const data = {};

        it('should return data when server returns ok response', (done) => {
            const SUCCESS_RESPONSE = {
                ok: true,
                status: 200,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(SUCCESS_RESPONSE));

            putData(url, data).then(response => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalledTimes(1);
                done();
            });
        });

        it('should throw error when server returns not ok response', (done) => {
            const ERROR_RESPONSE = {
                ok: false,
                status: 404,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(ERROR_RESPONSE));

            putData(url, data).catch(error => {
                expect(ERROR_RESPONSE.json).toHaveBeenCalledTimes(0);
                expect(error.message).toBe('HTTP status ' + ERROR_RESPONSE.status);
                done();
            });
        });

        it('should throw error when server throws an error', (done) => {
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject());
            putData(url, data).catch(error => {
                expect(error.message).toBe('Post data failed to url ' + url);
                done();
            });
        });
    });

    describe('deleteData', () => {  
        it('should return data when server returns ok response', (done) => {
            const SUCCESS_RESPONSE = {
                ok: true,
                status: 200,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(SUCCESS_RESPONSE));

            deleteData(url).then(response => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalledTimes(1);
                done();               
            });
        });

        it('should throw error when server returns not ok response', (done) => {
            const ERROR_RESPONSE = {
                ok: false,
                status: 404,
                json: jest.fn()
            };
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(ERROR_RESPONSE));

            deleteData(url).catch(error => {
                expect(ERROR_RESPONSE.json).toHaveBeenCalledTimes(0);
                expect(error.message).toBe('HTTP status ' + ERROR_RESPONSE.status);
                done();               
            });
        });
    
        it('should throw error when server throws an error', (done) => {
            jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject());
            deleteData(url).catch(error => {
                expect(error.message).toBe('Delete data failed from url ' + url);
                done();
            });
        });
    });
});