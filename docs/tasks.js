module.exports = {
    paths: {
        '/create': {
            post: {
                tags: {
                    Tasks: 'Create a task'
                },
                description: 'Create Task',
                operationId: 'createTask',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Task'
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Task successfully created'
                    },
                    500: {
                        description: 'There was a problem trying to create a task'
                    }
                }
            }
        },
        '/': {
            get: {
                tags:{
                    Tasks: 'Get all tasks',
                },
                description: 'Get all tasks',
                operationId: 'getAllTasks',
                
            }
        }
    }
}