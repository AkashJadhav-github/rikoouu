// resolvers.js
const models = require('../models')

const resolvers = {

    Query: {
        async getStudent(root, { id }, { models }) {
            return models.Student.findByPk(id)
        },
        async getAllStudents(root, args, { models }) {
            return models.Student.findAll()
        },
        async getHobbies(root, { id }, { models }) {
            return models.Hobbies.findByPk(id)
        },
        async getAllHobbies(root, args, { models }) {
            return models.Hobbies.findAll()
        },
        me: async (parent, args, { models, me }) => {
            if (!me) {
                return null;
            }
            return models.Student.findByPk(me.id);
        },

    },

    Mutation: {

        async createStudent(root, { firstName, email }, { models }) {
            return models.Student.create({
                firstName,
                email
            })

        },

        async createHobbies(root, { studentId, title }, { models }) {
            return models.Hobbies.create({ studentId, title })
        },

        async deleteStudent(root, { id }, { models }) {
            return models.Student.destroy({
                where: { id },
            });
        },

        async updateStudent(root, { firstName }, { models, me }) {
            const student = models.Student.findByPk(me.id);
            return student.update({ firstName });
        }

    },

    Student: {
        async hobbies(hobbies) {
            return hobbies.getHobbies()
        }
    },

    Hobbies: {
        async student(student) {
            return student.getStudent()
        }
    },

}

module.exports = resolvers;