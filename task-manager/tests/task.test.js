const request = require('supertest');

const app = require('../src/app');
const Task = require('../src/models/task');
const { testUser, testUserId, testUserTwo, testUserTwoId, taskOne, taskTwo, taskThree, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            description: 'From my test'
        })
        .expect(201);

    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();
    expect(task).toMatchObject({
        description: 'From my test',
        completed: false
    });
});

test('Should get all tasks for user one', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send()
        .expect(200);
    
    expect(response.body.length).toBe(2);
});

test('Should delete authorizied user task', async () =>{
    await request(app)
        .delete(`/tasks/${taskThree._id}`)
        .set('Authorization', `Bearer ${testUserTwo.tokens[0].token}`)
        .send()
        .expect(200);
    
    const task = await Task.findById(taskThree._id);
    expect(task).toBeNull();
});
