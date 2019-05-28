import {getData, postData} from './Fetch.api';

describe('FetchApi', () => {
    const url = 'http://test.test';

    describe('getData', () => {        
        it('should return data when server returns ok response', (done) => {
            mockFetchReturningSuccessResponse();
            getData(url).then(response => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalled();
                done();               
            });
        });

        it('should throw error when server returns not ok response', (done) => {
            mockFetchReturningErrorResponse();
            getData(url).catch(error => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalled();
                expect(error.message).toBe('HTTP status ' + ERROR_RESPONSE.status);
                done();               
            });
        });
    
        it('should throw error when server throws an error', (done) => {
            mockFetchThrowingError(); 
            getData(url).catch(error => {
                expect(error.message).toBe('Get data failed from url ' + url);
                done();
            });
        });
    });

    describe('postData', () => { 
        const data = {};       
        it('should return data when server returns ok response', (done) => {
            mockFetchReturningSuccessResponse();
            postData(url, data).then(response => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalled();
                done();               
            });
        });

        it('should throw error when server returns not ok response', (done) => {
            mockFetchReturningErrorResponse();
            postData(url, data).catch(error => {
                expect(SUCCESS_RESPONSE.json).toHaveBeenCalled();
                expect(error.message).toBe('HTTP status ' + ERROR_RESPONSE.status);
                done();               
            });
        });
    
        it('should throw error when server throws an error', (done) => {
            mockFetchThrowingError(); 
            postData(url, data).catch(error => {
                expect(error.message).toBe('Post data failed to url ' + url);
                done();
            });
        });
    });    
});

const SUCCESS_RESPONSE = {
    ok: true,
    status: 200,
    json: jest.fn()
}

const ERROR_RESPONSE = {
    ok: false,
    status: 404,
    json: jest.fn()
}

function mockFetchReturningSuccessResponse() {
    const mockFetchPromise = Promise.resolve(SUCCESS_RESPONSE);
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
}

function mockFetchReturningErrorResponse() {
    const mockFetchPromise = Promise.resolve(ERROR_RESPONSE);
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
}

function mockFetchThrowingError() {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject());
}