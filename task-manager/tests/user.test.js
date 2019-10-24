const request = require('supertest');

const app = require('../src/app');
const User = require('../src/models/user');

const { testUser, testUserId, setupDatabase } = require('./fixtures/db');


beforeEach(setupDatabase);

test('Should signup a new user', async () => {
    const response = await request(app)
    .post('/users')
    .send({
        name: 'MahanTester',
        email: 'mahi@kahi.lahi',
        password: 'LolThis1234'
    })
    .expect(201);

    // Assert that databse was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    // Assertions about the responce
    expect(response.body).toMatchObject({
        user: {
            name: 'MahanTester',
            email: 'mahi@kahi.lahi'
        },
        token: user.tokens[0].token
    });

    expect(user.password).not.toBe('LolThis1234');
});

test('Should login existing user', async () => {
    const response = await request(app)
    .post('/users/login')
    .send({
        email: testUser.email,
        password: testUser.password
    })
    .expect(200);

    const user = await User.findById(response.body.user._id);
    const tokens = user.tokens;

    expect(response.body.token).toBe(tokens[tokens.length-1].token);
});

test('Should not login nonexistent user', async () => {
    await request(app)
    .post('/users/login')
    .send({
        email: testUser.email,
        password: "thisiswrong.orisit?"
    })
    .expect(400);
});

test('Should fetch user profile', async () => {
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
    .send()
    .expect(200);
});

test('Should not fetch profile for unauthenticated user', async () => {
    await request(app)
    .get('/users/me')
    .send()
    .expect(401);
});

test('Should delete account user', async () => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
    .send()
    .expect(200);

    const user = await User.findById(testUser._id);
    expect(user).toBeNull();
});

test('Should not acount for unauthenticated user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401);
});

test('Should upload avatar image', async () => {
    const response = await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200);

    const user = await User.findById(testUserId);

    expect(user.avatar).toEqual(expect.any(Buffer));
});

test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            name: "UserUSer100taUser",
            email: "jogooll@maaa.com"
        })
        .expect(200);
    
    const user = await User.findById(testUserId);
    expect(user).toMatchObject({
        name: "UserUSer100taUser",
        email: "jogooll@maaa.com"
    });
});

test('Should not update invalid user fields', async () =>{
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            location: "UserUSer100taUser"
        })
        .expect(400);

    const user = await User.findById(testUserId);
    expect(user).toMatchObject({
        name: "TestUser",
        email: "Mylove@lytest.user".toLowerCase()
    });
});